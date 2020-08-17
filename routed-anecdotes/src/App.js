import React, { useState } from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory
} from "react-router-dom";

import { useField } from "./hooks/index.js";

const Menu = ({ anecdotes, addNew, setNotification }) => {
  const padding = {
    paddingRight: 5
  };

  const match = useRouteMatch("/anecdotes/:id");
  const anecdote = match
    ? anecdotes.find(a => Number(a.id) === Number(match.params.id))
    : null;

  return (
    <div>
      <Link style={padding} to="/">
        anecdotes
      </Link>
      <Link style={padding} to="/create">
        create new
      </Link>
      <Link style={padding} to="/about">
        about
      </Link>

      <Switch>
        <Route path="/anecdotes/:id">
          <Anecdote anecdote={anecdote} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/create">
          <CreateNew addNew={addNew} setNotification={setNotification} />
        </Route>
        <Route path="/">
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
      </Switch>
    </div>
  );
};

const AnecdoteList = ({ anecdotes }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => (
          <li key={anecdote.id}>
            <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <h4>
        {anecdote.content} by {anecdote.author}
      </h4>
      <p> has {anecdote.votes} votes</p>
    </div>
  );
};

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>
      An anecdote is a brief, revealing account of an individual person or an
      incident. Occasionally humorous, anecdotes differ from jokes because their
      primary purpose is not simply to provoke laughter but to reveal a truth
      more general than the brief tale itself, such as to characterize a person
      by delineating a specific quirk or trait, to communicate an abstract idea
      about a person, place, or thing through the concrete details of a short
      narrative. An anecdote is "a story with a point."
    </em>

    <p>
      Software engineering is full of excellent anecdotes, at this app you can
      find the best and add more.
    </p>
  </div>
);

const Footer = () => (
  <div>
    Anecdote app for{" "}
    <a href="https://courses.helsinki.fi/fi/tkt21009">
      Full Stack -websovelluskehitys
    </a>
    . See{" "}
    <a href="https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js">
      https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js
    </a>{" "}
    for the source code.
  </div>
);

const CreateNew = props => {
  const history = useHistory();

  const content = useField("content");
  const author = useField("author");
  const info = useField("info");

  const handleSubmit = e => {
    e.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    });
    props.setNotification(`a new anecdote: ${content.value} was created! `);
    setTimeout(() => {
      props.setNotification("");
      history.push("/");
    }, 3000);
  };
  const handleReset = e => {
    e.preventDefault();
    content.reset();
    author.reset();
    info.reset();
  };

  const removePropFromObj = (obj, property) => {
    const { [property]: _, ...rest } = obj;
    return rest;
  };

  const content2 = removePropFromObj(content, "reset");
  const author2 = removePropFromObj(author, "reset");
  const info2 = removePropFromObj(info, "reset");

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content2} />
        </div>
        <div>
          author
          <input {...author2} />
        </div>
        <div>
          url for more info
          <input {...info2} />
        </div>
        <button type="submit">create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  );
};

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: "1"
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: "2"
    }
  ]);

  const [notification, setNotification] = useState("");

  const addNew = anecdote => {
    anecdote.id = (Math.random() * 10000).toFixed(0);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const anecdoteById = id => anecdotes.find(a => a.id === id);

  const vote = id => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    };

    setAnecdotes(anecdotes.map(a => (a.id === id ? voted : a)));
  };

  return (
    <div>
      {notification && <p>{notification}</p>}
      <h1>Software anecdotes</h1>
      <Menu
        anecdotes={anecdotes}
        addNew={addNew}
        setNotification={setNotification}
      />
      <br />
      <Footer />
    </div>
  );
};

export default App;
