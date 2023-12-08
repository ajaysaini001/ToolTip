import React from 'react'
import Tooltip from '../Home'


// Bottom component displaying a tooltip positioned to the Bottom

const Bottom = () => {
  return (
    <div>
            {/* Tooltip component with a message displayed when hovering */}
       <Tooltip position="bottom" text="Thanks for hovering! I'm a Tooltip ">
                {/* Button wrapped in a div to trigger the tooltip */}
          <div className='topbtn'><button>Hover over me !!</button></div>
      </Tooltip>
  </div>
    
  )
}

export default Bottom