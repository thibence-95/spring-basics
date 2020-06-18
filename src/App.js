import {useSpring, animated} from 'react-spring';
import React from 'react';
import logo from './logo.svg';

import './App.css';

function App() {
  const fadeIn = useSpring({opacity: 2, from: {opacity: 0}})

  React.createClass = function (param) {
    return undefined;
  }
  let donut = React.createClass({})
  const AnimatedDonut = animated(donut);
  
  return (
    <animated.div style={fadeIn}>
      I will fade in
    </animated.div>

  );
}

export default App;
