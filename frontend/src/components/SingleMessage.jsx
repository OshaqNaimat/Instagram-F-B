import React from "react";

const SingleMessage = ({ message, sender_id, receiver_id }) => {
  return (
    <>
      <div className="px-3 py-2 max-w-1/3 w-max break-all bg-blue-400 rounded-[30px] ms-auto  my-1 text-white font-semibold">
        {message}
      </div>
    </>
  );
};

export default SingleMessage;
