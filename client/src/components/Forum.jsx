import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { BsFillStarFill, BsFillPlusCircleFill } from 'react-icons/bs';
import ForumBar from './ForumBar';
import SearchForum from './searchForum';
import { QUERY_ALL_COMMENTS } from '../utils/queries';
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Forum = () => {
  const navigate = useNavigate();
    const changePage = (e) => {
        e.preventDefault();
        navigate("/forumwrite")
    }
    const { loading, error, data } = useQuery(QUERY_ALL_COMMENTS);
    console.log('Data:', data)
    const comments = data?.getComments || [];
    console.log('Comments:', comments);
  return (
    <>
 <div className='grid'>
                <h1 className='text-6xl font-bold text-center text-cyan-800 pt-24 pb-16'>Forum</h1>
                <div className='flex pr-6 pl-3 self-center justify-self-end relative z-10'>
                    <div className='grid w-full'>
                        <h3 className='hidden sm:block text-center p-2 text-2xl font-bold text-cyan-800'>Write Post</h3>
                        <button className="flex items-center self-center h-16 w-32" onClick={changePage}>
                            <div className='relative w-full h-full'>
                                <div className='h-full bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 p-1 rounded-full border-xl shadow-md shadow-slate-400 hover:shadow-none hover:border-2 hover:border-slate-100'>
                                    <div className='flex h-full w-full rounded-full p-4 bg-slate-200 text-black'>
                                        <div className='absolute top-1/2 -translate-y-1/2 p-4 rounded-full mx-2'>
                                            <BsFillPlusCircleFill className='fill-sky-400 h-10 w-10' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
      <div>
        <div className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-3 mb-20">
          <div className="col-span-2 px-6 sm:pl-6 sm:pr-3">
            <h3 className="text-center pb-2 md:p-2 text-2xl font-bold text-cyan-800">
              Search for post
            </h3>
          <SearchForum />
          </div>
          <div className="flex pr-6 pl-3 col-span-2 sm:col-span-1 sm:w-full justify-self-end relative z-10">
            <div className="grid w-full pt-10 sm:pt-0">
              <h3 className="hidden sm:block text-center p-2 text-2xl font-bold text-cyan-800">
                Liked posts
              </h3>
              <button className="flex items-center h-16 w-32 sm:w-full ">
                <div className="relative w-full h-full">
                  <div className="h-full bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 p-1 rounded-full border-xl shadow-md shadow-slate-400 hover:shadow-none hover:border-2 hover:border-slate-100">
                    <div className="flex h-full w-full rounded-full p-4 bg-slate-200 text-black">
                      <p className="hidden lg:block text-slate-400 self-start">
                        View All Liked Posts
                      </p>
                      <div className="absolute sm:right-1 top-1/2 -translate-y-1/2 p-4 rounded-full mx-2">
                        <BsFillStarFill className="fill-yellow-300 h-10 w-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mb-16">
        <div className="col-span-3 sm:col-span-2 mx-6 sm:ml-16 sm:mr-16">
          {/* {comments.map((comment) => (
            <ForumBar
              title={comment.title}
              like={comment.like}
              commentn={comment.commentn}
              user={comment.user}
              postId={comment._id}
              key={comment._id}
            />
          ))} */}
        </div>
        <div className=" hidden sm:block pr-6 pl-3"></div>
      </div>
    </>
  );
};
export default Forum;