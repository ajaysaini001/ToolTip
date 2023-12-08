import React from 'react';
import Tooltip from '../Home';

// Left component displaying a tooltip positioned to the left
const Left = () => {
  return (
    <div>
      {/* Tooltip component with a message displayed when hovering */}
      <Tooltip position="left" text="Thanks for hovering! I'm a Tooltip ">
        {/* Button wrapped in a div to trigger the tooltip */}
        <div className='topbtn'><button>Hover over me !!</button></div>
      </Tooltip>
    </div>
  );
};

export default Left;
