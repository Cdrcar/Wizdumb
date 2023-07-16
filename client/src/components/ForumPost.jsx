import React from 'react';
import { BiLike, BiComment } from 'react-icons/bi';
import ForumComment from './ForumComment';
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_COMMENT } from '../utils/queries';
import { useParams } from 'react-router-dom';
import store from '../store'

const ForumPost = () => {

    const { currentId } = useParams();
    console.log(currentId);

    const { loading, error, data } = useQuery(QUERY_SINGLE_COMMENT, {
        variables: { getCommentId: currentId }
    });
    
    let comments = { comment: "No Post", title: "No Title", commentn: [], like: [], user: { username: "No User"}, _id: "No Id"};
    let comment2 = [];
    if (!loading) {
        comments = data?.getComment || [];
        comment2 = comments.commentn;
      }
      console.log(comment2)
      console.log(comments)

    // const likePost = (e) => {

    // }


    return (
        <div className='bg-slate-100 pb-10'>
            <h1 className='text-6xl font-bold text-center text-cyan-800 pt-24 pb-16'>Forum</h1>
            <div className='w-full md:flex'>
                <div className='grid justify-items-center mb-5 md:mb-0 md:order-last md:justify-self-end md:mr-5'>
                    <div className='grid grid-rows-6 justify-items-center h-48 w-48 border-2 border-slate-600 bg-slate-400 rounded-sm'>
                        <div className='row-span-5 self-center h-32 w-32 border-2'>
                            Picture
                        </div>
                        <div className='self-top font-bold'>
                            {comments.user.username}
                        </div>
                    </div>

                </div>
                <div className='w-full'>
                    <div className='grid mx-5 border-2 border-slate-500 bg-slate-300 rounded-lg'>
                        <h3 className='mt-3 mx-3 font-bold'>{comments.title}</h3>
                        <p className='px-2 pb-3 font-medium'>{comments.comment}</p>
                        <div className='grid flex-none inline pr-1 sm:pr-2 items-center justify-self-end'>
                            <div className='flex flex-wrap ml-3 mb-1'>
                                <div className='flex flex-wrap items-center mr-3'>
                                    <BiLike className='fill-green-600' />
                                    <p className='text-green-600'>{comments.commentn.length}</p>
                                </div>
                                <div className='flex flex-wrap items-center '>
                                    <BiComment className='fill-yellow-500' />
                                    <p className='text-yellow-500'>{comments.like.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-5 mx-5'>
            {comment2.map((reply) => (
            <ForumComment
              title={reply.title}
              like={reply.reply}
              key={reply.id}
            />
          ))}
            </div>
        </div>
    )
}

export default ForumPost;