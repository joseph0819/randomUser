
import { useReducer, } from "react";
import { Link } from "react-router-dom";
const count= 0;
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
      case "reset":
        return {count:0};
        default :
        return state
  }

}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count });

  return (
    <>
      <div>
        <div className="container">
        <Link className="link" to="/">Home</Link>
          <h2 className="header"> My Counter App </h2>
          <div className="counter">
            Current Count : <span>{state.count}</span> 
          </div>
          <div className="btn-wrapper">
            <button className="btn" onClick={() => dispatch({type : "increment"})}>
              +
            </button>
            <button className="btn" onClick={() => dispatch({type : "decrement"})}>
              -
            </button>
          </div>
          <button className="reset" onClick={() => dispatch({type : "reset"})}>
            Reset
          </button>
          {/* <form onSubmit={handleSubmit}>
        <input className="input" type="number" placeholder="enter a value"/>
//         <button>set value</button>
      </form> */}
        </div>
      </div>
    </>
  );
}

export default Counter;
