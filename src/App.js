import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser, logout } from "./actions/userActions";
import { increment, decrement } from "./actions/counterActions";

function App() {
  const counter = useSelector((state) => state.counter);
  const loginUser = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();
  const user = { name: "Rei" };

  useEffect(() => {
    dispatch(loadUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {loginUser.loggedIn ? (
        <>
          <h1>Hello, {loginUser.user.name}</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button onClick={() => dispatch(loadUser(user))}>Login as Rei</button>
        </>
      )}
      <h2>Counter:{counter}</h2>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default App;
