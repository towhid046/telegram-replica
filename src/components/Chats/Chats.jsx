import { IoTriangle } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";
import { formatTime } from "./../../utilities/formateTime/formateTime";
import { formateDate } from "./../../utilities/formateDate/formateDate";
import PropTypes from "prop-types";


const Chats = ({ chat, index }) => {
  return (
    <>
      {chat.sender.created_at === null && (
        <div className="flex justify-center">
          <button className="bg-[#301339] bg-opacity-60 rounded-full px-4 py-1.5 text-white">
            {formateDate(chat.created_at)}
          </button>
        </div>
      )}

      {index % 2 !== 0 && (
        <div key={chat.id} className="flex justify-between">
          <li
            className={`bg-[#212121] relative flex  gap-1 py-1 px-2 ${
              chat.message.length > 40 ? "rounded-lg" : "rounded-full"
            } rounded-bl-none items-end w-max`}
          >
            <span className="text-white">{chat.message}</span>
            <small className="text-[#AAAAAA] min-w-max">
              {formatTime(chat.updated_at)}
            </small>
            <IoTriangle className="text-[#212121] absolute  -left-1 -bottom-[2px]" />
          </li>
          <li></li>
        </div>
      )}

      {index % 2 === 0 && (
        <div className="flex justify-between">
          <li></li>
          <li
            className={`bg-[#7963dd] relative flex  gap-1 py-1 px-2 ${
              chat.message.length > 40 ? "rounded-lg" : "rounded-full"
            } rounded-br-none items-end w-max text justify-end`}
          >
            <span className="text-white">{chat.message} </span>
            <div className="flex items-end">
              <small className="text-[#AAAAAA] min-w-max">
                {formatTime(chat.updated_at)}
              </small>
              <IoCheckmarkDone className="text-white text-xl" />
            </div>
            <IoTriangle className="text-[#7963dd] absolute  text-xl -right-[5px] -bottom-[2px]" />
          </li>
        </div>
      )}
    </>
  );
};

Chats.propTypes = {
    chat: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  };

export default Chats;
