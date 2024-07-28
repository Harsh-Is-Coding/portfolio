import headShot from "./head-shot.jpg"
import './index.css'

function About(){
    return (
        <div className="about">
            <div className="aboutHead">
                <h1 className="name">Hi, I'm Harsh Shukla <span className="wave"> 👋🏻</span></h1>
                <img src={headShot} className="meImage" />
            </div>
            <div className="aboutContent">
                <p className="abourPara">LET ME INTRODUCE MYSELF
                    <br/><br/>
I fell in love with programming, and I've learned quite a bit along the way! 😊
<br/><br/>
I am fluent in classics like Python, C++, and JavaScript.
<br/><br/>
My fields of interest include building innovative web technologies and products, AI and Cloud technologies.
<br/><br/>
Whenever possible, I apply my passion for developing products using React.js and modern tools like AWS and Postgres.</p>
                <h3 className="university">McMaster Univsersity - Software Engineering</h3>
                <h1 className="skillHead">My Skills</h1>
                <ul className="skillList">
                    <li className="skillItem">React.Js</li>
                    <li className="skillItem">C++</li>
                    <li className="skillItem">Python</li>
                    <li className="skillItem">Postgres SQL</li>
                    <li className="skillItem">Tailwind CSS</li>
                </ul>
            </div>
            
        </div>
    )
};

export default About;