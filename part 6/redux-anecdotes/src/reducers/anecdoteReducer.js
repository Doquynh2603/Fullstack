import { createSlice, current } from "@reduxjs/toolkit";
import anecdote from "../services/anecdote";
const anecdoteReducer = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload;
      const changeAnecdote = state.find((s) => s.id === id);
      if (changeAnecdote) {
        changeAnecdote.votes += 1;
        [...state].sort((a, b) => b.votes - a.votes);
      }
    },
    createAnecdote(state, action) {
      console.log("anecdote trước khi tạo: ", current(state));

      state.push(action.payload);
      console.log("anecdote sau khi tạo: ", current(state));
    },
    setAnecdote(state, action) {
      return action.payload;
    },
  },
});
export const initialAnecdote = () => {
  return async (dispatch) => {
    const anecdotes = await anecdote.getAll();
    dispatch(setAnecdote(anecdotes));
  };
};

export const newAnecdote = (content) => {
  return async (dispatch) => {
    const res = await anecdote.createNewAnecdote(content);
    dispatch(createAnecdote(res));
  };
};
export const { voteAnecdote, createAnecdote, setAnecdote } =
  anecdoteReducer.actions;
export default anecdoteReducer.reducer;
