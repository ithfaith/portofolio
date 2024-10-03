interface Skill {
  name: string;
  logo: string;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

const SkillCard = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div
      style={{
        width: '250px',
        height: '150px',
        backgroundColor: '#fff',
        backgroundImage: `url(${logo})`,
        backgroundSize: 'contain',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        margin: '10px',
      }}
    >
      <span className="text-white font-bold text-xl">{name}</span>
    </div>
  );
};

const Skills = () => {
  const skills: SkillCategory[] = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
        { name: 'TypeScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' },
      ],
    },
    {
      category: 'Markup & Style',
      items: [
        { name: 'CSS', logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
        { name: 'HTML', logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
      ],
    },
    {
      category: 'Libraries',
      items: [
        { name: 'React Js', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
      ],
    },
  ];

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
              <SkillCard key={i} name={skill.name} logo={skill.logo} />
            ))}
          </div>
          {index < skills.length - 0 && (
            <hr className="border-gray-400 my-8 w-full" />
          )
          }
        </div>
      ))}
    </div>
  );
};

export default Skills;

