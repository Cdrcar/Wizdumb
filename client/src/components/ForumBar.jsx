import React, { useState } from "react";
import { BiLike, BiComment } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

const ForumBar = (props) => {

  // handleClick forwards the user to the post which they click, using the _id of the post as the params for each post
  const navigate = useNavigate();
  const handleClick = () => {
    const postId = props.postId;
    navigate(`${postId}`);
  };

  return (
    <div
      className={`bg-white ${props.className} rounded-lg h-16 mb-8 shadow-md shadow-slate-400 hover:shadow-none hover:border-2 hover:border-slate-100`}
      onClick={handleClick}
    >
      <div className="h-full flex rounded-lg border-2 border-slate-300">
        <div className="h-full shrink overflow-hidden flex items-center text-lg pl-2">
          <p className="font-bold truncate">{props.title}</p>
        </div>
        <div className="justify-self-end inline pr-1 sm:pr-2 items-center grid">
          <div className="flex flex-wrap items-center">
            <BiLike className="fill-green-600" />
            <p className="text-green-600">{props.like.length}</p>
          </div>
          <div className="flex flex-wrap items-center ">
            <BiComment className="fill-yellow-500" />
            <p className="text-yellow-500">{props.commentn.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumBar;
