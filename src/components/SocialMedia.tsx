import IconSvg from "./IconSvg";

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
          <IconSvg icon="linkedin" size="20" fill={color} />
        </a>
      </li>
      <li>
        <a href="https://iconos8.es/icons/set/whatsapp--white" target="_blank">
          <IconSvg icon="twitter" size="20" fill={color} />
        </a>
      </li>
      <li>
        <a href="https://iconos8.es/icons/set/whatsapp--white" target="_blank">
          <IconSvg icon="whatsapp" size="20" fill={color} />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
