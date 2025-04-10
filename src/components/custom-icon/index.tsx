import React from "react";

interface CustomIconProps {
  SvgIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  size?: number;
  color?: string;
  width?: string;
  height?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  SvgIcon,
  size = 12,
  color,
  width,
  height,
}) => {
  return (
    <div style={{ width: width ?? size, height: height ?? size, color }}>
      <SvgIcon width="100%" height="100%" />
    </div>
  );
};

export default CustomIcon;
