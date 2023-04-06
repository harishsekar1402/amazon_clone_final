import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import Payment from './payment';
function App() {
  const [{}, dispatch] = useStateValue();

 useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="App">
    
      <Switch>
        <Route path='/Login'>
          <Login />
        </Route>
        <Route path="/checkout">
          <Fragment>
          <Header />
          <Checkout /></Fragment>
        </Route>
        <Route path="/payment">
          <Fragment>
            <Header />
          <Payment /></Fragment>
        </Route>
        <Route path="/">
          <Fragment>
          <Header />
          <Home /></Fragment>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
