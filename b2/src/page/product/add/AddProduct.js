import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {add} from "../../../redux/service/productService";

export const AddProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addForm = async (values) =>{
        await dispatch(add(values));
        navigate('/product/show');
    }

    return(
        <>
            <h1>Create Product</h1>
            <Formik
                initialValues={{
                    title: '',
                    price: '',
                    description: ''

                }}
                onSubmit={(values, {setSubmitting}) => {
                    addForm(values);
                    setSubmitting(false);
                }}
            >
                <Form>
                    <Field name={"title"} placeholder={"Title"} type={'text'}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'title'}/></span><br/>
                    <Field name={"price"} placeholder={"Price"} type={"number"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'price'}/></span><br/>
                    <Field name={"description"} placeholder={"Description"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'description'}/></span><br/>
                    <button type='submit'>Add</button>
                </Form>
            </Formik>
        </>
    )
}