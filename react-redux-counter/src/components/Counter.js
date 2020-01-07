import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 1
    };
  }

  INCREMENT = () => {
    this.props.dispatch({ type: 'inc', payload: this.state.val });
  };

  DECEREMENT = () => {
    this.props.dispatch({ type: 'dec', payload: this.state.val });
  };

  RESET = () => {
    this.props.dispatch({ type: 'reset' });
  };

  BTN5 = () => {
    this.setState({ val: 5 });
  };

  BTN8 = () => {
    this.setState({ val: 8 });
  };

  BTN10 = () => {
    this.setState({ val: 10 });
  };

  BTN12 = () => {
    this.setState({ val: 12 });
  };
  BTN14 = () => {
    this.setState({ val: 14 });
  };
  BTN16 = () => {
    this.setState({ val: 16 });
  };

  render() {
    console.log(this.props.count);
    return (
      <div className="wrapper">
        <h1 className="counter">{`count by ${this.state.val}`}</h1>
        <div className="counterValue-div">
          <h2 className="counterValue">{this.props.count}</h2>
        </div>
        <div className="btn-wrapper1">
          <button className="inc btn" onClick={this.INCREMENT}>
            Increment
          </button>
          <button className="dec btn" onClick={this.DECEREMENT}>
            Decrement
          </button>
          <button className="reset btn" onClick={this.RESET}>
            Reset
          </button>
        </div>
        <div className="btn-wrapper2">
          <button onClick={this.BTN5} className="btn5 btn1">
            5
          </button>
          <button onClick={this.BTN8} className="btn8 btn1">
            8
          </button>
          <button onClick={this.BTN10} className="btn10 btn1">
            10
          </button>
          <button onClick={this.BTN12} className="btn12 btn1">
            12
          </button>
          <button onClick={this.BTN14} className="btn14 btn1">
            14
          </button>
          <button onClick={this.BTN16} className="btn16 btn1">
            16
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, 'state');
  return {
    count: state
  };
}

export default connect(mapStateToProps)(Counter);
