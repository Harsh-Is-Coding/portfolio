import image from './image.png';
import Head from './header';
import './App.css';
import About from './about';
import ProjectCard from './projects';
import Contact from './contact';
import Footer from './footer';
function App() {
  return (
    <div>
      <Head />
      <About />
      <ProjectCard  
      img = {image}
      title = 'project'
      description ='des'
      link ='https://www.w3schools.com/tags/tag_a.asp'
      />
      <img src={image} alt='resume'/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
