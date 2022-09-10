import axios from 'axios';
import React from 'react'


const LogoutPage = async () => {
    
    await axios.get('http://localhost:5000/logout').then(()=>{
        
    }).catch(error=>{
        console.log(error)
    })
    
  return (
    <div>
      
    </div>
  )
}

export default LogoutPage
