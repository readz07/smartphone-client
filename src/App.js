import Home from './Pages/Home/Home'
import Header from './Pages/Common/Header/Header'
import Footer from './Pages/Common/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Blog from './Pages/Blog/Blog';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import NotFound from './Pages/NotFound/NotFound';
import AddProduct from './Pages/AddProduct/AddProduct';
import RequireAuth from './RequireAuth/RequireAuth';
import MyProducts from './Pages/MyProducts/MyProducts';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/manageinventory" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        } />
        <Route path="/addproduct" element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        } />
        <Route path="/productdetail" element={<ProductDetail></ProductDetail>} />
        <Route path="/productdetail/:productId" element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        } />
        <Route path="myproducts" element={
          <RequireAuth>
            <MyProducts></MyProducts>
          </RequireAuth>
        } />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/contactus" element={<ContactUs></ContactUs>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/signin" element={<SignIn></SignIn>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
