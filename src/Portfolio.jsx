import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Hackathons from './components/Hackathons';
import ContactMe from './components/ContactMe';

export default function Portfolio() {
  return (
    <div>
      <Sidebar />
      <main className="site-main">
        <Header />
        <section id="aboutme"><AboutMe /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="hackathons"><Hackathons /></section>
        <ContactMe />
      </main>
    </div>
  );
}
