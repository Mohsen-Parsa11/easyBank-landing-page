import logo from '../../public/logo.svg'

function Navbar() {
  return (
    <div className="bg-white relative z-20">
      <div className="hidden md:flex flex-row justify-between container mx-auto py-7 px-6 xl:px-0">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <ul className="flex row md:space-x-5 lg:space-x-10">
            <li className="text-gray-500 hover:border-b-4 border-green-300 hover:text-black"><a href="#">Home</a></li>
            <li className="text-gray-500 hover:border-b-4 border-green-300 hover:text-black"><a href="#">About</a></li>
            <li className="text-gray-500 hover:border-b-4 border-green-300 hover:text-black"><a href="#">Contact</a></li>
            <li className="text-gray-500 hover:border-b-4 border-green-300 hover:text-black"><a href="#">Blog</a></li>
            <li className="text-gray-500 hover:border-b-4 border-green-300 hover:text-black"><a href="#">Careers</a></li>
        </ul>
        <button className="gradient opacity-80 py-2 px-7 rounded-full text-white font-bold hover:opacity-90 active:scale-99 cursor-pointer shadow">Request Invite</button>
    </div>
    </div>
  )
}

export default Navbar