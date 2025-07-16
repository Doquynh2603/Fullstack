import axios from "axios";
const url = "http://localhost:3001/anecdotes";
const getAll = async () => {
  const res = await axios.get(url);
  return res.data;
};

const createNewAnecdote = async (content) => {
  const res = await axios.post(url, { content });
  return res.data;
};
export default { getAll, createNewAnecdote };
