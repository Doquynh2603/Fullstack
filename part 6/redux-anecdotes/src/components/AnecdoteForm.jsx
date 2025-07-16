import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";
import anecdote from "../services/anecdote";
const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    const newAnecdote = await anecdote.createNewAnecdote(content);
    dispatch(createAnecdote(newAnecdote));
    dispatch(showNotification(`you create new anecdote: ${content}`));
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
