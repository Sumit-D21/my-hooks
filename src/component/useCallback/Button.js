import React from 'react'

function Button({handleclick, childern}) {
    console.log('rendering-', {childern})
  return (
    <div>
        <button onClick={handleclick}>
            {childern}
        </button>
    </div>
  )
}

export default React.memo(Button)