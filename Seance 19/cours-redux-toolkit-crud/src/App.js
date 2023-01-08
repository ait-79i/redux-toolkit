import {useDispatch,useSelector} from 'react-redux';

import {useRef } from 'react'
import {addUser} from "./features/Users";
import "./App.css"
import Users from "./Users";


function App(){
    const dispatch=useDispatch();
    const usersList=useSelector(data=>data.users.value)

    const nom=useRef('');
    const prenom=useRef('');
    function ajouter(){
        const id=usersList[usersList.length-1].id;
        dispatch(addUser({id:id,nom:nom.current.value,prenom:prenom.current.value}))
        nom.current.value="";
        prenom.current.value="";

    }
return <div className="App">
    <h3>Ajouter user</h3>
<input type="text" placeholder="nom" ref={nom} />
<input type="text" placeholder="prenom" ref={prenom}/>
<button onClick={()=>{ajouter()}}>ajouter</button>
<Users/>
</div>
}
export default App;