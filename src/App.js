import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Nav from './components/Nav'
import ReviewList from './components/ReviewList'
import Error from './components/Error';
import SingleReview from './components/SingleReview';
import Auth from "./components/Auth";
// import { useContext } from 'react';
// import { UserContext } from './components/Users';


function App() {
  // const userValue = useContext(UserContext)
  // const [user, setUser] = userState({ name: 'Paul'})
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
      <Route path= "/" element={<Auth />} />
      <Route path= "/reviews" element={<ReviewList />} />
      <Route path= "/reviews/:review_id" element={<SingleReview />} />
      <Route path= "/*" element={<Error />} />
      </Routes>
  
    </div>

    
  );
}

export default App;