import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
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

  const [title, setTitle] = useState('')
  const bodyInputRef = useRef('')
  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value);
  }

  return (
    <div className="App">
      <form>
        {/* Managed component */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type='text'
          placeholder='Name post'
        />
        {/* Unmanageable/Uncontrolled component */}
        <MyInput
          ref={bodyInputRef}
          type='text'
          placeholder='Description post'
        />
        <MyButton onClick={addNewPost}>Create a post</MyButton>
      </form>
      <PostList posts={posts} headTitle="Категории" />
    </div>
  );
}

export default App;
