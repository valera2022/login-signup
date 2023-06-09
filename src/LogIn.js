import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function LogIn({state}) {
  console.log(state)
  
   
   const history = useHistory()
    const [username,setUser]= useState("")
     const [password,setPass]= useState("")
    //  console.log(username)
    //  console.log(password)

    // state.forEach((data)=>{
    //     console.log( data.username)
        
    // })

    function handleSubmit(e){
        e.preventDefault()
       
      state.map((account)=>{
        if(account.username === username){
        fetch(`http://localhost:8000/data/${account.id}` )
      .then((r)=>  r.json())
    .then((data)=>{
      if(password === null || password === ""){
          toast.warn("password field should not be empty")}
        else if(password !== data.password){
          toast.warn("Wrong Password")
        }
        else{
            history.push("/")

          }

      })}
      
      

      
      })
          // if(password === null || password === ""){
          //   toast.warn("password field should not be empty")}
          // else if(password !== data.password){
          //   toast.warn("Wrong Password")
          // }
          // else{
          //   history.push("/home")

          // }
         
        
        
        
        console.log(e.target.username.value)
        console.log(e.target.password.value)
        let logInData = {
                    username: e.target.username.value,
                    password: e.target.password.value

        }
         }

        //  function handleChange(e){
        //   setUser(e.target.username)
        //   console.log(username)

        //  }
        

    
    return (
      <div>
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text"  value={username} name="username" placeholder="Username" onChange={e=> setUser(e.target.value)} />
          </div>
          <div>
            <input type="password" value={password}name="password" placeholder="Password" onChange={e=> setPass(e.target.value)}/>
          </div>
          <Button variant="dark" as="input" type="submit" value="Submit" />
        </form>
        </>
      </div>
    );
  }

  export default LogIn