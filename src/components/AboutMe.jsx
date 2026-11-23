import { Mountain } from 'lucide-react';
import Section from './Section';

export default function AboutMe() {
  return (
    <Section icon={Mountain} title="About Me" comment="// the view from base camp">
      <div className="about-body">
        <img src="/images/headshot.jpeg" alt="Sidney Wood" className="about-photo" />
        <div className="about-text">
          <p>
            I'm a Computer Engineering student at York University with a passion for building
            efficient systems and solving complex problems. During my internship at Spiri Robotics
            I developed autonomous drone software, analyzed sensor data, and built simulation
            environments with ROS, Gazebo, and ArduPilot.
          </p>
          <p>
            Lately I've been building across the stack: a desktop todo app in Electron, a
            Django + React internship aggregator with background job processing, and data-driven
            web apps in Flask and Streamlit. I like projects the same way I like routes up a
            mountain — well planned, honestly graded, and finished properly.
          </p>
          <p>
            Off the keyboard you'll find me on a trail or hunting down a good espresso. Usually both
            in the same day.
          </p>
        </div>
      </div>
    </Section>
  );
}
