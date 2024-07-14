import { useState } from "react";
import Tab from "./Tab/Tab";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Chats", content: "Noting Interesting in Chats..." },
    { label: "Media", content: "Noting Interesting in Media..." },
    { label: "Links", content: "Noting Interesting in Links..." },
    { label: "Files", content: "Noting Interesting in Files... " },
    { label: "Music", content: "Noting Interesting in Music..." },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full">
      <div className="flex space-x-4 border-b border-black">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>

      <div className="text-[#AAA] flex justify-center items-center h-[80vh]">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Tabs;
