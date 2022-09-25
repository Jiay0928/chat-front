import React from 'react';
import { useNavigate } from "react-router-dom";
import "./index.less"
const axios = require('axios').default;;
export default function SigninBlock({setUsername, setRoom, username, room}) {
  const navigate = useNavigate();
  const submitHandler = async(e) => {
    e.preventDefault();
    try{
      let data = await axios.post("http://localhost:3000/login",{username, room})
    }catch(e){
      alert("error happening")
      return;
    }
    
     navigate("/chat", { replace: true });
   

  }
  return (
    <div className='SigninBlock' >
      <form onSubmit={submitHandler}>
        <label>
          username:
          <input type="text" name="username" value={username} onChange={(e)=>{
            setUsername(e.target.value);
          }}/>
        </label>
        <label>
          room:
          <input type="text" value={room} name="password" onChange={(e) => {
            setRoom(e.target.value);
          }}/>
        </label>
        <button className='submit' type="submit">Submit</button>
        
      </form>

    </div>
  );
}
