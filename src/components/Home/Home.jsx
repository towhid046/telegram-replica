import bannerBg from "../../assets/images/chat-background.png";
import bannerBgLight from "../../assets/images/light-background.jpeg";
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
  const [theme, setTheme] = useState(false);

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
      <div className="flex justify-center items-center h-screen">
        <span className="loading-spinner loading loading-lg text-[#8774E1]"></span>
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
          className={`col-span-1 ${
            theme ? "bg-white text-gray-800" : "bg-[#212121] "
          } h-screen overflow-y-auto
            ${isChatShow ? "hidden" : "block"}`}
        >
          <Navbar
            setIsToggle={setIsToggle}
            isToggle={isToggle}
            setTheme={setTheme}
            theme={theme}
          />
          {isToggle ? (
            <Tabs />
          ) : (
            <UserList
              users={users}
              handleUserChat={handleUserChat}
              targetedUserIndex={targetedUser?.index}
              theme={theme}
            />
          )}
        </aside>

        <div
          className={`lg:col-span-2 md:hidden  md:col-span-1 bg-cover bg-center bg-no-repeat 
            ${isChatShow ? "block" : " hidden"}
            `}
          style={{
            backgroundImage: `url(${theme ? bannerBgLight : bannerBg})`,
          }}
        >
          <ChatsContainer
            setIsChatShow={setIsChatShow}
            chats={chats}
            targetedUser={targetedUser}
            theme={theme}
          />
        </div>

        {/* for mobile devices end */}
      </div>
    </main>
  );
};

export default Home;
