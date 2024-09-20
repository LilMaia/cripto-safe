import { useSelector, useDispatch } from 'react-redux';

function InitialPage() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="InitialPage">
      <b>This text is bold</b>
      <br />
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default InitialPage;