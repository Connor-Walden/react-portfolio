import SkillCard from './skills/SkillCard';

function Skills() {
  const skills = [
    {
      imgSrc: "https://connor-walden.github.io/updated-portfolio/img/friendly-icon.png", 
      title: "Collaboration", 
      body: "As someone who loves to talk to others, communication and collaboration is very important to me. Without collaboration everything is harder, which is why it is so important to me as a full-stack developer."
    },
    {
      imgSrc: "https://connor-walden.github.io/updated-portfolio/img/speed-icon.png",
      title: "Speed",
      body: "Working in factories and such in the past has instilled a desire to be efficient with my work. Deadlines are extremely important and I would rather be ahead of the deadline instead of behind it."
    },
    {
      imgSrc: "https://connor-walden.github.io/updated-portfolio/img/versatile-icon.png",
      title: "Versatility",
      body: "Over the years I have built many prototypes for different things such as websites, games, AI and bots in many different languages (Java, Javascript, Python, C++ and C#). Practising these languages has given me a solid foundation in logic and programming."
    }
  ];

  return (
    <div className="container mb-3 mt-3">
      <div className="row">
        {skills.map((skill) => {
          return (
            <div className="col-xl-4" key={skill.title}>
              <SkillCard skill={skill} key={skill.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;