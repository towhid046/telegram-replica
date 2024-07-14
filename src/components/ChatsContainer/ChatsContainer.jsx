import Chats from "./../Chats/Chats";
import ChatInput from "./../ChatInput/ChatInput";
import UserNav from "./../UseNav/UserNav";
import PropTypes, { object } from "prop-types";

const ChatsContainer = ({ chats, targetedUser, setIsChatShow }) => {
  return (
    <>
      {/* User Nav */}
      {targetedUser?.name && (
        <UserNav setIsChatShow={setIsChatShow} targetedUser={targetedUser} />
      )}

      <div className="relative h-[90vh] space-y-1.5 xl:w-3/5 lg:w-4/5 mx-auto">
        <div className=" h-[77vh]  mx-auto flex flex-col-reverse overflow-y-scroll px-4 overflow-x-hidden">
          <ul className="space-y-2 mt-4 ">
            {chats?.map((chat, index) => (
              <Chats key={chat.id} chat={chat} index={index} />
            ))}
          </ul>
        </div>
        {/* Chat input */}
        {targetedUser?.name && <ChatInput />}
      </div>
    </>
  );
};

ChatsContainer.propTypes = {
  chats: PropTypes.arrayOf(object).isRequired,
  targetedUser: PropTypes.object,
  setIsChatShow: PropTypes.func,
};

export default ChatsContainer;
