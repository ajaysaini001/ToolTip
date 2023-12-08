import React, { useState } from 'react';
import './style.css'; 
import { useNavigate } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { Tooltip as Tippy } from 'react-tippy'; // Import Tooltip from react-tippy

const Tooltip = ({ children, position, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  // Function to show tooltip
  const showTooltip = () => {
    setIsVisible(true);
  };

  // Function to hide tooltip
  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* Button navigation */}
      <div className="home">
        <div className="btn">
          <button className="hover" onClick={() => navigate("/top")}>Top</button>
          <button className="hover" onClick={() => navigate("/bottom")}>Bottom</button>
          <button className="hover" onClick={() => navigate("/left")}>Left</button>
          <button className="hover" onClick={() => navigate("/right")}>Right</button>
        </div>
      </div>

      {/* Tooltip */}
      <div className="content">
        <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
          {children}
          {isVisible && (
            <div className={`tooltip tooltip-${position}`}>
              <span className="tooltiptext">{text}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tooltip;
