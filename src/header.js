import logo from './personalLogo.png'
import './index.css'

function Head() {
   return ( 
   <div className="header">
        <img src = {logo} className='personalLogo'/>
        <ul className="navBar">
            <li className="navItem"><a>about</a></li>
            <li className="navItem"><a>projects</a></li>
            <li className="navItem"><a>expierence</a></li>
            <li className="navItem"><a>contact</a></li>
        </ul>
    </div>);
}

export default Head;
