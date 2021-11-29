import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { Link, Route } from 'react-router-dom';
import Welcome from './Welcome';
import { useState } from 'react'
import { WelcomeContext } from './WelcomeContext';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  //ცვლილების გაკეთება
  const [color, setColor] = useState('black')

  return (
    <>
      {/* <Link to="/">Main</Link>
      <br/>
      <Link to="/welcome">Welcome</Link>

      <Route exact path="/">
        <div className="App">
        first state value is {counter}
        <br/>
        <button onClick={() => dispatch({
          type: 'INCREMENT',
          payload: 10
        }) }>+</button>
        <button onClick={() => dispatch({
          type: 'DECREMENT',
          payload: 10
        }) }>-</button>
        </div>
      </Route>
      
      <Route exact path="/welcome" component={Welcome}></Route>  */}
      <WelcomeContext.Provider value={{color, setColor}}>
        <Link to="/">Main</Link>
        <br/>
        <Link to="/welcome">Welcome</Link>
        <br/>
        <Route exact path="/">
          color main page {color}
        </Route>
        <Route exact path="/welcome" component={Welcome}/>
      </WelcomeContext.Provider>
   </>
  );
}

export default App;
