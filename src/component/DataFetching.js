import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [post,setPost] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            alert('Faces' + err)
        })
    })
  return (
    <div>
          <ul>
            {
                post.map(posts => {<li key = {posts.key}>{posts.title}</li>})
            }
          </ul>
    </div>
  )
}

export default DataFetching