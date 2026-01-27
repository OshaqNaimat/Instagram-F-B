import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Real I'd Abdul Mussawar",
    username: "real_abdul_mussawar_id",
    avatar: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "® ABDUL _REHMAN™",
    username: "rx._troller",
    avatar: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    name: "N⭕OR",
    username: "noor_mehar110",
    avatar: "https://via.placeholder.com/40",
  },
];

export default function NewMessageModal({ isOpen, onClose }) {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  if (!isOpen) return null;

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 w-96 rounded-lg shadow-lg p-5 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-white text-lg font-semibold mb-4">New message</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 mb-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Suggested Users */}
        <div className="max-h-60 overflow-y-auto mb-4">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-800 ${
                selectedUser?.id === user.id ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <img
                src={user.avatar}
                alt={user.username}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex flex-col">
                <span className="text-white">{user.name}</span>
                <span className="text-gray-400 text-sm">{user.username}</span>
              </div>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <p className="text-gray-500 text-center">No users found</p>
          )}
        </div>

        {/* Chat Button */}
        <button
          disabled={!selectedUser}
          className={`w-full py-2 rounded-md text-white font-semibold ${
            selectedUser
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Chat
        </button>
      </div>
    </div>
  );
}
