import { useDispatch, useSelector } from "react-redux";
import { initialAnecdote, setVote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";
import { useEffect } from "react";
const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, filter }) =>
    anecdotes.filter((a) =>
      a.content.toLowerCase().includes(filter.toLowerCase())
    )
  );
  useEffect(() => {
    dispatch(initialAnecdote());
  }, [dispatch]);
  const addVote = (anecdote) => {
    dispatch(setVote(anecdote));
    dispatch(showNotification(`you vote '${anecdote.content}'`, 10));
  };
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => {
                addVote(anecdote);
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AnecdoteList;
