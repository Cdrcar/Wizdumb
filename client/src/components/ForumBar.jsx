import React from 'react';
import { BiLike, BiComment } from 'react-icons/bi';

const ForumBar = (props) => {
    return (
        <div className='bg-slate-100 rounded-lg h-14 border-4 border-slate-300 sm:mb-2'>
            <div className='grid grid-cols-8 h-full'>
                <div className='col-span-7 h-full flex items-center text-lg'>
                    <p className='font-bold'>Post Title</p>
                </div>
                <div className='grid grid-rows-2 justify-self-end w-14'>
                    <div className='flex flex-wrap items-center'>
                        <BiLike  className='fill-green-600'/>
                        <p className='text-green-600'>20</p>
                    </div>
                    <div className='flex flex-wrap items-center '>
                        <BiComment className='fill-yellow-500' />
                        <p className='text-yellow-500'>5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForumBar;