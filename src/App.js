import React, { Component } from "react";
import Action from "./components/Action";
import Impact from "./components/Impact";
import './App.css';




const ecoActions = [
  { id: 1, name: "Use a reusable water bottle", co2Reduction: 0.5 },
  { id: 2, name: "Take public transport", co2Reduction: 2.6 },
  { id: 3, name: "Eat a plant-based meal", co2Reduction: 0.8 },
  { id: 4, name: "Use energy-efficient light bulbs", co2Reduction: 0.1 },
  { id: 5, name: "Recycle paper", co2Reduction: 0.2 },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [],
    };
  }

  addAction = (action) => {
    const actions = [...this.state.actions];
    const existing = actions.find((a) => a.id === action.id);

    if (existing) {
      existing.count += 1;
    } else {
      actions.push({ ...action, count: 1 });
    }

    this.setState({ actions });
  };

  clearActions = () => {
    this.setState({ actions: [] });
  };

  removeAction = (id) => {
    const actions = this.state.actions.filter((action) => action.id !== id);
    this.setState({ actions });
  };

  render() {
    const totalCO2 = this.state.actions.reduce(
      (total, action) => total + action.co2Reduction * action.count,
      0
    );

    return (
      <div className="App">
        <h1>Eco-Friendly Tracker</h1>
        <Action ecoActions={ecoActions} onAdd={this.addAction} />
        <Impact
          actions={this.state.actions}
          totalCO2={totalCO2}
          onClear={this.clearActions}
          onRemove={this.removeAction}
        />
      </div>
    );
  }
}

export default App;
