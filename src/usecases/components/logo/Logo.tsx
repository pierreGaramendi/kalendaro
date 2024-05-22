import KalendaroLogoSVG from "../../../assets/kalendaro_logo1.svg";

export const Logo = () => {
  return (
    <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img
        src={KalendaroLogoSVG}
        className="w-10 h-10 mr-2"
        alt="website logo"
      />
      Kalendaro
    </a>
  );
};
