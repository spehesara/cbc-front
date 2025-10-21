import { Link } from 'react-router-dom';
import './homePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
    
    <Link to ="/login">Login</Link>
    </div>
    
  );
}
