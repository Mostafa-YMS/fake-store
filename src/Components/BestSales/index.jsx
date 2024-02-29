import { avatar } from "../../Assets";
import "./best-sales.scss";

const BestSales = () => {
  return (
    <div className="best-sales">
      <div className="content">
        <div className="avatar-container">
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
        </div>

        <div>
          <p className="subtitle">Report for</p>
          <p className="title">{`Best\nSales`}</p>
        </div>
      </div>
      <div className="time">
        <p className="secondary">Daily</p>
        <p className="main">Weekly</p>
        <p className="secondary">Monthly</p>
      </div>
    </div>
  );
};

export default BestSales;
