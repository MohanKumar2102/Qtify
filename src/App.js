import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Grid from './Components/Grid/Grid';
import Card from './Components/Card/Card';
import album from "./Assets/album.jpeg"
import LeftNavigation from './Components/Carousel/LeftNavigation/LeftNavigation';
import RightNavigation from './Components/Carousel/RightNavigation/RightNavigation';
import Carousel from './Components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Card image={album} follows={"100"} title={"Songs"}/>
    {/* <LeftNavigation/>
    <RightNavigation/> */}
    <Carousel/>
    </div>
    
    
  );
}

export default App;
