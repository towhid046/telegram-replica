import PropTypes, { object } from "prop-types";
import { RiPencilFill } from "react-icons/ri";
const UserList = ({ users, handleUserChat, targetedUserIndex, theme }) => {
  return (
    <ul className="px-2">
      {users?.map((user, index) => (
        <li
          key={user.id}
          onClick={() =>
            handleUserChat(
              user.id,
              user?.creator?.name || "Unknown",
              index,
              user.updated_at
            )
          }
          className={`flex justify-between items-start cursor-pointer transition duration-300 px-4 rounded-lg py-2 ${
            targetedUserIndex === index && "bg-[#8774E1]"
          }
            hover:bg-[#2B2B2B]
            ${theme ? "hover:bg-[#F3F3F4]" : "hover:bg-[#2B2B2B]"}
          
          `}
        >
          <div className="flex items-center gap-2.5">
            <div
              className={`
                ${index % 2 !== 0 ? "bg-[#56A7F1]" : "bg-[#F77EA0]"}
                flex items-center justify-center text-white w-14 h-14  rounded-full shadow-sm`}
            >
              {user?.creator?.name ? (
                <span className="uppercase text-md font-bold">{`${
                  user?.creator?.name?.split("")[0]
                }${
                  user?.creator?.name?.split("")[user?.creator?.name.length - 1]
                }`}</span>
              ) : (
                <span className="uppercase text-md font-bold">UN</span>
              )}
            </div>
            <div>
              <h2
                className={`${targetedUserIndex === index && "text-white "}
                ${theme ? "text-gray-800" : "text-white"}
                `}
              >
                <b>{user?.creator?.name || "Unknown"}</b>
              </h2>
              <p
                className={` ${
                  targetedUserIndex === index ? "text-white" : "text-[#AAAAAA]"
                }`}
              >
                {user?.creator?.name || "Unknown"} joined Telegram
              </p>
            </div>
          </div>

          <small
            className={` ${
              targetedUserIndex === index ? "text-white" : "text-[#AAAAAA]"
            }`}
          >
            Sat
          </small>
        </li>
      ))}

      <div className=" fixed bottom-4 xl:left-[28%] lg:left-[26%] md:left-[42%] right-4">
        <button
          className="bg-[#8774E1]
          flex items-center justify-center text-white w-14 h-14  rounded-full shadow-sm"
        >
          <RiPencilFill className="text-2xl" />
        </button>
      </div>
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(object).isRequired,
  handleUserChat: PropTypes.func.isRequired,
  targetedUserIndex: PropTypes.number,
};

export default UserList;
