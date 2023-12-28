import {Field, Form, Formik} from "formik";
import {edit} from "../../../redux/service/productService";
import axios from "axios";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

export const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useSelector(({ products }) => products.listProduct.find(s => s.id === +id) || {});

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`);
                dispatch(edit.fulfilled({ data: response.data }));
            } catch (error) {
                console.error("Error fetching student data", error);
            }
        };

        if (!product.id) {
            fetchStudent().then();
        }
    }, [id, dispatch, product]);

    const handleFormSubmit = async (values) => {
        values.preventDefault();
        try {
            await dispatch(edit({ id: +id, updatedStudent: values }));
            console.log("Product updated successfully");
            navigate('/product/show');
        } catch (error) {
            console.error("Error updating product", error);
        }
    };
    return (
        <>
            <h1>Edit Student {id}</h1>
            <Formik
                initialValues={product}
                onSubmit={handleFormSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <Field type="text" id="title" name="title" />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <Field type="text" id="price" name="price" />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <Field as="textarea" id="description" name="description" />
                    </div>
                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </>
    );
}