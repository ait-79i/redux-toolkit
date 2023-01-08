import  * as type from './postsType'
import axios from 'axios'

//type d'actions
export const FETCH_POSTS_REQUEST='FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS='FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE='FETCH_POSTS_FAILURE';

//actions createurs
export const fetchPostsRequest=()=>{
return{
    type:type.FETCH_POSTS_REQUEST,
    
      }
}

export const fetchPostsSuccess=(posts)=>{
 return {
    type:type.FETCH_POSTS_SUCCESS,
    payload:{posts:posts}
 }   
}

export const fetchPostsFailure=(err)=>{
    return{
        type:type.FETCH_POSTS_FAILURE,
        payload:{error:err}
    }
}

export const  fetchPosts=function(){
    return function(dispatch,getState){
           
           dispatch(fetchPostsRequest())
         
        axios.get('https://jsonplaceholder.typicode.com/posts').
        then(response=> dispatch(fetchPostsSuccess(response.data))).
        catch(err=>dispatch(fetchPostsFailure(err.message)))
        
    }
}

