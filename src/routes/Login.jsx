import React, {useEffect, useState} from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


export default function Login(){
  const history = useNavigate();

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')


  async function submit(e){
    e.preventDefault();


    try{
      await axios.post("http://localhost:5173/",{
        email,password
      })
      .then(res => {
        if(res.data="exist"){
          history("/home")
        }
      })
    }
    catch(e){
      console.log(e)
    }
  }

  return(
    <>
        <div className="Login">
          <h1>Login</h1>
          <form action="POST">
            <input type="email" onChange={(e) => {setEmail(e.target.value)}} name="Email" id="" className="border" placeholder="Email" />

            <input type="password" onChange={(e) => {setPassword(e.target.value)}} name="Password" id="" className="border" placeholder="Password"/>

          <input type="submit" onclick={submit} />

          </form>
          <br/>
          <p> OR </p>
          <br/>
          <Link to="/Signup">Signup Page</Link>

        </div>
    </>
  )
}