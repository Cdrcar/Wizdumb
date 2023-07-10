import {useState} from 'react';
import {FcSearch} from 'react-icons/fc';
import courses from '../constants';

const SearchPage = () => {

const [currentSearch, setCurrentSearch] = useState([])

const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase()
    e.preventDefault();
    if(searchQuery ==''){
        setCurrentSearch([])
        return false
    }
    setCurrentSearch(
        courses
          .filter((course) => course.name.toLowerCase().includes(searchQuery))
          .slice(0, 8)
          .map((course) => course.name)
      );
    };

    return (
        <div className='mx-6'>
        <h3 className='text-start p-2 text-lg font-bold'>Search for a course below</h3>
        <form className='w-[500px] relative  '>
            <div className='relative'>
                <div className='bg-gradient-to-r from-green-200 via-green-300 to-blue-500 p-1 rounded-full border-xl'>
                <input type='search' placeholder='Search Here' className='w-full rounded-full p-4 bg-slate-700 text-white' onChange={(e) => handleSearch(e)} />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-cyan-300 rounded-full mx-2'>
                    <FcSearch />
                </button>
            </div>
            </div>
            {currentSearch.length > 0 && (
                <div className='absolute top-20 p-4 bg-blue-100 text-black w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 hover:pointer-cursor'>
                    {currentSearch.map((search) => (
                        <span key={search}>{search}</span>
                    ))}
                </div>
            )}
        </form>
        </div>
    )
  
}
;

export default SearchPage;