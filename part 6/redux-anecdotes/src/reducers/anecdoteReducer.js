import { createSlice, current } from "@reduxjs/toolkit";
import anecdote from "../services/anecdote";
const anecdoteReducer = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const update = action.payload;
      const index = state.findIndex((s) => s.id === update.id);
      if (index !== -1) {
        state[index] = update;
        state.sort((a, b) => b.votes - a.votes);
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

export const setVote = (a) => {
  return async (dispatch) => {
    const res = await anecdote.voteAnecdote(a);
    dispatch(voteAnecdote(res));
  };
};
export const { voteAnecdote, createAnecdote, setAnecdote } =
  anecdoteReducer.actions;
export default anecdoteReducer.reducer;
