import { FaPlay } from "react-icons/fa";
import Button from "./Button";

const PlayButton = () => {
  return (
    <div className="">
      <button className="transition opacity-0 rounded-full flex items-center bg-green-500 p-4 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
        <FaPlay className="text-black" />
      </button>
    </div>
  );
};
export default PlayButton;
