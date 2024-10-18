interface WisdomDisplayProps {
  wisdomValue: number;
  smallValue: number;
}
 
const WisdomDisplay: React.FC<WisdomDisplayProps> = ({ wisdomValue, smallValue } ) => {
 
 
  return (
<div className="Score">
  <div className="container">
    <div className="wisdom-box">
      <p>Wisdom</p>
      <div className="value">{wisdomValue}</div>
      <div className="small-box">{smallValue}</div>
    </div>
  </div>
</div>
  );

};

export default WisdomDisplay;
 