import { Link } from "react-scroll";

export default function Sidebar() {
  const links = [
    { name: "About", to: "aboutme" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Hackathons", to: "hackathons" },
  ];

  return (
    <nav className="fixed left-8 top-1/3 flex flex-col space-y-6 text-gray-400 text-sm font-semibold tracking-widest z-50">
      {links.map((link) => (
        <Link
          key={link.to}
          activeClass="active"
          to={link.to}
          spy={true}
          smooth={true}
          offset={-400}
          duration={800}
          className="group flex items-center space-x-2 cursor-pointer transition-all"
        >
          <span className="w-6 h-[1px] bg-gray-600 group-[.active]:bg-white transition-all" />
          <span className="group-[.active]:text-white">{link.name}</span>
        </Link>
      ))}
    </nav>
  );
}