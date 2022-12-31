import React from 'react'
import './FriendsList.css'


function FriendList({friends}) {
   
  return (
    <div >
        <ul className='friendsBlock'>
        
        {friends.map(data => (
       
        <li className="frandItem" key={data.id}> 
        <span className="status">{data.isOnline?(<span className='online'/>) : (<span className='ofline'/>)}</span>
        <img className="frandAvatar" src={data.avatar} alt="User avatar" width="25" />
        <p className="friendName">{data.name}</p>
        </li>
       
        )  ) }

        </ul>
    </div>
  )
}

export default FriendList