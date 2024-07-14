import { BiSolidMicrophone } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";
import { RiAttachment2 } from "react-icons/ri";
import { TbTriangleFilled } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const ChatInput = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex items-center gap-2 justify-center  w-full px-4">
      <div className="bg-[#212121] rounded-xl rounded-br-none flex justify-between w-full  items-center px-5 py-4 gap-4">
        <FaRegSmile className="text-[#949DA4] text-2xl" />
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Message"
          className="border-none focus:outline-none placeholder:text-[#949DA4] text-white w-full bg-inherit"
        />
        <div className="relative ">
          <RiAttachment2 className="text-[#949DA4] text-2xl cursor-pointer " />
          <span className="absolute -right-[26px]  -bottom-[18px]">
            <TbTriangleFilled className="text-[#212121]" />
          </span>
        </div>
      </div>
      <div>
        <button className=" w-14 h-14 flex justify-center rounded-full bg-[#7963dd] items-center">
          {inputValue ? (
            <FaArrowRight className="text-xl text-white" />
          ) : (
            <BiSolidMicrophone className="text-2xl text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
