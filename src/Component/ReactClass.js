import React, { useEffect } from 'react'
import { Fragment } from 'react'
export const ReactClass=({members,setMembers,updateClass})=> {

  return (
    <div>
    <h1>List member of React Class</h1>
    {
        members.map(member=>{
            if(member.class==='React'){
            return <Fragment><p key={member.id}>Name: {member.name} - Age: {member.age}  <button key={member.id}onClick={()=>{updateClass(member.id,'Java')}}>Transfer</button></p></Fragment>
            }
        })
    }
</div>
  )
}
