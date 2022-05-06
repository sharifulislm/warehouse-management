
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Pages/Footer/Footer';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';
import Notfound from './components/Pages/Notfound/Notfound';
import { ToastContainer, toast } from 'react-toastify';


import Service from './components/Service/Service';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Inventory from './components/Inventory/Inventory';

function App() {
  // firebase deploy
  return (
    <div className="">
 <Header></Header>

 <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='inventory/:inventoryId' element={<PrivateRoute><Inventory></Inventory></PrivateRoute>}></Route>
   <Route path='Service' element={ <PrivateRoute> <Service></Service> </PrivateRoute> }></Route>
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
