import Navbar from './components/navbar/Navbar'
// import TextLinear from './components/TextLinear/TextLinear'
import { PostProps } from './components/post/Post'
import Post from './components/post/Post'
import StoryUsers from './components/StoryUsers/StoryUsers'
import './App.css'


const posts: PostProps[] = [
  {
    title: "Exploring the Great Barrier Reef",
    text: "Had an amazing time exploring the beautiful coral reefs in the Great Barrier Reef. The marine life is breathtaking!",
    authorName: "John Smith",
    image: "https://cdn.britannica.com/67/152567-050-C976C2B3/Great-Barrier-Reef.jpg"
  },
  {
    title: "Delicious Pasta Recipe",
    text: "Just tried out a new pasta recipe and it turned out to be absolutely delicious. Sharing the recipe below!",
    authorName: "Jane Doe",
    image: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg"
  },
  {
    title: "Hiking Adventure in the Swiss Alps",
    text: "Spent the weekend hiking in the Swiss Alps and the views were absolutely stunning. Highly recommend it!",
    authorName: "David Johnson",
    image: "https://www.muchbetteradventures.com/magazine/content/images/2019/07/10083602/iStock-499263804.jpg"
  },
  {
    title: "New Book Recommendation",
    text: "Just finished reading an incredible book. It's a must-read for all book lovers out there!",
    authorName: "Emily Williams",
    image: "https://www.realsimple.com/thmb/KrGb42aamhHKaMzWt1Om7U42QsY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/great-books-for-anytime-2000-4ff4221eb1e54b659689fef7d5e265d5.jpg"
  },
  {
    title: "Sunset at the Beach",
    text: "Captured this breathtaking sunset at the beach last evening. Nature never fails to amaze me!",
    authorName: "Sarah Thompson",
    image: "https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
  },
  {
    title: "Visiting Historical Landmarks",
    text: "Explored some fascinating historical landmarks today. It was like stepping back in time!",
    authorName: "Michael Brown",
    image: "https://luxurycolumnist.com/wp-content/uploads/2022/02/the-colosseum-rome-italy.jpg"
  },
  {
    title: "Homemade Pizza Night",
    text: "Had a fun-filled evening making and devouring homemade pizzas with friends. Yum!",
    authorName: "Emma Wilson",
    image: "https://i.shgcdn.com/9aceaf32-efcf-4e28-8f59-75c15986bab8/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
  },
  {
    title: "Road Trip to the Grand Canyon",
    text: "Embarked on an unforgettable road trip to the Grand Canyon. The vastness of the canyon is mind-blowing!",
    authorName: "Alex Turner",
    image: "https://www.followmeaway.com/wp-content/uploads/2020/06/Grand-Canyon-Road-Trip-Valley-of-Fire-State-Park.jpg"
  },
  {
    title: "Morning Coffee Bliss",
    text: "There's nothing quite like starting the day with a perfect cup of coffee. It's pure bliss!",
    authorName: "Olivia Davis",
    image: "https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg"
  }
];

// const users = '/images/users.png'


function App() {
  return (
    <section>
      <Navbar />
        <div className='container-users-story'>
        {posts.map(post=> <StoryUsers authorName={post.authorName} image={post.image}/>)}
        </div>
       {/* <img className='users' src={users} alt="" /> */}
      <div className='container-posts'>
        {posts.map(post => <Post title={post.title} authorName={post.authorName} text={post.text} image={post.image}/>)}
      </div>
    </section>
  )
}

export default App
