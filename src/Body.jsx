import React, { useState } from 'react'

function Body() {
    let[company,change]=useState("india")
    function beta(){
        change("nikhil");
    }
  return (
    <div>
      <h1>kya bolti {company}</h1>
      <button onClick={beta}>click</button>
    </div>
  )
}

export default Body
