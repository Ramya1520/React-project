import React from 'react';
class Clock extends React.Component {
 
  constructor(props) {
    console.log("constructor")
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log("componentdidmount")
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("componenetwillunmount")

  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log("render")
    return (
      <div>
        <h5>this is my web page</h5>
        <h5>It is {this.state.date.toLocaleTimeString()}.</h5>
        <button onClick={this.componentWillUnmount.bind(this)}>stop</button>
      </div>
    );
  }
}

  export default Clock;

