const SavingThrows = () => {

  const stats = [
    { name: 'STR', value: '+1' },
    { name: 'DEX', value: '+3' },
    { name: 'CON', value: '+2' },
    { name: 'INT', value: '-1' },
    { name: 'WIS', value: '+0' },
    { name: 'CHA', value: '+5' },
  ];
  return (
<div className="Throw">
<div className="saving-throws-container">
<div className="saving-throws-grid">

        {stats.map((stat, index) => (
<div key={index} className="stat-item">
<div className="stat-name">{stat.name}</div>
<div className="stat-value">{stat.value}</div>
</div>

        ))}
  </div>
<div className="modifiers-label">Saving Throw Modifiers</div>
<div className="saving-throws-title">SAVING THROWS</div>
</div>
</div>
  );

};

export default SavingThrows;
 