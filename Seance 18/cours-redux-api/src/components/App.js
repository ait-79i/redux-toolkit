
import {useSelector,useDispatch} from 'react-redux'
import Posts from './Posts';
import { fetchPosts } from './postsActions'



export default function App(){

  const posts=useSelector(state=>state)
 
  const dispatch=useDispatch();
function charger(){
dispatch(fetchPosts())
}
  return(<>
  <button onClick={()=>charger()}>charger posts</button>
  {posts.loading && <h1>chargement</h1>}
  {(!posts.loading && !posts.error)  && <div><h3>nombre de posts {posts.data.length}</h3>
  <Posts/>
  </div>}
  {(!posts.loading && posts.error)  && <h3>erreur {posts.error}</h3>}

  </>) 
   
}