import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About'
import StyledComponents from './style_components/StyledComponents';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';
import Tattoos from './pages/Tattoos';
import Tattoo from './pages/Tattoo';


function App() {
  return (
    <>
    <div style={{backgroundColor: '#F6F6F6'}}>
    <NavBar />
    <FetchUser>
   <Switch>
   <ProtectedRoute exact path='/' component={Home} />
     <Route exact path='/about' component={About} />
     <Route exact path='/tattoos' component={Tattoos} />
     <Route exact path='/tattoo/:id' component={Tattoo} />
     <Route exact path='/styled' component={StyledComponents} />
     <Route exact path='/register' component={Register} />
     <Route exact path='/login' component={Login} />
   </Switch>
   </FetchUser>
   </div>
   </>
  )
}

export default App;
