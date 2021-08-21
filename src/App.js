import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './style/App.css'
import MySelect from "./components/UI/select/MySelect";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Скейтборды', body: 'Something text' },
    { id: 2, title: 'Самокаты', body: 'About Samokat' },
    { id: 3, title: 'Акссесуары', body: 'Some accessories' }
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '1rem 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка:"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]}
        />
      </div>
      {/* Условная отрисовка, запись: !==0 - можно не указывать */}
      {
        posts.length
          ? <PostList remove={removePost} posts={posts} headTitle="Категории" />
          : <h1 style={{ textAlign: 'center' }}>Посты не были найдены..</h1>
      }
    </div >
  );
}

export default App;
