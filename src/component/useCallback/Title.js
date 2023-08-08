import React from 'react'

function Title() {
    console.log('rendeing title')
  return (
    <div><h1>useCallback Hooks</h1></div>
  )
}

export default React.memo(Title)