import bannerBg from "../../assets/images/chat-background.png";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import Navbar from "./../Navbar/Navbar";
import UserList from "./../UserList/UserList";
import Tabs from "./../Tabs/Tabs";
import ChatsContainer from "./../ChatsContainer/ChatsContainer";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState([]);
  const [targetedUser, setTargetedUser] = useState({});
  const [isToggle, setIsToggle] = useState(false);
  const [isChatShow, setIsChatShow] = useState(false);
  

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios.get(
          "https://devapi.beyondchats.com/api/get_all_chats?page=1"
        );
        setUsers(data.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const loadSingleChat = async (id) => {
    try {
      const { data } = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`
      );
      setChats(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUserChat = (id, name, index, lastUpdateAt) => {
    setTargetedUser({ name, index, lastUpdateAt });
    loadSingleChat(id);
    setIsChatShow(true);
  };

  if (loading) {
    return (
      <div className=" container">
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="2xl:container mx-auto">
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 h-screen md:overflow-y-hidden ">
        <aside
          className={`col-span-1 bg-[#212121]  h-screen overflow-y-auto hidden md:block`}
        >
          <Navbar setIsToggle={setIsToggle} isToggle={isToggle} />
          {isToggle ? (
            <Tabs />
          ) : (
            <UserList
              users={users}
              handleUserChat={handleUserChat}
              targetedUserIndex={targetedUser?.index}
            />
          )}
        </aside>

        <div
          className={`lg:col-span-2 md:block hidden md:col-span-1 bg-cover bg-center bg-no-repeat 
            `}
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <ChatsContainer chats={chats} targetedUser={targetedUser} />
        </div>

        {/* for mobile devices start*/}
        <aside
          className={`col-span-1 bg-[#212121]  h-screen overflow-y-auto
            ${isChatShow ? "hidden" : "block"}`}
        >
          <Navbar setIsToggle={setIsToggle} isToggle={isToggle} />
          {isToggle ? (
            <Tabs />
          ) : (
            <UserList
              users={users}
              handleUserChat={handleUserChat}
              targetedUserIndex={targetedUser?.index}
            />
          )}
        </aside>

        <div
          className={`lg:col-span-2 md:hidden  md:col-span-1 bg-cover bg-center bg-no-repeat 
            ${isChatShow ? "block" : " hidden"}
            `}
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <ChatsContainer
            setIsChatShow={setIsChatShow}
            chats={chats}
            targetedUser={targetedUser}
          />
        </div>

        {/* for mobile devices end */}
      </div>
    </main>
  );
};

export default Home;
