import { Link } from 'react-scroll';

const links = [
  { name: 'ABOUT', to: 'aboutme' },
  { name: 'EXPERIENCE', to: 'experience' },
  { name: 'PROJECTS', to: 'projects' },
  { name: 'SKILLS', to: 'skills' },
  { name: 'EDUCATION', to: 'education' },
  { name: 'HACKATHONS', to: 'hackathons' },
];

export default function Sidebar() {
  return (
    <nav className="side-nav">
      {links.map((link) => (
        <Link
          key={link.to}
          activeClass="active"
          className="nav-link"
          to={link.to}
          spy={true}
          smooth={true}
          offset={-200}
          duration={600}
        >
          <span className="tick" />
          <span>{link.name}</span>
        </Link>
      ))}
    </nav>
  );
}
