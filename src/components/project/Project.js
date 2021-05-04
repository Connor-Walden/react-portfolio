import ProjectSubject from './ProjectSubject';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import ProjectImg from './ProjectImg';

function Project(props) {
  return (
    <div className="mb-3 mt-3">
      <ProjectSubject text={props.project.subject}/>
      <ProjectTitle text={props.project.title} />
      <ProjectDescription text={props.project.description} />
      <ProjectImg imgSrc={props.project.imgSrc} link={props.project.link} />
    </div>
  );
}

export default Project;