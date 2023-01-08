import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { deleteUser,updateNom } from './features/Users'; 
import {useState, useRef } from 'react';
export default function Users(){
const userList=useSelector((state)=>state.users.value)
const dispatch=useDispatch();
const [nom,setNom]=useState('')

return(<>
<div className='displayUsers'>
   {userList.map((user,index)=>{
    return <div key={index}>
      <h1>{user.nom} {user.prenom}</h1>
      <input onChange={(event)=> setNom(event.target.value)} />
      <button onClick={()=>dispatch(updateNom({id:user.id,nom:nom}))} >modifier nom</button>
      <button onClick={()=>dispatch(deleteUser({id:user.id}))}>supprimer </button>
      </div>
   })}
</div>
</>)

}
