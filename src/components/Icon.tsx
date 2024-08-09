import React from "react";
import { JSX } from "react/jsx-runtime";
import { temp, VARIANTS } from "./variants";

// eslint-disable-next-line react-refresh/only-export-components
export const ICON_VARIANTS: typeof VARIANTS = VARIANTS;
export type LIcon = (typeof temp)[number];


const SIZES = {
  small: 16,
  medium: 24,
  large: 32,
  xlarge: 48,
  xxlarge: 64,
};
// eslint-disable-next-line react-refresh/only-export-components
export const ICON_SIZES = {
  small: "small",
  medium: "medium",
  large: "large",
  xlarge: "xlarge",
  xxlarge: "xxlarge",
};
export type IconsProps = {
  variantName: LIcon;
  size: keyof typeof SIZES;
  color?: string;
  className?: string;
};

const Icon: React.FC<IconsProps> & { VARIANTS: typeof VARIANTS } = ({
  variantName,
  size,
  color,
  className,
}) => {
  const IconVariant = VARIANTS[variantName];

  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg/"
      className={className}
    >
      {IconVariant.path ? (
        IconVariant.path.map((data: JSX.IntrinsicAttributes & React.SVGProps<SVGPathElement>) => {
          if (!IconVariant.notChangeColor) {
            data.fill = color;
          }
          return <path key={data.d} {...data} />;
        })
      ) : (
        <path {...IconVariant} fill={color} />
      )}
    </svg>
  );
};

Icon.VARIANTS = VARIANTS;

export default Icon;
