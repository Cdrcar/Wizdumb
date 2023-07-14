import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from '../utils/auth';
import { CREATE_COMMENT } from '../utils/mutations';
import { useMutation } from "@apollo/client";

const ForumWrite = () => {
    const navigate = useNavigate();
    const [postState, setPostState] = useState({
        comment: "",
        title: "",
        user: "",
    });

    const [createComment, { error: commentError, data: commentResponse }] = useMutation(CREATE_COMMENT);

    const handleCommentChange = async (e) => {
        const { name, value } = e.target;
        const username = AuthService.getProfile()
        console.log(username.data._id);
        setPostState({ ...postState, [name]: value, user: username.data._id, createdAt: "20", updatedAt: "Date.now()" });
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        console.log('in')
        try {
            const { data } = await createComment({
                variables: { ...postState },
            });
            console.log(data)
            console.log('Submitted');
            navigate("/forum");
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div className="bg-slate-100">
            <h1 className='text-6xl font-bold text-center text-cyan-800 pt-24 pb-16'>Forum</h1>
            <div className='w-full'>
                <form onSubmit={handleCommentSubmit} className='grid mx-5 border-2 border-slate-500 bg-slate-300 rounded-lg p-10'>
                    <label htmlFor="title" className="font-bold">Post Title:</label>
                    <input type="text" id="title" name="title" className="w-4/6" value={postState.title} onChange={handleCommentChange}></input>
                    <label htmlFor="comment" className="font-bold">Post Description</label>
                    <textarea type="text" id="comment" name="comment" className="h-64" value={postState.comment} onChange={handleCommentChange}></textarea>
                    <div className='flex pr-6 pl-3 self-center justify-self-end relative z-10'>
                        <div className='grid w-full pt-5'>
                            <button className="flex items-center self-center h-16 w-32">
                                <div className='relative w-full h-full'>
                                    <div className='h-full bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 p-1 rounded-full border-xl shadow-md shadow-slate-400 hover:shadow-none hover:border-2 hover:border-slate-300'>
                                        <div className='flex h-full w-full rounded-full p-4 bg-slate-200 text-black'>
                                            <h3 className='text-center text-md font-bold text-cyan-800 w-full'>Submit</h3>
                                            <div className='absolute top-1/2 -translate-y-1/2 p-4 rounded-full mx-2'>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default ForumWrite;