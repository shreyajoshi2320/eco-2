import React from 'react';
import './Impact.css';

class Impact extends React.Component {
  render() {
    const { actions, onClear, onRemove, onAddAction } = this.props;

    const totalCO2 = actions.reduce(
      (total, action) => total + action.co2Reduction * action.count,
      0
    );

    const treesPlanted = Math.floor(totalCO2 / 10);
  
    const impactColor = totalCO2 < 0.5 ? 'red' : totalCO2 < 1 ? 'orange' : 'green';

    return (
      <div className="impact">
        <h2>Impact Summary</h2>
        <p>Total CO₂ Reduction: {totalCO2.toFixed(2)} kg</p>
        <p style={{ color: impactColor }}>
          {totalCO2 >= 10
            ? `You've saved the equivalent of ${treesPlanted} tree(s) planted!`
            : "Keep going, every action counts!"}
        </p>

        {actions.length > 0 ? (
          <>
            <ul>
              {actions.map(action => (
                <li key={action.id}>
                  {action.name} - {action.co2Reduction * action.count} kg CO₂ (x{action.count})
                  <button onClick={() => onRemove(action.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <button onClick={onClear}>Clear All</button>
          </>
        ) : (
          <p>No actions tracked yet. Add some to get started!</p>
        )}
        
        <button onClick={onAddAction}>Clear All For Today</button>
      </div>
    );
  }
}

export default Impact;
