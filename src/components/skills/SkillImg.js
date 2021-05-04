function SkillImg(props) {
  return (
    <div className="d-flex justify-content-center">
      <img src={props.imgSrc} className="card-img-top" alt="Skill Icon" style={{ width: "100px" }}/>
    </div>
  );
} 

export default SkillImg;