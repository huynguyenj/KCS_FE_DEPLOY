import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function addDevelopment() {
      const {id} = useParams();
      const [fish,setFish] = useState();

      const getFish =  async ()=>{
            try {
                  
            } catch (error) {
                  
            }
      }
  return (
    <div>

    </div>
  )
}

export default addDevelopment