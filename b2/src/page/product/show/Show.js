import {Link} from "react-router-dom";
import './Show.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleted, getAll} from "../../../redux/service/productService";

export const Show = () => {

    const dispatch = useDispatch();
    const product = useSelector(({products}) => {
        return products.listProduct;
    });
    useEffect(() => {
        dispatch(getAll());
    }, [])

    const deleteStudent = async (id) => {
        try {
            await dispatch(deleted(id));
            console.log("Student deleted successfully");
            dispatch(getAll())
        } catch (error) {
            console.error("Error deleting student", error);
        }
    };

    return(
        <>
            <h1>List Product</h1>
            <table border={1}>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td colSpan={2}></td>
                </tr>
                </thead>
                <tbody>
                {
                    product.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><Link to={`/product/edit/${item.id}`}>
                                <button>Sửa</button>
                            </Link></td>
                            <td>
                                <button onClick={() => deleteStudent(item.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}