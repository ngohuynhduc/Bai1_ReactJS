import React, { Fragment } from 'react'

export const JavaClass=({members,setMembers,updateClass})=> {
  return (
    <div>
        <h1>List member of Java Class</h1>
        {
            members.map(member=>{
                if(member.class==='Java')
                return <Fragment><p key={member.id}>Name: {member.name} - Age: {member.age}  <button key={member.id} onClick={()=>{updateClass(member.id,'React')}}>Transfer</button></p></Fragment>
            })
        }
    </div>
  )
}
