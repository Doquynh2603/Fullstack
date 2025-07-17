import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { getAnecdotes, voteAnecdote } from "./AnecdoteServices";

const App = () => {
  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
    retry: false,
    refetchOnWindowFocus: false,
  });
  const queryClient = useQueryClient();
  const setVote = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: (update) => {
      queryClient.setQueryData(["anecdotes"], (old) =>
        old.map((anecdote) => (anecdote.id === update.id ? update : anecdote))
      );
    },
  });
  const handleVote = (anecdote) => setVote.mutate(anecdote);
  if (result.isLoading) {
    return <div>Data is loading ....</div>;
  }
  if (result.isError) {
    return <div>anecdote service not available due to problems in server</div>;
  }
  const anecdotes = result.data;

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
