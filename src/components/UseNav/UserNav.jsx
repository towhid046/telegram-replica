import { BsThreeDotsVertical } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import { formatTime } from "../../utilities/formateTime/formateTime";
import PropTypes from "prop-types";

const UserNav = ({ targetedUser, setIsChatShow }) => {
  const { name, index, lastUpdateAt } = targetedUser;

  return (
    <nav className="flex justify-between shadow-sm py-2 md:px-5 px-2 items-center gap-5 sticky top-0 bg-[#212121] md:ml-0.5 ">
      <div className="flex items-center md:gap-3 gap-2 cursor-pointer ">
        <div className="md:hidden">
          <button
            onClick={() => setIsChatShow(false)}
            className="hover:bg-[#2b2b2b] transition duration-300 p-2 rounded-full "
          >
            <FiArrowLeft className="text-[#AAAAAA] text-2xl " />
          </button>
        </div>

        <div
          className={`
                ${index % 2 !== 0 ? "bg-[#56A7F1]" : "bg-[#F77EA0]"}
            flex items-center justify-center text-white w-11 h-11 bg-[#56A7F1] rounded-full
         shadow-sm`}
        >
          <span className="uppercase text-md font-bold">{`${
            name?.split("")[0]
          }${name?.split("")[name.length - 1]}`}</span>
        </div>
        <div>
          <h2 className="text-white text-[15px]">
            <b>{name}</b>
          </h2>
          <p className="text-[#AAAAAA] text-[14px]">{`Last update at ${formatTime(
            lastUpdateAt
          )} `}</p>
        </div>
      </div>
      <ul className="flex items-center gap-4">
        <li className="hover:bg-[#2b2b2b] transition duration-300 p-2 rounded-full cursor-pointer">
          <LuPhone className="text-2xl text-[#AAAAAA]" />
        </li>
        <li className="hover:bg-[#2b2b2b] transition duration-300 p-2 rounded-full cursor-pointer">
          <IoIosSearch className="cursor-pointer text-2xl text-[#AAAAAA]" />
        </li>
        <li className="hover:bg-[#2b2b2b] transition duration-300 p-2 rounded-full cursor-pointer">
          <BsThreeDotsVertical className="text-2xl text-[#AAAAAA]" />
        </li>
      </ul>
    </nav>
  );
};

UserNav.propTypes = {
  targetedUser: PropTypes.object.isRequired,
  setIsChatShow: PropTypes.func,
};

export default UserNav;
