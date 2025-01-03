import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function SignIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = ()=>{
        event.preventDefault();
        console.log("click");
    // const username = document.querySelector("#username").innerHTML;
    // const password = document.querySelector("#password").innerHTML;
    
    console.log(username, password)
    getLogin(username, password);
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {/* <p id="errorMessage">Email ou mot de passe invalide. Veuillez réessayer.</p> */}
                <form id="form" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input value={username} onChange={(e)=> setUsername(e.target.value)} type="username" id="username" name="username" autoComplete="off"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" id="password" name="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" name="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <a href="./user.html" className="sign-in-button" id="sign-in">Sign In</a> */}
                    {/* <input type="submit" value="Se connecter" id="connexion"></input> */}
                    <button type="submit" value="Sign In" className="sign-in-button" id="sign-in">Sign In</button>
                </form>
            </section>
        </main>
    );
}
  
export default SignIn;