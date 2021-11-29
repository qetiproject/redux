import { useContext, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { WelcomeContext } from "./WelcomeContext"

const Welcome = () => {
    // const counter = useSelector(state => state.counter)
    // const dispatch = useDispatch()

    // return(
    //     <>welcome {counter}
    //         <button onClick={() => dispatch({
    //         type: 'INCREMENT',
    //         payload: 10
    //         }) }>+</button>
    //         <button onClick={() => dispatch({
    //         type: 'DECREMENT',
    //         payload: 10
    //         }) }>-</button>
    //     </>
    // )

    const {color, setColor} = useContext(WelcomeContext)

    return(
        <div>
            <button onClick={() => setColor('red')}>update</button>
            welcome page {color}
        </div>
    )
}

export default Welcome