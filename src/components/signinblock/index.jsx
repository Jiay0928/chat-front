import React, {useState, } from 'react';
import { useNavigate } from "react-router-dom";
import "./index.less"
export default function SigninBlock() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
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
          password:
          <input type="text" value={password} name="password" onChange={(e) => {
            setPassword(e.target.value);
          }}/>
        </label>
        <button className='submit' type="submit">Submit</button>
        
      </form>

    </div>
  );
}
