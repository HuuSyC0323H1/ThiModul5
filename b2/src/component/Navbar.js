import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <h1>
                <Link to={'/product/show'}>Home</Link> |
                <Link to={'/product/add'}>Add</Link>
            </h1>
        </>
    )
}