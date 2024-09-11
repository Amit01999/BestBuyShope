import { ImFacebook, ImTwitter, ImLinkedin2 } from 'react-icons/im';

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="border border-gray-400 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-transparent">
        <ImFacebook />
      </span>
      <span className="mx-2 border border-gray-400 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 hover:bg-blue-400 hover:text-white hover:border-transparent">
        <ImTwitter />
      </span>
      <span className="border border-gray-400 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 hover:bg-blue-700 hover:text-white hover:border-transparent">
        <ImLinkedin2 />
      </span>
    </div>
  );
};

export default SocialIcons;
