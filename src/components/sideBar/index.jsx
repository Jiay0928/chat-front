import React from 'react';
import "./index.less";

export default function SideBar({room}) {
  let friends = []
  const valueContainerGenerator = ({name}, index) => 
    <div className="valueContainer" key={index}>
      {name}
    </div>
  
  return (
    <div className='SideBar'>
      <div className="groupContainer">
        <div className="title">
          Groups Name
        </div>
        <div className="valueContainer">
          {room}
        </div>
      </div>
      <div className="friendContainer">
        <div className="title">
          Friends
        </div>
        {
          friends.map((value, index) => 
            valueContainerGenerator(value,index)
          )
        }
      </div>
    </div>
  )
}
