import { FaGithub } from 'react-icons/fa';
const Footer = () => {


  const year = new Date().getFullYear(); 
    return (
         <div className='contact bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 z-0 '>
                 
                <a href="https://github.com/Cdrcar/Wizdumb">
                    <button
                        type="button"
                        className="  inline-block rounded-full px-4 py-1.5 text-l text-white bg-zinc-800 hover:bg-zinc-400">
                        <FaGithub />
                    </button>
                </a>
                
            <p className='hover:text-sm'><a href="#">Back to top</a></p>
            <p className="text-black font-bold">
               &copy; WizDumb 👨‍💻 {year}
            </p> 

        </div>
  
           
)};
       
   
export default Footer;