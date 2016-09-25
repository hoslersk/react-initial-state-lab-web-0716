// import React from 'react';

const React = require('react');

class ImageSlider extends React.Component {
// const ImageSlider = (props) => {
  constructor(props) {
    super(props) // calling on props of parent
    this.state = {currentSlideIndex: 0};
  }
  render() {
    return(
      <div>
        <h2>I am on slide {this.state.currentSlideIndex}</h2>
      </div>
    )
  }
}

// export default ImageSlider;
module.exports = ImageSlider;

// In the components/ImageSlider.js file, create an ImageSlider React component.
// Its initial state should have a property currentSlideIndex that starts at 0.
// It should render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of currentSlideIndex
