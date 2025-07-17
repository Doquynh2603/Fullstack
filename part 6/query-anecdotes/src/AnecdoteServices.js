import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

export const getAnecdotes = async () => {
  const response = await axios.get(baseUrl);
  console.log("fetch now: ", response.data);

  return response.data;
};

export const createNewAnecdote = async (content) => {
  const object = {
    content: content,
    votes: 0,
  };
  const res = (await axios.post(baseUrl, object)).data;
  console.log("new anecdote: ", res);

  return res;
};

export const voteAnecdote = async (anecdote) => {
  const object = { ...anecdote, votes: anecdote.votes + 1 };
  const res = (await axios.put(`${baseUrl}/${anecdote.id}`, object)).data;
  console.log("anecdote is voted: ", res);

  return res;
};
