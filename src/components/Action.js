import React from 'react';

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      co2Reduction: '',
      count: 1
    };
  }

  handleAddAction = () => {
    const { name, co2Reduction, count } = this.state;
    if (name && co2Reduction) {
      this.props.onAdd({
        id: Date.now(),
        name,
        co2Reduction: parseFloat(co2Reduction),
        count: parseInt(count, 10),
      });
      this.setState({ name: '', co2Reduction: '', count: 1 });
    }
  };

  render() {
    const { name, co2Reduction, count } = this.state;

    return (
      <div>
        <h2>Actions</h2>
        {this.props.ecoActions.map(action => (
          <div key={action.id}>
            <span>{action.name} - {action.co2Reduction} kg CO₂</span>
            <button onClick={() => this.props.onAdd(action)}>Add</button>
          </div>
        ))}

        <h3>Track New Action</h3>
        <input
          type="text"
          placeholder="Action Name"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input
          type="number"
          placeholder="CO₂ Reduction"
          value={co2Reduction}
          onChange={(e) => this.setState({ co2Reduction: e.target.value })}
        />
        <input
          type="number"
          placeholder="Action Count"
          value={count}
          onChange={(e) => this.setState({ count: e.target.value })}
        />
        <button onClick={this.handleAddAction}>Add Action</button>
      </div>
    );
  }
}

export default Action;
