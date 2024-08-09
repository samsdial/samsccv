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
        <a href="https://iconos8.es/icons/set/whatsapp--white" target="_blank">
          <Icon variantName="linkedin" color={color} size={20} />
        </a>
      </li>
      <li>
        <a href="https://iconos8.es/icons/set/whatsapp--white" target="_blank">
          <Icon variantName="twitter" color={color} size={20} />
        </a>
      </li>
      <li>
        <a href="https://iconos8.es/icons/set/whatsapp--white" target="_blank">
          <Icon variantName="whatsapp" color={color} size={20} />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
