import React from 'react';
import Post from './components/post/Post';
import Nav from './components/nav/Nav';

const posts = [
  {title:'POST 1', content:'https://www.hdnicewallpapers.com/Walls/Big/Cat/Beautiful_Cat_Imge_Download.jpg', author: 'Alex Johnson'},
  {title:'POST 2', content:'https://c8.alamy.com/comp/B581EX/black-and-white-imge-of-an-old-bicycle-by-the-singel-canal-amsterdam-B581EX.jpg', author: 'Soy tio'},
  {title:'POST 3', content:'https://thumbs.dreamstime.com/b/blurred-white-flora-flower-garden-periwimkle-madagascar-water-drops-soft-focus-blur-background-macro-imge-dew-209068582.jpg', author: 'Shimson Chone'},
  {title:'POST 4', content:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkdImF9xoSoIRwmRmmBCV19sCM76lW1qt0g&usqp=CAU', author: 'Alex Ovadia'},
];



const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <h1>My Blog App</h1>
      {posts.map((post,index) => (
        <Post title={post.title} content={post.content} author={post.author} key={index} />
      ))}
    </div>
  );
};
export default App;

