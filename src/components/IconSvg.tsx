import Icon from "../assets/icons.svg";

export type IconProps = {
  stroke?: string;
  fill?: string;
  size?: string | number;
  icon: string | number;
};

const IconSvg: React.FC<IconProps> = ({
  icon,
  stroke = "transparent",
  fill = "transparent",
  size = 30,
}) => (
  <svg
    className="svg-icon"
    stroke={stroke}
    fill={fill}
    width={size}
    height={size}
  >
    <use href={`${Icon}#d-${icon}`} />
  </svg>
);

export default IconSvg;
