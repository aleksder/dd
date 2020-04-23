import React, {Component, } from 'react';
  import {  
Route,

Switch,
Reditect
  } 

  from 'react-router-dom';
  import './App.css'
  import Home from './Pages/Home/home';
  import Chat from './Pages/Chat/chat';
  import Profile from './Pages/Profile/profile';
  import SignUp from './Pages/SignUp/signup';
  import Login from './Pages/Login/login';
  import firebase from './Services/firebase';
  import {toast, toastContainer, ToastContainer} from 'react-toastify';

  class App extends Component{
    showToast = (type, message, ) => 
    {
      switch(type)
      {
        case 0:
          toast.warning(message)
          break;
          case 1:
            toast.success(message)
            
            default:

      }
    
  }

  constructor()
  {
    super();
    this.state = {
      authenticated: false,
      loading: true

    };

  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user =>{
if(user)
{
  this.setState({
    authenticated: true,
    loading: false

  });
}else{
  this.setState({
    authenticated: false,
    loading: false
  });
 }
})
  }
  render()
  {
    return this.state.loading === true ? (
<div className="spinner-border text-success" role = 'status'>
  <span className = "sr-only">loading...</span>
  </div>

    ): (
      <Router>
        <ToastContainer
        autoClose = {2000}
        hideProgressBar =  {true}
        position = {toast.POSITION.BOTTOM_CENTER}
        />
        <Switch>
          <Route
            exact
            path = "/"
            render = {props => <Home{...props}/>}/>
            

          <Route
          path = "/login"
          render = {props => <Login showToast={this.showToast}{...props}/>}
          />
          <Route
          path = "/profile"
          render = {props => <Profile showToast={this.showToast}{...props}/>}
          />
          <Route
          path = "/signup"
          render = {props => <SignUp showToast={this.showToast}{...props}/>}
          />
          <Route
          path = "/chat"
          render = {props => <Chat showToast={this.showToast}{...props}/>}
          />



        
        </Switch>
      </Router>
    )
  }
}
export default App