import './App.css';
import Sidebar from './components/sidebar';
import History from './pages/history/history';
import RoomManagement from './pages/room management/roomManagement';
import ReservationManagement from './pages/reservation management/reservationManagement';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import ChangePassword from './pages/change password/changePassword';
import MoreInfo from './pages/history/moreInfo';
import Login from './pages/login/login';
 
function App() {

  // ต้องใช้อันนี้
  // const [isActive, setActive] = useState("false");
  // const ToggleClass = () => {
  //   setActive(!isActive); 
  //  };

  return (
    <Router>
        <Switch >
          <Route path ="/history" exact={true} component={History}>
            <History />
            <Sidebar />
          </Route>
          <Route path="/roomManagement">
            <RoomManagement />
            <Sidebar />
          </Route>
          <Route path="/reservationManagement">
            <ReservationManagement />
            <Sidebar />
          </Route>
          <Route path="/reservationManagement">
            <ReservationManagement />
            <Sidebar />
          </Route>
          <Route path="/changePassword">
            <ChangePassword />
            <Sidebar />
          </Route>
          <Route path="/moreInfo">
            <MoreInfo />
            <Sidebar />
          </Route>
          <Route path="/">
            <div className="login_container">
              <Login />
            </div>
          </Route>
          
        </Switch>
    </Router>
  );
}
 
export default App;
