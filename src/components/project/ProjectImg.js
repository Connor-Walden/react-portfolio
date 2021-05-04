function ProjectImg(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer" value="goto">
      <img src={props.imgSrc} alt="Project Screenshot" style={{ width: "1320px" }}/>
    </a>
  );
}

export default ProjectImg;