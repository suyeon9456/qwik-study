import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useDadJoke = routeLoader$(async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  return (await response.json()) as {
    id: string;
    status: number;
    joke: string;
  };
});

export default component$(() => {
  const dadJokeSignal = useDadJoke();
  return (
    <section class="section bright">
      A Joke!!
      {dadJokeSignal.value.joke}
    </section>
  );
});
