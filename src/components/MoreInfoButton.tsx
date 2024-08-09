import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import { Link, To } from "react-router-dom";

export type MoreInfoButtonProps = {
  to: To,
  className: string,
  text: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined,
};


const MoreInfoButton: React.FC<MoreInfoButtonProps> = ({ to, className, text }) => {
  return (
    <Link to={to} className={`more-link ${className}`}>
      {text}
    </Link>
  );
};

export default MoreInfoButton;