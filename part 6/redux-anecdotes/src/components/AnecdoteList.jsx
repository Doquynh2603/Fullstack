import { useDispatch, useSelector } from "react-redux";
import { setAnecdote, voteAnecdote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";
import { useEffect } from "react";
import anecdote from "../services/anecdote";
const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, filter }) =>
    anecdotes.filter((a) =>
      a.content.toLowerCase().includes(filter.toLowerCase())
    )
  );
  useEffect(() => {
    anecdote.getAll().then((res) => dispatch(setAnecdote(res)));
  }, [dispatch]);
  const addVote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id));
    dispatch(showNotification(`you vote '${anecdote.content}'`));
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
