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
