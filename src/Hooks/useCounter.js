import { useReducer } from "react";




const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = (e) => {
    e.preventDefault();
    dispatch({ type: "increment" });
  };
  //increases counter by 1.

  const handleDecrement = (e) => {
    e.preventDefault();
    dispatch({ type: "decrement" });
  };
  //decreases counter by 1.

  const handleReset = () => {
    dispatch({ type: "reset" });
    //sets counter to 0.
  };


  const counter = state.count
function reducer({ state , action }) {
  switch (action.type) {
    case "increment":
      return { count: counter + 1 };
    case "decrement":
      return { count: counter - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}


  return [counter, handleIncrement, handleDecrement, handleReset];
};

export default useCounter;
