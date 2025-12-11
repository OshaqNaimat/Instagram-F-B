const Cpeoples = ({ data }) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer my-3 hover:bg-gray-200 p-2 rounded-md transition">
      <img
        className="w-[60px] h-[60px] rounded-full"
        src="https://cdn-icons-png.flaticon.com/256/12225/12225935.png"
        alt=""
      />

      {/* Username hides automatically on small screen (your Instagram behavior) */}
      <div className="hidden lg:block">
        <h4 className="font-semibold">{data.username}</h4>
        <p className="text-sm text-gray-500">{data.message}</p>
      </div>
    </div>
  );
};

export default Cpeoples;
