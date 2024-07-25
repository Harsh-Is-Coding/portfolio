import logo from './personalLogo.png'
import './index.css'

function Head() {
   return ( 
   <div className="header">
        <img src = {logo} className='personalLogo'/>
        <ul className="navBar">
            <li className="navItem">about</li>
            <li className="navItem">projects</li>
            <li className="navItem">expierence</li>
            <li className="navItem">contact</li>
        </ul>
    </div>);
}

export default Head;
