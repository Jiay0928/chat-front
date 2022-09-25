import React, {useState, useEffect} from 'react';
import "./index.less";
import io from 'socket.io-client';
const socket = io(`ws://localhost:3000`); 

export default function Chatroom({room, username}) {
  let chatContainer;
  const [newChat, setnewChat] = useState('');
  const [chats, setChats] = useState([]);
  useEffect(() => {
    chatContainer = document.getElementById("chatContainer");
    socket.connect();
    socket.emit('joinRoom', {username, room})
    socket.on('message', value =>{
      let time = Date.now();
      setChats([...chats, value])
    
    return () => {
      socket.disconnect();
    }

  }, [])
  
  
    
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
  
  })
  const chatBoxGenerator = ({ person, word},index)=>{
    if (person === username){
      return (
        <div className="chatBoxRight" key={index}>
       
        <div className='wordContainer'>
          <div className="word">
          {word}
          </div>
        </div>
        <div className='name'>
          {person}
        </div>
      </div>
      )
    }else
    return (
      <div className="chatBoxLeft" key={index}>
        <div className='name'>
          {person}
        </div>
        <div className='wordContainer'>
          <div className="word">
          {word}
          </div>
            
        </div>
      </div>
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newChat !== ''){
        socket.emit('chatMessage', {username, msg:newChat});
        setnewChat("");
    }
  }
  return (
    <div className='Chatroom'>
          <div className='btnContainer'>
            <button>leave chat</button>
          </div>
          <div className="chatContainer" id="chatContainer">
          {chats.map((value,index)=>chatBoxGenerator(value,index))}
         
          </div>
          <form onSubmit={handleSubmit}>        
              <input className='inputBox' type="text" value={newChat} onChange={(e)=>{setnewChat(e.target.value)}} />    
            <input className='submit' type="submit" value="Send" />
          </form>
          
          
    </div>
    );
}