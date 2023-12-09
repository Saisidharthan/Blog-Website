import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import PostDetails from './Pages/PostDetails'
import Registeration from "./Pages/Registeration"
import CreatePost from './Pages/CreatePost'
import Profile from './Pages/Profile'
import EditPost from './Pages/EditPost'
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/create" element={<CreatePost/>}/>
        <Route exact path="/register" element={<Registeration/>}/>
        <Route exact path="/edit/:id" element={<EditPost/>}/>
        <Route exact path="/profile/:id" element={<Profile/>}/>
        <Route exact path="/posts/post/:id" element={<PostDetails/>}/>

      </Routes>

    </div>
  )
}

export default App