import React from 'react'

function add() {
  return (
    <div>
        <h1>
            Add To do
        </h1>
        <form>
            <input placeholder='Enter to do'/>
            <button type="submit"> Add</button>
        </form>
    </div>
  )
}

export default add