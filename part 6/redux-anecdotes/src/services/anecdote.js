import axios from "axios";
const url = "http://localhost:3001/anecdotes";
const getAll = async () => {
  const res = await axios.get(url);
  return res.data;
};

const createNewAnecdote = async (content) => {
  const object = {
    content: content,
    votes: 0,
  };
  const res = await axios.post(url, object);
  return res.data;
};
const voteAnecdote = async (anecdote) => {
  const object = { ...anecdote, votes: anecdote.votes + 1 };
  const res = await axios.put(`${url}/${anecdote.id}`, object);
  return res.data;
};
export default { getAll, createNewAnecdote, voteAnecdote };
