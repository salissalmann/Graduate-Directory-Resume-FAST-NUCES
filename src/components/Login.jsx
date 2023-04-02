import React from "react";
import Navigation from "./Navigation";
export default function Login() {
  return (
    <>
      <Navigation />
      <div className="container my-5" id="login-bar">
        <section className="login" id="login">
          <header>
            <h2>Graduating Directory Resume</h2>
            <h4>Login</h4>
          </header>
          <form className="login-form" action="#" method="post">
            <input
              type="text"
              className="login-input"
              placeholder="Email"
              required
              autofocus
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              required
            />
            <div className="submit-container">
              <button type="submit" className="login-button">
                SIGN IN
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
