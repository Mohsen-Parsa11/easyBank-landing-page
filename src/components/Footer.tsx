import logo from '../../public/logo.svg'
import { ImFacebook2 } from "react-icons/im";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-sky-950">
        <div className="container mx-auto py-10 flex flex-col md:flex-row justify-between text-center md:text-left space-y-6 md:space-y-0 px-6 xl:px-0">
            <div className="flex flex-col md:flex-row gap-5 md:gap-12 lg:gap-20 text-gray-300">
                <div className="flex flex-col space-y-10 mx-auto md:mx-0">
                    <img src={logo} alt="" />
                    <div className='flex space-x-5'>
                        <ImFacebook2  className="size-6 text-white hover:text-emerald-500 cursor-pointer" />
                        <FaYoutubeSquare  className="size-6 text-white rounded-full hover:text-emerald-500 cursor-pointer" />
                        <FaTwitter  className="size-6 text-white hover:text-emerald-500 cursor-pointer" />
                        <FaPinterest  className="size-6 text-white hover:text-emerald-500 cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col space-y-4 mx-auto md:mx-0">
                    <a href="#" className="hover:text-emerald-500" >About Us</a>
                    <a href="#" className="hover:text-emerald-500" >Contact</a>
                    <a href="#" className="hover:text-emerald-500" >Blog</a>
                </div>
                <div className="flex flex-col space-y-4">
                    <a href="#" className="hover:text-emerald-500" >Careers</a> 
                    <a href="#" className="hover:text-emerald-500" >Support</a> 
                    <a href="#" className="hover:text-emerald-500" >Privacy Policy</a>
                </div>
            </div>
            <div className="flex flex-col space-y-8">
                <button className="gradient opacity-80 py-2 px-4 w-40 mx-auto rounded-full text-white font-bold hover:opacity-90 active:scale-99 cursor-pointer shadow">
              Request Invite
            </button>
            <p className="text-gray-400">@EasyBank. All rights resevered</p>
            </div>
        </div>
    </div>
  )
}

export default Footer