import React from 'react'

const Login = () => {
  return (
    <div className="login">
      <h1 className="loginTitle">Choose Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <img src="https://img.icons8.com/color/50/000000/google-logo.png" className="icon"/>
            Google
          </div>
          <div className="loginButton facebook">
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" className="icon"/>
            Facebook
          </div>
          <div className="loginButton github">
            <img src="https://img.icons8.com/nolan/64/github.png" className="icon"/>
            Github
          </div>
        </div>
        <div className="center">
          <div className="line"></div>
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="submit">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
