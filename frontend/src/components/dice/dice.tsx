import { useState } from "react";


const ExpandableMenu = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle menu expansion

  const toggleMenu = () => {

    setIsExpanded(!isExpanded);

  };

  return (
<div className="menu-container">

      {/* Main button (changes between dice and X) */}
<div className="main-button" onClick={toggleMenu}>

        {isExpanded ? '❌' : '🎲'} {/* X when expanded, Dice when collapsed */}
</div>

      {/* Expanded buttons */}

      {isExpanded && (
<div className="expanded-buttons">
<div className="button">⚙️</div> {/* Gear icon */}
<div className="button">🔧</div> {/* Wrench icon */}
<div className="button">📊</div> {/* Chart icon */}
<div className="button">📦</div> {/* Box icon */}
</div>

      )}
</div>

  );

};

export default ExpandableMenu;
 