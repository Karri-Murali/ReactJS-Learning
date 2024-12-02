//import { Component } from 'react';
//import { connect } from 'react-redux';

import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {

  const disapatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    disapatch(counterActions.increment());
  }
  const increaseHandler = () => {
    disapatch(counterActions.increase(10));
  }
  const decrementHandler = () => {
    disapatch(counterActions.decrement());
  }
  const toggleCounterHandler = () => {
    disapatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increment By 10</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// class Counter extends Component {

//   incrementHandler = () => {
//     this.props.increment();
//   }
//   decrementHandler = () => {
//     this.props.decrement();
//   }
//   toggleCounterHandler = () => { };


//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <div>
//             <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//             <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           </div>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),

//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
