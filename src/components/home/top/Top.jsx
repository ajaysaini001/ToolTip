// Top.js
import React from 'react';
import Tooltip from '../Home';

// Top component displaying a tooltip positioned to the Top
const Top = () => {
  return (
    <div>
            {/* Tooltip component with a message displayed when hovering */}
       <Tooltip position="top" text="Thanks for hovering! I'm a Tooltip ">
                {/* Button wrapped in a div to trigger the tooltip */}
          <div className='topbtn'><button>Hover over me !!</button></div>
      </Tooltip>
  </div>
  );
};

export default Top;
