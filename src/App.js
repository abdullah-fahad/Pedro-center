import logo from './logo.svg';
import './App.css';
import * as Icons from '@mui/icons-material';
import * as M from '@mui/material';


function App() {
  return (
    <div className="App">
      <div className='nav-section d-flex flex-wrap'>
        <img className='logo' src='https://s.yimg.com/fz/api/res/1.2/PNJ7BjM2tVizNKcnRqTRTA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTIyMA--/https://s.yimg.com/zb/imgv1/badad363-4e2b-3b93-a60d-ed5db9dd8975/t_500x300' alt='logo'></img>
        <button className='btn btn-warning'><Icons.Home />Home</button>
        <button className='btn btn-warning'><Icons.Image />Posts</button>
        <button className='btn btn-warning'><Icons.RoomService />Services</button>
        <button className='btn btn-warning'>About</button>
        <button className='btn btn-warning'>Contact</button>
        <input className='search align-self-center' placeholder='search...' />
        <M.IconButton aria-label="Go">
          <Icons.Search />
        </M.IconButton>
        <div className='d-flex align-items-center'>
        <button className='btn btn-warning signup'>Signup</button>
        <button className='btn btn-warning'>Login</button>
      </div>
      </div>
      <div className='welcoming'>
        <h1 className='label'>Welcome to Pedro center!</h1>
        <div className='border ' />
      </div>
      
    </div>
  );
}

export default App;
