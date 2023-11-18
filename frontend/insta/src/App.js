 
import React, { useState } from 'react';
import './App.css'
const initialPosts = [
  { id: 1, imageUrl: 'path_to_image_1.jpg', likes: 20, comments: [] },
  { id: 2, imageUrl: 'path_to_image_2.jpg', likes: 15, comments: [] },
  // Add more posts as needed
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [username, setUsername] = useState('Guest');

  const handleAddPost = (imageUrl) => {
    const newPost = {
      id: posts.length + 1,
      imageUrl,
      likes: 0,
      comments: [],
    };
    setPosts([...posts, newPost]);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleComment = (postId, comment) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  const handleSignIn = () => {
    const user = prompt('Enter your username:');
    if (user) setUsername(user);
  };

  const handleSignUp = () => {
    const user = prompt('Enter your username:');
    if (user) setUsername(user);
  };

  return (
    <div className="App">
      <header className='header'>
        <h1>Dummy Instagram</h1>
        <div id="user" className='guest'>
          <span id="username">{username}</span>
          <button className='btn1'  onClick={handleSignIn}>Sign In</button>
          <button className='btn2' onClick={handleSignUp}>Sign Up</button>
        </div>
      </header>
      <main className='post'>
      
        <div id="postList" className='post2'>
          {posts.map(post => (
            <div key={post.id} className="post">
              <img src={post.imageUrl} alt={`Post ${post.id}`} />
              <button onClick={() => handleLike(post.id)}>❤️ {post.likes}</button>
              <button onClick={() => {
                const comment = prompt('Enter your comment:');
                if (comment) handleComment(post.id, comment);
              }}>💬 Comment</button>
              <div>
                {post.comments.map((comment, index) => (
                  <p key={index}>{comment}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </main>
      <footer className='footer'>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            handleAddPost(imageUrl);
          }}
        />
        <button className='footer2'>Add Post</button>
      </footer>
    </div>
  );
}


export default App;

