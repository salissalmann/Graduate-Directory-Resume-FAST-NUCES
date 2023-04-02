import React from "react";
class Login extends React.Component{
    render(){
        return(


          
            <div>
                <div class="login-container">
                  <section class="login" id="login">
                    <header>
                      <h2>Graduating Directory Resume</h2>
                      <h4>Login</h4>
                    </header>
                    <form class="login-form" action="#" method="post">
                      <input type="text" class="login-input" placeholder="User" required autofocus/>
                      <input type="password" class="login-input" placeholder="Password" required/>
                      <div class="submit-container">
                        <button type="submit" class="login-button">SIGN IN</button>
                      </div>
                    </form>
                  </section>
              </div>
            </div>
        );
    }
}
export default Login;