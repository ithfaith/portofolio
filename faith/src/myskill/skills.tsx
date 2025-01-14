import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

interface Skill {
  name: string;
  logo: string;
  route: string;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

const SkillCard = ({ name, logo, route }: Skill) => {
  return (
    <Link to={route}>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        style={{
          width: '250px',
          height: '150px',
          backgroundColor: 'bg-blue-950',
          backgroundImage: `url(${logo})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          boxShadow: '#000',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          margin: '10px',
        }}
      >
        <span className="text-white font-bold text-xl">{name}</span>
      </div>
    </Link>
  );
};

const Skills = () => {
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
    const skillsData: SkillCategory[] = [
      {
        category: 'Programming Languages',
        items: [
          { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', route: '/javascript' },
          { name: 'TypeScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png', route: '/typescript' },
        ],
      },
      {
        category: 'Markup & Style',
        items: [
          { name: 'CSS', logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', route: '/css' },
          { name: 'HTML', logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png', route: '/html' },
        ],
      },
      {
        category: 'Libraries',
        items: [
          { name: 'React', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', route: '/react' },
        ],
      },
    ];
    setSkills(skillsData);
  }, []);

  return (
    <div className="bg-blue-950 text-white min-h-screen p-8" id="skills">
      <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>
      <hr className="border-gray-400 my-8 w-full" />

      {/* Skills Categories */}
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">{skillCategory.category}</h2>
          <div className="flex flex-wrap justify-center">
            {skillCategory.items.map((skill, i) => (
              <div key={i} data-aos={i === 0 ? 'fade-up' : 'fade-up'} data-aos-duration="1500">
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
          {index < skills.length - 0 && (
            <hr className="border-gray-400 my-8 w-full" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Skills;

