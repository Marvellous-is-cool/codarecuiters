import { React } from "react";
import "../App.css";
import friends from "../Images/friends.svg";
import pro from "../Images/pro.svg";
import earn from "../Images/earn.svg";
import team from "../Images/team.svg";

const CardTemp = (props) => {
  const img = props.img;
  const title = props.title;
  const body = props.body;
  return (
    <div className="col-sm-3 mt-5">
      <img className="cardTemp" src={img} width="80px" height="80px" />
      <h4 className="CardTitle mt-2">{title}</h4>
      <p className="CardBody">{body}</p>
    </div>
  );
};

const Obj = () => {
  return (
    <div className="row m-2 mt-4">
      <CardTemp
        img={pro}
        title="Professionals"
        body="We don't just employ, we employ professionals and we prove that by our tests"
      />
      <CardTemp
        img={team}
        title="We are a Team"
        body="We work together, make decisions together, there is never a boss, nor a staff"
      />
      <CardTemp
        img={friends}
        title="Beyond Workers"
        body="We even hate that term, we are group of friends that work together, it's better that way"
      />
      <CardTemp
        img={earn}
        title="Earn as you work"
        body="Yes, there is no salaries. You earn as you work! You can earn as much as you want, it's your sweat"
      />
    </div>
  );
};

export default Obj;
