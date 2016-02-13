import * as React from 'react';

interface States {
    secondsElapsed : number;
}

interface Properties {
    initialCount : number;
}

export default class Counter extends React.Component<any, States> {

  private rerender : number;
  constructor(props : Properties) {
    super(props);
    
    this.state = {
      secondsElapsed: 0
    };
    this.rerender = 0;
  }
  
  componentWillMount(){
    this.state.secondsElapsed = this.props.initialCount || this.state.secondsElapsed;
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({secondsElapsed: ++this.state.secondsElapsed});
    }, 1000);
  }
  
  
  render() {
    this.rerender++;
    return (
      <div>
        <p id="seconds">
          Seconds since the component loaded: {this.state.secondsElapsed}
        </p>
        <p id="rerender">
          Component has been rerender : {this.rerender} times
        </p>
      </div>
    );
  }
}
