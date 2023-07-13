import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { BsFillStarFill } from 'react-icons/bs';
import ForumBar from './ForumBar';

const Forum = () => {
    return (
        <div>
            <h1 className='text-6xl font-bold text-center text-cyan-800 my-6'>Forum</h1>
            <div className='grid grid-rows-2 sm:mb-2 sm:grid-rows-none sm:grid-cols-3'>
                <div className='col-span-2 pl-6 pr-3'>
                    <div>
                        <h3 className='text-center  p-2 text-2xl font-bold text-cyan-800'>Search for post</h3>
                        <div className="flex justify-center items-center">
                            <form className='w-full relative '>
                                <div className='relative'>
                                    <div className='bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 p-1 rounded-full border-xl'>
                                        <input type='search' placeholder='Search Here' className='w-full rounded-full p-4 bg-slate-200 text-black' />
                                        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-cyan-300 rounded-full mx-2'>
                                            <FcSearch />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex pr-3 sm:pr-6 pl-3 col-span-2 sm:col-span-1 sm:w-full self-center justify-self-end'>
                    <div className='grid w-full'>
                        <h3 className='hidden sm:block text-center p-2 text-2xl font-bold text-cyan-800'>Liked posts</h3>
                        <button className="flex items-center self-center h-16 w-32 sm:w-full">
                            <div className='relative w-full h-full'>
                                <div className='h-full bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 p-1 rounded-full border-xl'>
                                    <div className='h-full w-full rounded-full p-4 bg-slate-200 text-black'>
                                        <div className='absolute sm:right-1 top-1/2 -translate-y-1/2 p-4 rounded-full mx-2'>
                                            <BsFillStarFill className='fill-yellow-300 h-10 w-10' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='col-span-3 sm:col-span-2 pl-6 pr-3'>
                    <ForumBar />
                </div>
                <div className=' hidden sm:block pr-6 pl-3'>
                    <ForumBar />
                </div>
            </div>
        </div>
    )
}

export default Forum;