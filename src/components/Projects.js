import Project from './project/Project';

function Projects() {
  const projects = [
    {
      subject: "Custom Framework",
      title: "Dragon",
      description: "Dragon is a custom framework I built as a fun side-project. It includes a mobile-first responsive grid, and many components such as: Buttons, Alerts, Statements, Forms, Navbars, Badges, Dropdowns, Lists, Accordions and custom styling for many different html elements.",
      imgSrc: "https://connor-walden.github.io/updated-portfolio/img/dragon.png",
      link: "https://getdragon.xyz/"
    },
    {
      subject: "Entertainment App",
      title: "Spotwify",
      description: "Spotwify is an entertainment app that bundles your favourite music with a lot of information about the artist. Spotwify utilises a few APIs including: AudioDB, Youtube and Twitter. It was our goal to make the site easy to navigate and also easy to use, I think this was achieved.",
      imgSrc: "https://connor-walden.github.io/updated-portfolio/img/project1.png",
      link: "https://alex-stew.github.io/project1/"
    },
    {
      subject: "Code Decumentation",
      title: "DCODE",
      description: "Use DCODE to search up documentation for javascript functions. Useful for web developers!",
      imgSrc: "https://connor-walden.github.io/updated-portfolio/img/dcode.png",
      link: "https://arcane-waters-44478.herokuapp.com/"
    },
    {
      subject: "Weather App",
      title: "Weather Dashboard",
      description: "The weather dashboard works so that you can search the weather in a specific city, save it, and search another. When you search multiple cities it appends to a list in the sidebar in which you can select later. This allows user to plan a trip and make sure that the weather is going to be favourable for the trip.",
      imgSrc: "https://connor-walden.github.io/updated-portfolio/img/weatherApp.png",
      link: "https://connor-walden.github.io/weather-dashboard/"
    },
    {
      subject: "Track Your Workouts",
      title: "Workout Tracker",
      description: "The fitness tracker is an app to keep track of your workouts. Easy to use UI and it will display last 7 days workouts in /stats.",
      imgSrc: "https://connor-walden.github.io/updated-portfolio/img/fitnessTracker.png",
      link: "https://shrouded-citadel-72947.herokuapp.com/"
    },
    {
      subject: "Employee Management app",
      title: "Employee Tracker",
      description: "Search and sort through employees with an option to filter by name. Made with React",
      imgSrc: "https://user-images.githubusercontent.com/20080981/116839497-c685a180-ac11-11eb-866d-33290f1e84b4.PNG",
      link: "https://connor-walden.github.io/employee-directory/"
    }
  ];

  return (
    <div className="container mb-3 mt-3">
      {projects.map(project => {
        return (
          <div className="row" key={project.title}>
            <Project project={project}/>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;