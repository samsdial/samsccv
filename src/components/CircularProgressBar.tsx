import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export type CircularProgressBarProps = {
  percentage: number;
};

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage = 0,
}) => {
  return (
    <div className="m-auto" style={{ width: 125, height: 125 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: "#007cb7",
          textColor: `#ff6f61`,
          trailColor: "#edf4f8",
          textSize: "26px",
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
