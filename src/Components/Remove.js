import React from 'react'

function Remove({d,stat}) {
    d.preventDefault()
    var newtab=(stat.filter( filt=>filt.id!== d )) 

  return (
    <div>

{
   alert('Delete avec success')}
    </div>
  )
}

export default Remove