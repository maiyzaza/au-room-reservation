import '../../App.css';

import React, { useState, useEffect  } from 'react';
import logoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

<Link to="/about">About</Link>
 
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    let  payload = {
        Username : username,
        Password : password,
    }
    axios.post("https://arr-dev.azurewebsites.net/api/v1/login/login", payload)
    .then((res) => {
      // console.log("res",res.data.data.token);
      console.log(res.data.data);
      window.sessionStorage.setItem("token", res.data.data.token)
      history.push("/roomManagement")
      // window.location.reload()
      setAlert(false)
    })
    .catch((res) => {
      setAlert(true)
    });
  }

  return (
    <div>
      <form class="login_form" onSubmit={handleSubmit}>
          <img class="login_logo" src={logoImg}></img>
          <input
            onChange={event => setUsername(event.target.value)}
            value={username}
            // required
            id="username"
            name="Username"
            placeholder="Username"
          />
          <input
            // required
            onChange={event => setPassword(event.target.value)}
            value={password}
            id="password"
            name="Password"
            placeholder="Password"
          />
          <button>Sign In</button>
          {alert && <p> Worng Username or Password</p>}
      </form>
    </div>
  );
}
 
export default Login;