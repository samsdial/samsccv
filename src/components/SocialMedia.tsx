// SocialMedia component
import Icon from "./Icon";

export type SocialMediaProps = {
  color?: string,
  navbar?: boolean,
}

const SocialMedia: React.FC<SocialMediaProps> = ({ color = "#FFF", navbar = false }) => {
  return (
    <ul className="social-media-list justify-content-center">
      {navbar && (
        <li>
          <span style={{color: `${color}`}}>|</span>
        </li>
      ) }
      <li>
        <a href="https://www.linkedin.com/in/samsdg/" target="_blank">
          <Icon variantName="linkedin" color={color} size={20} />
        </a>
      </li>
      <li>
        <a href="https://x.com/w3sams?t=ctb3dBoXZkAyeNr8-QFDWQ&s=08" target="_blank">
          <Icon variantName="twitter" color={color} size={20} />
        </a>
      </li>
      <li>
        <a href="https://wa.link/9qjbbz" target="_blank">
          <Icon variantName="whatsapp" color={color} size={20} />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
