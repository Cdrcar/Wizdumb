import {useState } from 'react';
import {FcSearch} from 'react-icons/fc';
import { QUERY_ALL_COMMENTS } from '../utils/queries';
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const SearchForum = () => {

const { loading, error, data } = useQuery(QUERY_ALL_COMMENTS);
  const posts = data?.getComments || [];
  console.log(data);

const [currentSearch, setCurrentSearch] = useState([])

const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase()
    e.preventDefault();
    if(searchQuery ==''){
        setCurrentSearch([])
        return false
    }
    setCurrentSearch(
        posts
          .filter((post) => post.name.toLowerCase().includes(searchQuery))
          .slice(0, 5)
          .map((post) => post.comment)

      );
    };

    return (
        <div className='mx-6'>
        <h3 className='text-center p-2 text-lg font-bold'>Search for a post</h3>
        <div className="flex justify-center items-center">
        <form className='w-full relative  '>
            <div className='relative '>
                <div className='bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 p-1 rounded-full border-xl '>
                <input type='search' placeholder='Search Here' className='w-full rounded-full bg-slate-200 p-4 text-black border-xl shadow-md shadow-slate-400 hover:shadow-none hover:border-2 hover:border-white' />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-cyan-300 rounded-full mx-2' onChange={(e) => handleSearch(e)} >
                    <FcSearch />
                </button>
            </div>
            </div>
            {currentSearch.length > 0 && (
                <div className='absolute top-20 p-4 bg-blue-100 text-black w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 hover:pointer-cursor'>
                    {currentSearch.map((search) => (
                          <Link
                          key={search}
                          to={`comment/${search}`}
                          className="hover:cursor-pointer"
                        >
                          <span key={search}>{search}</span>
                        </Link>
                    ))}
                </div>
            )}
        </form>
        </div>
        </div>
    )
  
}
;

export default SearchForum;