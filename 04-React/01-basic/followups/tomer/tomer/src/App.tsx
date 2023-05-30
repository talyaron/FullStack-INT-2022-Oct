import './App.scss'
import Posts from "./components/post/post";
import Nav from './components/nav/nav';

const posts = [
  {
    img: "https://i.redd.it/qniaryxksqb81.png",
    text: "luffy ",
    authorName: "hello"
  },
  {
    img: "https://wallpaperaccess.com/full/1480778.jpg",
    text: "luffy gear 4",
    authorName: "tomer"
  },
];
function App() {
  return (
    <div>
      <Nav />
      <div className='haderName'>
      <h1>Instagram</h1>
      </div>
      <div className='mainPage'>
      {posts.map((post, index) => (
        <Posts
          key={index}
          img={post.img}
          text={post.text}
          authorName={post.authorName}
        />
      ))}
      </div>
    </div>
  );
}


export default App
