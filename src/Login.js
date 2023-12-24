
import "./app.css"

import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {

  const [email, setEmail] = useState("")
  const [pswd, setPswd] = useState("")

  const navigate = useNavigate()




  const firebaseConfig = {
    apiKey: "AIzaSyClEH1wG_p4Bk7y8dl88UEi1OcSmd_7Yl4",
    authDomain: "pro-app-7adb5.firebaseapp.com",
    projectId: "pro-app-7adb5",
    storageBucket: "pro-app-7adb5.appspot.com",
    messagingSenderId: "840528707586",
    appId: "1:840528707586:web:759e54f6d5ecf02251671b",
    measurementId: "G-Q000JTLWD8"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const submitData = (event) => {
    event.preventDefault()

    let obj = {
      Email: email,
      password: pswd

    }
    signInWithEmailAndPassword(auth, obj.Email, obj.password)
      .then(() => {
        alert("Login successfully")
        navigate("/Main")
      })
      .catch(() => {
        alert("error.")
      })
  }


  return (
   

    <div id="signup" >
      <h2 id="h" ><b><span style={{ color: "purple" }}> Mobile</span><span style={{ color: "pink" }}> Store</span> </b> </h2>
      <div id="form" >


        <form onSubmit={submitData} >
          <h2 style={{ textAlign: "center", color: "azure" }} >Please Login</h2>

          <div>
            <br></br>
            <label><b style={{ fontSize: "larger" }}>E-mail:</b></label>
            <br></br>
            <input id="in" type="email" required placeholder="enter your e-mail" value={email} onChange={e => setEmail(e.target.value)}></input>
          </div>
          <div>
            <br></br>
            <label><b style={{ fontSize: "larger" }}>Password:</b></label>
            <br></br>
            <input id="in" type="password" required placeholder="password" value={pswd} onChange={e => setPswd(e.target.value)} ></input>
          </div>
          <br></br>


          <button id="re" type="submit" class="btn btn-primary" >Login</button>
        </form>

        <br></br>
        <a><b>Don't have an account?</b>
          <Link to="/" style={{ textDecorationLine: "none", marginLeft: "10px", fontSize: "larger", color: "white" }}>Register</Link>
        </a>

      </div>
    </div>
















  )
}
export default Login;
