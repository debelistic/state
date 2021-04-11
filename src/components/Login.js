import React, {useState} from 'react';
import '../styles/Login.css'

export default function Login () {
  const [passState, setPassState] = useState(false);

  const passwordIcon = passState ? 'lock_open' : 'lock';
  const showPassword = passState ? 'text' : 'password';
  const changePasswordIcon = () => passState ? setPassState(false) : setPassState(true);
  return (
    <div className="container">
      <div className="wrapper">
        <form>
          <div className="title">
            <h3>State Management</h3>
            <h5>click the password lock icon</h5>
          </div>
          <div className="form-control">
            <input autocomplete="off" type="email" placeholder="Email" />
            <span class="material-icons">mail</span>
          </div>

          <div className="form-control">
            <input autocomplete="off" type={showPassword} placeholder="Password"/>
            <span class="material-icons" onClick={changePasswordIcon}>{passwordIcon}</span>
          </div>
        </form>
      </div>
    </div>
  )
}
