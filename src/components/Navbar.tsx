import logo from '../../public/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="bg-white relative z-20">
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
        <GiHamburgerMenu className="md:hidden" />
    </div>
    <ul className="flex md:hidden flex-col space-y-4 text-slate-600 fixed top-16 left-0 right-0 z-10 bg-white shadow-lg w-70 py-6 mx-auto text-center rounded-md">
            <li className="text-gray-500 hover:text-black w-32 mx-auto"><a href="#">Home</a></li>
            <li className="text-gray-500 hover:text-black w-32 mx-auto"><a href="#">About</a></li>
            <li className="text-gray-500 hover:text-black w-32 mx-auto"><a href="#">Contact</a></li>
            <li className="text-gray-500 hover:text-black w-32 mx-auto"><a href="#">Blog</a></li>
            <li className="text-gray-500 hover:text-black w-32 mx-auto"><a href="#">Careers</a></li>
      </ul>
    </div>
  )
}

export default Navbar