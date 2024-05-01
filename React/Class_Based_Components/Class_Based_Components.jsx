// This is how code was written before functional components were introduced

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {
      return (
        <div>
          <p>{this.state.count}</p>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      );
    }
  }