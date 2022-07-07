 
import { Routes , Route } from 'react-router-dom';
import Navbar from './Components/components/Home/Navbar';
import CreatePost from './Components/components/posts/CreatePost';
import PostDetailes from './Components/components/posts/PostDetailes';
import Posts from './Components/components/posts/Posts';
function App() {
  return (
    <div >
       <Navbar />

       <Routes>
       <Route exact path="/" element={<CreatePost />} />
        <Route path="/create"  element={<CreatePost/>} />
        <Route path="/posts/*"  element={<Posts/>} /> 
       </Routes>
    </div>
  );
}

export default App;
