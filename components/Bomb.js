const React = require('react');

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {secondsLeft: props.initialCount}
    // this.bombAlert = this.bombAlert.bind(this);
  }

  // const bombAlert = function(){
  //   if (this.state.secondsLeft == 0) {
  //     return 'Boom!'
  //   } else {
  //     `${this.state.secondsLeft} seconds left before I go boom!`
  //   }
  // }

  render() {
    const bombAlert = this.state.secondsLeft == 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    // const bombAlert = function(){ // Returns an empty string regardless of value...
    //   if (this.state.secondsLeft == 0) {
    //     'Boom!';
    //   } else {
    //     `${this.state.secondsLeft} seconds left before I go boom!`;
    //   }
    // }
    return(
      <div>
        <h2>{bombAlert}</h2>
      </div>
    )
  }
}

module.exports = Bomb;

// In the components/Bomb.js file, create a Bomb React component.
// Its initial state should have a property secondsLeft.
// The initial value of secondsLeft is set by passing in a initialCount prop to the Bomb component.
// It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.
// If the secondsLeft is set to 0, it should render 'Boom!' instead.
