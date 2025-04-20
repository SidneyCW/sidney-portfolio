export default function Portfolio() {
    return (
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16 text-primary">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Sidney Wood</h1>
          <p className="text-lg md:text-xl text-gray-400">Computer Engineering Student · Developer · Robotics Enthusiast</p>
          <div className="text-sm md:text-base text-gray-500">
            <p>Email: <a className="text-accent underline" href="mailto:Sidney.scott.wood@gmail.com">Sidney.scott.wood@gmail.com</a></p>
            <p>📍 Toronto, ON · 📞 (647)-542-3540</p>
          </div>
        </header>
  
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a Computer Engineering student at York University with a passion for robotics, software development,
            and creative problem-solving. I love building real-world solutions through hardware, code, and collaboration.
          </p>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Projects</h2>
          <div className="grid gap-6">
            <div className="bg-surface p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2">MTG Win Tracker (Magic: The Gathering)</h3>
              <p className="text-gray-400">
                A full-stack Flask + MySQL app for tracking Commander (EDH) wins. Includes a dynamic Elo system for players and decks,
                hosted on a Raspberry Pi with Git automation + Nginx. Tracks win/loss data and ranks decks by performance.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2">Spiri Robotics Internship</h3>
              <p className="text-gray-400">
                Developed ship detection tools using sound and AIS tracking. Wrote Python tools to analyze and archive data,
                built Gazebo simulation environments, and contributed to drone web control interface.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2">Sumobot – YURS</h3>
              <p className="text-gray-400">
                Designed and programmed a self-driving sumobot for competition. Used Arduino IDE, sensors, and basic autonomous logic
                as part of the York University Robotics Society.
              </p>
            </div>
          </div>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-300 list-disc list-inside">
            <li>Python (3 yrs): APIs, Automation, Data Analysis</li>
            <li>Java (4 yrs): OOP, Arduino Projects</li>
            <li>Dart: UI / App Prototyping</li>
            <li>Fusion 360: CAD for robotics</li>
            <li>Git: version control, open source workflow</li>
            <li>Figma: UI/UX design mockups</li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Education</h2>
          <p className="font-medium text-gray-200">York University (2023–2028)</p>
          <p>B.Eng. (Honours), Computer Engineering</p>
          <p className="text-gray-500 text-sm">Relevant Courses: Applied Calculus, Discrete Math, Mechatronics, OOP, Engineering Mechanics</p>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Hackathons & Competitions</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong>Roborama Hackathon (Feb 2024):</strong> Built and coded autonomous robot in 12-hour competition.</li>
            <li><strong>UNHack (Oct 2023):</strong> Developed team solution to UN goal in a 48hr sprint.</li>
            <li><strong>Bernoulli Challenge (Jan 2024):</strong> Placed top 50% in university-wide math competition.</li>
          </ul>
        </section>
      </main>
    );
  }
  