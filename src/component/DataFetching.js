import React, { useEffect, useState } from 'react'
const axios = require('axios')

function DataFetching() {
    const [post,setPost] = useState({})
    const [id,postId] = useState(1)
    const [buttonId, setOnclick] = useState(1)

    const clickHandeler = () => {
        setOnclick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
        .then(arg => {
            console.log(arg)
            setPost(arg.data)
        })
        .catch(err => {
           console.log(err)
        })
    },[buttonId])
  return (
    <div>
        <input type = "text" value={id} onChange={e => (postId(e.target.value))}></input>
        <button type = "button" onClick={clickHandeler}>Fetch data</button>
        <div>{post.title}</div>
          {/* <ul>
            {
                post.map(posts => <li key = {posts.key}>{posts.title}</li>)
            }
          </ul> */}
    </div>
  )
}

export default DataFetching