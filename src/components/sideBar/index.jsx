import React from 'react';
import "./index.less";

export default function SideBar() {
  let friends=[
    {id: 1,
      name: "Alice",
    },
    {id: 2,
      name: "Alice",
    },
    {id: 3,
      name: "Alice",
    }

  ]
  let groups=[
    {id: 1,
      name: "Alice",
    },
    {id: 2,
      name: "Alice",
    },
    {id: 3,
      name: "Alice",
    }

  ]
  const valueContainerGenerator = ({name}, index) => 
    <div className="valueContainer" key={index}>
      {name}
    </div>
  
  return (
    <div className='SideBar'>
      <div className="groupContainer">
        <div className="title">
          Groups
        </div>
        {
          groups.map((value, index) => 
            valueContainerGenerator(value,index)
          )
        }
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
