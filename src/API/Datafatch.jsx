import { useEffect, useState } from "react";

import './Datafatch.css'

function Datafatch({useinfodiv,infodiv}){

  const [posts,setPosts] = useState([])
  useEffect(()=>{
    fetch('https://ghibliapi.herokuapp.com/films').then(val =>{
      return val.json()
    }).then(response => setPosts(response) )   
  },[infodiv])
  
console.log(posts)

  return (
    <div className="gg">
      <ol className="item">
        {posts.map(post => <li onClick={ ()=> useinfodiv
          (
            <div className="info">
              <h2 className="h">Title</h2> 
              <p className="par">{post.title} </p>

              <h2 className="h">Release Date </h2> 
              <p className="par">{post.release_date} </p>

              <h2 className="h">Director </h2> 
              <p className="par">{post.director} </p>

              <h2 className="h">Description </h2> 
              <p className="par">{post.description} </p>
            </div>
      
          )
        } key={post.id} > {post.title} </li>)}
      </ol>
    </div>
  )
    

}


export default Datafatch