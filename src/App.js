import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import AddService from './Pages/AddService/AddService';
import Contact from './Pages/Contact/Contact';
import Details from './Pages/Details/Details/Details';
import TeamMemberGallery from './Pages/Gallery/TeamMemberGallery/TeamMemberGallery';
import Home from './Pages/Home/Home/Home';
import LoginForm from './Pages/Login/LoginForm/LoginForm';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import LocationGallery from './Pages/Gallery/LocationGallery/LocationGallery';
import Manageservices from './Pages/Manageservices/Manageservices';
import UpdateData from './Pages/UpdateData/UpdateData';
import Orderpackage from './Pages/Orderpackage/Orderpackage';
import ShowmyOrder from './Pages/ShowmyOrder/ShowmyOrder';
import MyAllOrders from './Pages/MyAllOrders/MyAllOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute exact path='/contact'>
              <Contact></Contact>
            </PrivateRoute>
            <Route exact path='/doctorg'>
              <TeamMemberGallery></TeamMemberGallery>
            </Route>
            <Route exact path='/servicesg'>
              <LocationGallery></LocationGallery>
            </Route>
            <Route path='/login'>
              <LoginForm></LoginForm>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/orderpackege'>
              <Orderpackage></Orderpackage>
            </Route>
            <Route path='/myorder'>
              <ShowmyOrder></ShowmyOrder>
            </Route>
            {/* <Route path='/myallorder'>
              <MyAllOrders></MyAllOrders>
            </Route> */}
            <PrivateRoute path='/service/updatedata/:serviceId'>
              <UpdateData></UpdateData>
            </PrivateRoute>
            <PrivateRoute path='/manageservices'>
              <Manageservices></Manageservices>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path='/addservice'>
              <AddService></AddService>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
