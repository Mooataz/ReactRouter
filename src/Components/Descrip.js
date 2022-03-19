import React from 'react'
import {Link,useLocation} from 'react-router-dom'
function Descrip({el}) {
  //props:any
  //const {userName}=props.props
  //{userName}

  const location=useLocation()
const [locationstate,setLocationstate]=React.useState(el)
  React.useEffect(()=>{

  },[])
  return (
    <div>
description

    </div>
  )
}

export default Descrip