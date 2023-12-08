import React from 'react'
import Tooltip from '../Home'

// Right component displaying a tooltip positioned to the Right

const Right = () => {
  return (
    <div>
            {/* Tooltip component with a message displayed when hovering */}
       <Tooltip position="right" text="Thanks for hovering! I'm a Tooltip ">
                {/* Button wrapped in a div to trigger the tooltip */}
          <div className='topbtn'><button>Hover over me !!</button></div>
      </Tooltip>
  </div>
  )
}

export default Right