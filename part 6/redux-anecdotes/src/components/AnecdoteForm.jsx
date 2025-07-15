import { useDispatch } from "react-redux";
import { create } from "../reducers/anecdoteReducer";
const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(create(content));
  };
  return (
    <div>
      <h2>new create</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};
export default AnecdoteForm;
