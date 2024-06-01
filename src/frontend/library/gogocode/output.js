function testLog(a,b,cs){console.log(a, b, c);}

function alert(a) {
  alert(a);
}


// 以下每一种都能被匹配到
const a1 = 123;
const a2 = "b";
const a3 = () => 1;

const dict = {
  a: 1,
  b: 2,
  c: 'f',
};

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}