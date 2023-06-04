import React from 'react'



const Names = () => {
    const names = ["itay", "matan", "assaf", "tal", "tomer", "nikita", "vladi", "itai"];
    const random = Math.floor(Math.random() * names.length);
  return (
    <div>
<h1>{names[random]}</h1>
    </div>
  )
}

export default Names
