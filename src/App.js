import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.scss";
import HomeDetails from "./components/HomeDetails/HomeDetails";
import Login from "./components/Login/Login";
import AddRentHouse from "./components/AddRentHouse/AddRentHouse";
import MyRent from "./components/MyRent/MyRent";
import BookingList from "./components/BookingList/BookingList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/homedetails">
          <HomeDetails></HomeDetails>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/addRentHouse">
          <AddRentHouse />
        </Route>
        <Route path="/myRent">
          <MyRent />
        </Route>
        <Route path="/bookingList">
          <BookingList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
