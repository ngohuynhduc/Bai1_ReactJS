import React,{useState} from 'react'
import { JavaClass } from './JavaClass';
import {ReactClass} from './ReactClass';

export const Member = () => {
    const [members, setMembers] = useState([
        {
            id:1,
            name:'Ngô Huỳnh Đức',
            age: 18,
            class:'React'
        },
        {
            id:2,
            name:'Bế Trọng Hiếu',
            age: 99,
            class:'React'
        },
        {
            id:3,
            name:'Đinh Tuấn Anh',
            age: 21,
            class:'Java'
        },
        {
            id:4,
            name:'Ngụy Minh Thắng',
            age: 30,
            class:'Java'
        },
        {
            id:5,
            name:'Nguyễn Anh Thư',
            age: 20,
            class:'React'
        },
        {
            id:6,
            name:'Nguyễn Mạnh Dũng',
            age: 19,
            class:'Java'
        }
    ])
    const updateClass=(id,newClass)=>{
        let allMember=members;
        allMember=allMember.map(member=>{
            if(member.id===id){
                member.class=newClass;
            }
        return member;
        })
        setMembers(allMember);
    }

  return (
    <div>
        <JavaClass members={members} setMembers={setMembers} updateClass={updateClass}/>
        <ReactClass members={members} setMembers={setMembers} updateClass={updateClass}/>
    </div>
  )
}
