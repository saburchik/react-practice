import React, { useState } from "react";
import PostList from "./components/PostList";
import './style/App.css'


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Скейтборды',
      body: 'Description'
    },
    {
      id: 2,
      title: 'Самокаты',
      body: 'Description'
    },
    {
      id: 3,
      title: 'Акссесуары',
      body: 'Description'
    }
  ])

  return (
    <div className="App">
      <PostList posts={posts} headTitle="Категории" />
    </div>
  );
}

export default App;
