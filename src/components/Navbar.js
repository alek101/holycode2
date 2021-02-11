import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/post" >Post</Link>
                <Link to="/test1" >Test1</Link>
                <Link to="/test2" >Test2</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;