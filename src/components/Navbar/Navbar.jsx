import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import PropTypes from "prop-types";
import { useState } from "react";
import Menu from "./../Menu/Menu";

const Navbar = ({ setIsToggle, isToggle }) => {
  const [isShowUserInfo, setIsShowUserInfo] = useState(false);

  return (
    <>
      <nav className="flex justify-between shadow-sm py-2.5 px-7 items-center gap-5 sticky top-0 bg-[#212121]">
        {isToggle ? (
          <button
            onClick={() => setIsToggle(false)}
            className="hover:bg-[#2b2b2b] transition duration-300 p-2 rounded-full"
          >
            <FiArrowLeft className="text-[#AAAAAA] text-2xl" />
          </button>
        ) : (
          <>
            <button
              className="hover:bg-[#2b2b2b] hidden md:flex transition duration-300 p-2 rounded-full"
              onClick={() => setIsToggle(true)}
            >
              <IoMenu className="text-[#AAAAAA] text-2xl" />
            </button>

            <button
              onClick={() => setIsShowUserInfo(true)}
              className="hover:bg-[#2b2b2b] md:hidden flex transition duration-300 p-2 rounded-full"
            >
              <IoMenu className="text-[#AAAAAA] text-2xl" />
            </button>
          </>
        )}

        <div className="w-full" onClick={() => setIsToggle(true)}>
          <div
            className={`w-full transition duration-300 ${
              isToggle
                ? "border-[#8774E1] border-2"
                : "border-gray-700 hover:border-gray-500 border-2"
            } border items-center gap-2 flex rounded-full bg-[#181818] py-2 px-4 transition duration-300 cursor-text`}
          >
            <IoIosSearch
              className={`text-2xl ${
                isToggle ? "text-[#8774E1]" : "text-[#707070]"
              }`}
            />
            <input
              type="text"
              placeholder="Search"
              className="border-none focus:outline-none bg-inherit placeholder:text-[#707070] text-white w-full"
            />
          </div>
        </div>
      </nav>

      {isShowUserInfo && <Menu setIsShowUserInfo={setIsShowUserInfo} />}
    </>
  );
};

Navbar.propTypes = {
  setIsToggle: PropTypes.func.isRequired,
  isToggle: PropTypes.bool.isRequired,
};

export default Navbar;
