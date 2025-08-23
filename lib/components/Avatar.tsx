// components/Avatar.tsx
import React from "react";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt = "User", size = 40 }) => {
  return (
    <img
      src={src || "https://via.placeholder.com/150"}
      alt={alt}
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  );
};

export default Avatar;
