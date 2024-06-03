import React from 'react';
import KalendaroLogoSVG from "../../../assets/kalendaro_logo1.svg";

interface LogoProps {
  imgWidth?: string;
  imgHeight?: string;
  fontSize?: string;
}

export const Logo: React.FC<LogoProps> = ({
  imgWidth = "40px",
  imgHeight = "40px",
  fontSize = "2xl",
}) => {
  return (
    <a
      href="/"
      className={`flex items-center font-semibold text-gray-900 dark:text-white text-${fontSize}`}
      aria-label="Kalendaro Home"
      title="Kalendaro Home"
    >
      <img
        src={KalendaroLogoSVG}
        style={{ width: imgWidth, height: imgHeight }}
        className="mr-2"
        alt="Kalendaro Logo"
      />
      Kalendaro
    </a>
  );
};