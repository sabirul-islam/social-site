import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UserPost from '../UserPost/UserPost';


const Home = () => {
    const [userPost, setUserPost] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setUserPost(data))
    },[])

    return (
        <div>
        <div>
            {
                userPost.map( user => <UserPost 
                    user={user}
                    ></UserPost>)
            }
            
        </div>
        
        </div>
    );
};

export default Home;