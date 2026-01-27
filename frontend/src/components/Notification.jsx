import React from "react";

const notifications = {
  week: [
    {
      id: 1,
      username: "ayyan_only",
      name: "Ayyan ONLY ✨",
      avatar: "https://via.placeholder.com/40",
      text: "started following you.",
      time: "3d",
      action: "following",
    },
  ],
  month: [
    {
      id: 2,
      username: "muziiiibaloch",
      name: "M.",
      avatar: "https://via.placeholder.com/40",
      text: "started following you.",
      time: "Jan 08",
      action: "following",
    },
    {
      id: 3,
      username: "mashoodnaimat",
      name: "",
      avatar: "",
      text: "who you might know, is on Instagram.",
      time: "Jan 01",
      action: "follow",
    },
    {
      id: 4,
      username: "t7sultan",
      name: "SULTAN ❄️",
      avatar: "https://via.placeholder.com/40",
      text: "started following you.",
      time: "Jan 01",
      action: "follow_back",
    },
    {
      id: 5,
      username: "rashidzardari1",
      name: "RASHID ZARDARI",
      avatar: "https://via.placeholder.com/40",
      text: "started following you.",
      time: "Dec 29",
      action: "following",
    },
    {
      id: 6,
      username: "awais_shah11",
      name: "SyEd AwAiS ShAh 💕",
      avatar: "https://via.placeholder.com/40",
      text: "started following you.",
      time: "Dec 29",
      action: "follow_back",
    },
  ],
};

const ActionButton = ({ type }) => {
  if (type === "following") {
    return (
      <button className="px-4 py-1 text-sm bg-gray-800 text-white rounded-lg">
        Following
      </button>
    );
  }

  if (type === "follow_back") {
    return (
      <button className="px-4 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
        Follow Back
      </button>
    );
  }

  return (
    <button className="px-4 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
      Follow
    </button>
  );
};

const NotificationItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between gap-3 py-3">
      <div className="flex items-center gap-3">
        <img
          src={
            item.avatar ||
            "https://cdn-icons-png.flaticon.com/256/12225/12225935.png"
          }
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="text-sm text-white">
          <span className="font-semibold">{item.username}</span>{" "}
          {item.name && <span className="text-gray-300">({item.name})</span>}{" "}
          {item.text} <span className="text-gray-400">{item.time}</span>
        </div>
      </div>

      <ActionButton type={item.action} />
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="w-full max-w-md bg-black text-white rounded-xl shadow-xl h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button className="text-gray-400 text-2xl hover:text-white">
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-full px-4 pb-6">
          <h3 className="text-sm font-semibold mt-4 mb-2 text-gray-300">
            This week
          </h3>
          {notifications.week.map((item) => (
            <NotificationItem key={item.id} item={item} />
          ))}

          <div className="border-b border-gray-800 my-4" />

          <h3 className="text-sm font-semibold mb-2 text-gray-300">
            This month
          </h3>
          {notifications.month.map((item) => (
            <NotificationItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
