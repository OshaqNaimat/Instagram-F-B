import moment from 'moment'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go'

const CommentPopUp = ({user_id}) => {
  return (
    <div>
      <div className="bg-black/50 min-h-screen flex justify-center items-center w-full fixed top-0 z-100">
       <div className="grid grid-cols-2 bg-white w-[60%] h-[80vh] rounded-md shadow-xl">
                 {/* reels */}
                 <div className="h-[469px] overflow-hidden object-contain">
                    <img width='100%' height='100%' className='col-span-1 object-contain ' src="https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?cs=srgb&dl=pexels-camcasey-1157255.jpg&fm=jpg" alt="" />
                 </div>
                 {/* comments */}
                {/* main user */}
                <div className="col-span-1">

                <div className="flex">
                       <div className="flex p-2 gap-2 items-center">
                             
                               <img
                                className="w-[35px] h-[35px] cursor-pointer"
                                src="https://cdn-icons-png.freepik.com/256/10796/10796945.png?semt=ais_white_label"
                                alt=""
                              />

                              <div className="">
                                <div className="flex gap-2 items-center justify-center">
                                  <h4 className="font-semibold  text-[14px] cursor-pointer">
                                    username
                                  </h4>
                                  <GoDotFill size={6} />
                                  <p className="text-gray-500">Time</p>
                                </div>
                  
                                <p className="text-sm">Followers</p>
                              </div>
                <BsThreeDots size={25} className="cursor-pointer" />
                            </div>
                </div>
            </div>
       </div>
      </div>
    </div>
  )
}

export default CommentPopUp
