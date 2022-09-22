import React from 'react';
import Chatroom from './components/chatroom';
import SideBar from './components/sideBar';
import SigninBlock from './components/signinblock';
import "./App.less";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
export default function App() {
  
  let chatRoom = <>
    <SideBar/>
    <Chatroom title="lol" userId={1}/>
  </>
    return (

        <div className='App'>
              <Router>
                <Routes>
                  <Route path="/" element={<SigninBlock/>}/>
                  <Route path="/chat" element={chatRoom}/>
                </Routes>
              </Router>
         
        </div>

    )
}