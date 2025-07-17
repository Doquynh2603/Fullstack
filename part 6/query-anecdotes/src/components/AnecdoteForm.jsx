import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewAnecdote } from "../AnecdoteServices";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();

  const newAnecdotes = useMutation({
    mutationFn: createNewAnecdote,
    onSuccess: (newAnecdote) => {
      queryClient.setQueryData(["anecdotes"], (old) => old.concat(newAnecdote));
    },
  });
  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    if (content.length >= 5) {
      newAnecdotes.mutate(content);
    }
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
