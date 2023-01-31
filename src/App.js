import React, { useState } from 'react';
import './App.css';
import AddingForm from './compotents/AddingForm';
import PostList from './compotents/PostList';

function App() {
  const [posts, setPosts] = useState([{ id: '2023-01-30', date: '2023-01-30', traveled: 10.0 }]);

  const createPost = (post) => {
    setPosts((prevBooks) => {
      let index = -1;
      for (const element of prevBooks) {
        if (post.id === element.id) {
          index = prevBooks.indexOf(element);
        }
      }
      if (index >= 0) {
        prevBooks[index].traveled = Number(prevBooks[index].traveled) + Number(post.traveled);
        prevBooks = [...prevBooks];
      } else {
        prevBooks = [...prevBooks, post];
      }
      return prevBooks;
    });
  }

  const removePost = (post) => {
    setPosts((prevBooks) => { return prevBooks.filter(item => item.id !== post.id) });
  }

  return (
    <div className="App">
      <AddingForm create={createPost} />
      <PostList posts={posts} remove={removePost} />
    </div>
  );
}

export default App;
