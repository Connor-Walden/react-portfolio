import SkillImg from './SkillImg';
import SkillTitle from './SkillTitle';
import SkillBody from './SkillBody';

function SkillCard(props) {
  return(
    <div className="card" style={{width: "25rem", minHeight: "310px"}}>
      <SkillImg imgSrc={props.skill.imgSrc} />
      <div className="card-body">
        <SkillTitle text={props.skill.title} />
        <SkillBody text={props.skill.body} />
      </div>
    </div>
  );
}

export default SkillCard;