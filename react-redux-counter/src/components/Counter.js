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

  handleBtn = step => {
    this.setState({ val: step });
  };

  render() {
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
          {[5, 8, 10, 12, 14, 16].map(e => (
            <button
              onClick={() => this.handleBtn(e)}
              className={`btn1 ${this.state.val == e ? 'active' : ''}`}
            >
              {e}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state
  };
}

export default connect(mapStateToProps)(Counter);
