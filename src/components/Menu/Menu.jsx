import { MdLightMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import { FaRegUserCircle } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserPlus } from "react-icons/lu";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CiDark } from "react-icons/ci";

const menuList = [
  { id: 11, icon: <FaRegUserCircle />, title: "My Profile" },
  { id: 12, icon: <RiGroupLine />, title: "New Group" },
  { id: 13, icon: <FaRegUser />, title: "Contacts" },
  { id: 14, icon: <MdOutlineLocalPhone />, title: "Calls" },
  { id: 15, icon: <FaPeopleRoof />, title: "People Nearby" },
  { id: 16, icon: <CiBookmark />, title: "Saved Messages" },
  { id: 17, icon: <IoSettingsOutline />, title: "Settings" },
  { id: 18, icon: <LuUserPlus />, title: "Invite Friends" },
  { id: 19, icon: <AiOutlineQuestionCircle />, title: "Telegram Features" },
];

import PropTypes from "prop-types";
const Menu = ({ setIsShowUserInfo, theme, setTheme }) => {
  return (
    <nav className="flex h-[100vh] w-full absolute top-0 left-0 md:hidden ">
      <div className={`w-[85%] ${theme ?  'bg-gray-100 text-gray-800' : 'bg-[#1C242F] text-white'}`}>
        <div className={`pt-7 p-4 ${theme? 'bg-white' : 'bg-[#233040]'} space-y-5`}>
          <div className="flex justify-between">
            <div
              className={`bg-[#56A7F1] flex items-center justify-center ${theme ? 'text-white' : 'text-[#1C242F]'} w-14 h-14  rounded-full shadow-sm`}
            >
              <span className="uppercase text-lg font-bold">T</span>
            </div>
            <button onClick={() => setTheme(!theme)}>
              {theme ? (
                <CiDark className="text-2xl " />
              ) : (
                <MdLightMode className="text-2xl" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h2 className=" font-semibold">Towhid</h2>
              <p className="text-[#AAA]">+8801928182891</p>
            </div>
            <button>
              <IoIosArrowDown className="text-xl" />
            </button>
          </div>
        </div>

        <ul className=" p-4 space-y-3.5">
          {menuList.map((list) => (
            <button
              key={list.id}
              className={`flex items-center w-full gap-5 hover:text-[#AAA] transition duration-300 font-medium }`}
            >
              <span className="text-xl text-[#5E6875]">{list.icon}</span>
              <p>{list.title}</p>
            </button>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setIsShowUserInfo(false)}
        className="w-[15%] bg-black bg-opacity-60"
      ></div>
    </nav>
  );
};

Menu.propTypes = {
  setIsShowUserInfo: PropTypes.func,
  setTheme: PropTypes.func,
  theme: PropTypes.bool,
};

export default Menu;
