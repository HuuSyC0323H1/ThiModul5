import {Route, Routes} from "react-router-dom";
import {Page} from "./page/Page";
import {Show} from "./page/product/show/Show";
import {AddProduct} from "./page/product/add/AddProduct";
import {EditProduct} from "./page/product/edit/EditProduct";

function App() {
    return (
        <Routes>
            <Route path="product" element={<Page />}>
                    <Route path="show" element={<Show/>}/>
                    <Route path="add" element={<AddProduct/>}/>
                    <Route path="edit/:id" element={<EditProduct/>}/>
            </Route>
        </Routes>
    );
}

export default App;
