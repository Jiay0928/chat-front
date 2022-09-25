import React,{useState} from 'react';
import Chatroom from './components/chatroom';
import SideBar from './components/sideBar';
import SigninBlock from './components/signinblock';
import "./App.less";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
export default function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("")
  
  let chatRoom = <>
    <SideBar room={room}/>
    <Chatroom room={room} username={username}/>
  </>
    return (
        <div className='App'>
              <Router>
                <Routes>
                  <Route path="/" element={<SigninBlock username={username} room={room} setUsername={setUsername} setRoom={setRoom}/>}/>
                  <Route path="/chat" element={chatRoom} username={username} room={room}/>
                </Routes>
              </Router>
         
        </div>

    )
}