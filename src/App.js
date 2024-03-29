
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Pages/Footers/Footers';
import Login from './components/Pages/Login/Login';
// import SignUp from './components/Pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import Notfound from './components/Pages/Notfound/Notfound';


import Contact from './components/Home/Contact';
import Inventory from './components/Inventory/Inventory';
import ManageInventory from './components/ManageInventory/ManageInventory';
import AddItem from './components/Pages/AddItem/AddItem';
import ManageItem from './components/Pages/ManageItem/ManageItem';
import Manageitems from './components/Pages/ManageItems/Manageitems';
import ManageMyItem from './components/Pages/ManageItems/ManageMyItem';
import SignUp from './components/Pages/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Service from './components/Service/Service';

function App() {
  // firebase deploy
  // http://localhost:5000/
  return (
    <div className="">
 <Header></Header>

 <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='inventory/:inventoryId' element={<PrivateRoute><Inventory></Inventory></PrivateRoute>}></Route>
   <Route path='Service' element={ <PrivateRoute> <Service></Service> </PrivateRoute> }></Route>
   <Route path='AddItem' element={ <PrivateRoute> <AddItem></AddItem> </PrivateRoute> }></Route>
   <Route path='ManageItem' element={ <PrivateRoute> <ManageItem></ManageItem> </PrivateRoute> }></Route>
   <Route path='userItem' element={ <PrivateRoute> <ManageMyItem></ManageMyItem> </PrivateRoute> }></Route>
   <Route path='MyItem' element={ <PrivateRoute> <Manageitems></Manageitems> </PrivateRoute> }></Route>
   <Route path='ManageInventory' element={<ManageInventory></ManageInventory>}></Route>
   <Route path='Contact' element={<Contact></Contact>}></Route>
   {/* <Route path='Blog' element={<Blog></Blog>}></Route> */}
   <Route path='Login' element={<Login></Login>}></Route>
   <Route path='SignUp' element={<SignUp></SignUp>}></Route> 
  <Route path='*' element={<Notfound></Notfound>}>  </Route>


 </Routes>

<Footer></Footer>

<ToastContainer />

    </div>
  );
}

export default App;
