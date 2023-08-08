import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialstate = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state,action) => {
    switch(action.type) {
        case 'Fetching_success':
            return{
                loading:false,
                error: '',
                post: action.payload
            }
        case 'Feteching_error':
            return{
                loading: false,
                error: 'Something went wrong',
                post: {}
            }
    }
}


function DataFetchingReducer() {
    const [state, dispatch] = useReducer(reducer,initialstate)

    useEffect(() =>{ 
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        dispatch({type:'Fetching_success', payload: res.data})
    })
    .catch(err => {
        dispatch({type:'Fetching_error'})
    })
  },[])  

  return (
    <div>
        {state.loading ? 'loading' : state.post.title}
        {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingReducer