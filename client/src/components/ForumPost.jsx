import React from 'react';
import { BiLike, BiComment } from 'react-icons/bi';
import ForumComment from './ForumComment';
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_COMMENT } from '../utils/queries';
import { useParams } from 'react-router-dom';

const ForumPost = () => {

    const { currentId } = useParams();
    console.log(currentId);

    const { loading, error, data } = useQuery(QUERY_SINGLE_COMMENT, {
        variables: { getCommentId: currentId }
    });
    console.log('Data:', data)
    const comments = data?.getComment || [];
    console.log('Comments:', comments);



    return (
        <div className='bg-slate-100'>
            <h1 className='text-6xl font-bold text-center text-cyan-800 pt-24 pb-16'>Forum</h1>
            <div className='w-full md:flex'>
                <div className='grid justify-items-center mb-5 md:mb-0 md:order-last md:justify-self-end md:mr-5'>
                    <div className='grid grid-rows-6 justify-items-center h-48 w-48 border-2 border-slate-600 bg-slate-400 rounded-sm'>
                        <div className='row-span-5 self-center h-32 w-32 border-2'>
                            Picture
                        </div>
                        <div className='self-top font-bold'>
                            Username
                        </div>
                    </div>

                </div>
                <div className='w-full'>
                    <div className='grid mx-5 border-2 border-slate-500 bg-slate-300 rounded-lg'>
                        <h3 className='mt-3 mx-3 font-bold'>Post Title</h3>
                        <p className='px-2 pb-3 font-medium'>
                            JavaScript is a lightweight, cross-platform, interpreted scripting language. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments.
                            In this article, we need to create a Random String Generator using Javascript that will generate a random set of strings & get displayed when the user clicks a button. Additionally, we can also take input for the length of the string from the user. On the client-side, it will render those strings once generated using the Document Object Model (DOM) concept.
                            Approach: For generating Random Strings in Javascript, we can use in-built methods that will actually generate the strings and can manipulate the Document Object Model (DOM) accordingly. We will use the Math library to access the random() function that will help to generate the random index and multiple with the length of the string ie., it will append the character from the string or character set as it is passed.                         </p>
                        <div className='grid flex-none inline pr-1 sm:pr-2 items-center justify-self-end'>
                            <div className='flex flex-wrap ml-3 mb-1'>
                                <div className='flex flex-wrap items-center mr-3'>
                                    <BiLike className='fill-green-600' />
                                    <p className='text-green-600'>200</p>
                                </div>
                                <div className='flex flex-wrap items-center '>
                                    <BiComment className='fill-yellow-500' />
                                    <p className='text-yellow-500'>5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-5 mx-5'>
                <ForumComment />
                <ForumComment />
                <ForumComment />
                <ForumComment />
                <ForumComment />
                <ForumComment />
            </div>
        </div>
    )
}

export default ForumPost;