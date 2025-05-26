import { useState } from 'react';
import logo from '../../public/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menu, setMenu] = useState('hidden');
  const OpenMobileMenu = () => {
    setMenu((prevValue)=>{
      if(prevValue == 'hidden'){
        return 'flex';
      }else{
        return 'hidden'
      }
    })
    }

  return (
    <div className="bg-white z-20 sticky top-0">
      <div className="flex flex-row justify-between container mx-auto py-5 px-6 xl:px-0">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <ul className="hidden md:flex row md:space-x-5 lg:space-x-10">
            <li className="text-gray-500 hover:border-b-4 border-green-300 hover:text-black"><a href="#">Home</a></li>
            <li className="text-gray-500 hover:border-b-4 border-green-300 hover:text-black"><a href="#">About</a></li>
            <li className="text-gray-500 hover:border-b-4 border-green-300 hover:text-black"><a href="#">Contact</a></li>
            <li className="text-gray-500 hover:border-b-4 border-green-300 hover:text-black"><a href="#">Blog</a></li>
            <li className="text-gray-500 hover:border-b-4 border-green-300 hover:text-black"><a href="#">Careers</a></li>
        </ul>
        <button className="hidden md:block gradient opacity-80 py-2 px-7 rounded-full text-white font-bold hover:opacity-90 active:scale-99 cursor-pointer shadow">Request Invite</button>
        
        {
            menu=='hidden' ?
              <GiHamburgerMenu className="md:hidden size-6" onClick={OpenMobileMenu} /> :
              <IoMdClose className="md:hidden size-6" onClick={OpenMobileMenu} />
        }
        
        
    </div>
   <div className={` ${menu} transition duration-150 hambergur md:hidden flex-col space-y-4 fixed top-15 left-0 right-0 z-0 w-full py-32`}>
     <ul className="flex md:hidden transition duration-150 flex-col space-y-4 text-slate-600 fixed top-16 left-0 right-0 z-10 bg-white shadow-lg w-70 py-6 mx-auto text-center rounded-md">
            <li className="text-gray-500 hover:text-black w-32 mx-auto"><a href="#">Home</a></li>
            <li className="text-gray-500 hover:text-black w-32 mx-auto"><a href="#">About</a></li>
            <li className="text-gray-500 hover:text-black w-32 mx-auto"><a href="#">Contact</a></li>
            <li className="text-gray-500 hover:text-black w-32 mx-auto"><a href="#">Blog</a></li>
            <li className="text-gray-500 hover:text-black w-32 mx-auto"><a href="#">Careers</a></li>
      </ul>
   </div>
    </div>
  )
}

export default Navbar