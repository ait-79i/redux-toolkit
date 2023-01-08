
import {useSelector} from 'react-redux'


export default function Posts(){

const posts=useSelector(state=>state.data)
    return(<ul>
        {posts.map((post,index)=><li key={index}>{post.id}:{post.title}</li>)}
    </ul>)
}