import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { BsFillStarFill } from 'react-icons/bs';
import ForumBar from './ForumBar';

const ForumLikes = () => {
    return (
        <div>
            <h1 className='text-6xl font-bold text-center text-cyan-800 my-6 pt-16 pb-10'>Forum</h1>
            <div className='grid w-full mb-20'>
                <div className='w-full pl-6 pr-3'>
                    <div>
                        <div className='flex justify-center pb-3'>
                            <h3 className='text-center  p-2 text-2xl font-bold text-cyan-800'>Search for liked post</h3>
                            <BsFillStarFill className='fill-yellow-300 h-10 w-10 self-center' />
                        </div>
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
            </div>
            <div className='flex flex-wrap justify-around mx-6 sm:mx-10 mb-16'>
                {/* classes 'w-full md:w-2/5' needed in each ForumBar in the ForumLikes page to make them fit the screen correctly */}
                <ForumBar className='w-full md:w-2/5' />
                <ForumBar className='w-full md:w-2/5' />
                <ForumBar className='w-full md:w-2/5' />
                <ForumBar className='w-full md:w-2/5' />
                <ForumBar className='w-full md:w-2/5' />
                <ForumBar className='w-full md:w-2/5' />
                <ForumBar className='w-full md:w-2/5' />
                <ForumBar className='w-full md:w-2/5' />
                <ForumBar className='w-full md:w-2/5' />
                <ForumBar className='w-full md:w-2/5' />
            </div>
        </div>
    )
}

export default ForumLikes;