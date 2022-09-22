import React, {useState} from 'react';
import "./index.less";

export default function Chatroom({title, userId}) {
  let chatStream = [
    {
      id:1,
      person: "Jack",
      word: "fu",
      time: new Date('September 21, 2022 03:24:00')
    },
    {
      id:2,
      person: "Alice",
      word: "wwe asdfwaer adfwefwfdaf asdfsdfsdfaf  adfdfaasdf adsfsdfsf sadfsdfqw wfdf asdfsdafqwefdsafdassf",
      time: new Date('September 21, 2022 03:25:00')
    },
    {
      id:2,
      person: "Jonny",
      word: "wwe asdfwaer adfwefwfdaf asdfsdfsdfaf  adfdfaasdf adsfsdfsf sadfsdfqw wfdf asdfsdafqwefdsafdassf",
      time: new Date('September 21, 2022 03:26:00')
    },
    {
      id:4,
      person: "Miranda",
      word: "wwe asdfwaer adfwefwfdaf asdfsdfsdfaf  adfdfaasdf adsfsdfsf sadfsdfqw wfdf asdfsdafqwefdsafdassf",
      time: new Date('September 21, 2022 03:27:00')
    },
    {
      id:1,
      person: "Jack",
      word: "fu",
      time: new Date('September 21, 2022 03:24:00')
    },
    {
      id:1,
      person: "Miranda",
      word: "wwe asdfwaer adfwefwfdaf asdfsdfsdfaf  adfdfaasdf adsfsdfsf sadfsdfqw wfdf asdfsdafqwefdsafdassf",
      time: new Date('September 21, 2022 03:27:00')
    },
  ]
  const [newChat, setnewChat] = useState('');
  const chatBoxGenerator = ({id, person, word},index)=>{
    if (id === userId){
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
  const handleSubmit = () => {}
  return (
    <div className='Chatroom'>
          
          <div className="chatContainer">
          {title && <div className='title'>
             This is chatroom {title}
          </div>}
          {chatStream.map((value,index)=>chatBoxGenerator(value,index))}
          </div>
          <form onSubmit={handleSubmit}>        
              <input className='inputBox' type="text" value={newChat} onChange={(e)=>{setnewChat(e.target.value)}} />    
            <input className='submit' type="submit" value="Send" />
          </form>
          
          
    </div>
    );
}