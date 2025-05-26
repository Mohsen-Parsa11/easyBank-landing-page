import intro_desktop_mobile from "../../public/bg-intro-desktop.svg";
import image_mockups from "../../public/image-mockups.png";
import icon_online from "../../public/icon-online.svg";
import budgeting from "../../public/icon-budgeting.svg";
import onboarding from "../../public/icon-onboarding.svg";
import api from "../../public/icon-api.svg";
import currency from "../../public/image-currency.jpg";
import restaurant from "../../public/image-restaurant.jpg";
import plane from "../../public/image-plane.jpg";
import confetti from "../../public/image-confetti.jpg";

function Main() {
  return (
    <div className="relative overflow-hidden max-w-[1700px] mx-auto">
      <img src={intro_desktop_mobile} className="absolute -top-20 -right-8 md:-top-36 md:-right-32 md:w-xl lg:w-2xl" alt="intro_desktop_mobile" />
      <img src={image_mockups} alt="image_mockups" className="absolute w-70 md:w-md lg:w-lg -top-24 md:-top-28 right-4 md:-right-20 z-10" />
      {/* hero section */}
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row overflow-x-hidden relative  container mx-auto pt-48 md:pt-0">
          <div className="space-y-7 w-full md:h-96 py-20 text-center md:text-left md:pl-14 xl:pl-0">
            <h3 className="text-2xl lg:text-5xl text-slate-700 md:w-80 lg:w-md">
              Next generation digital banking
            </h3>
            <p className="text-gray-400 mx-auto md:mx-0 text-sm md:text-base w-65 md:w-80 lg:w-sm">
              Take your financial life online. your easy bank account will be a
              non-stop-shop for spending, saving, budgeting, investing and much
              more.
            </p>
            <button className="gradient opacity-80 py-2 px-4 rounded-full text-white font-bold hover:opacity-90 active:scale-99 cursor-pointer shadow">
              Request Invite
            </button>
          </div>
        </div>
      </div>

      {/* why choose easy bank sectio */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto space-y-5">
          <h3 className="text-2xl md:text-4xl text-slate-700 text-center lg:text-left lg:pl-12 xl:pl-0">Why choose EasyBank?</h3>
          <p className="text-gray-400 w-65 md:w-xl mx-auto lg:mx-0 text-center lg:text-left lg:pl-12 xl:pl-0">
            We leverage open banking to turn your bank account into your
            financial hub. control your financial like never before
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:space-y-10 lg:space-y-0 px-6 md:px-0 pt-10">
            {/* first card */}
            <div className="space-y-4 text-center md:text-left mx-auto xl:mx-0">
              <img src={icon_online} alt="icon_online" className="size-14 mx-auto md:mx-0" />
              <h4 className="text-xl md:text-2xl text-slate-700">Online Banking</h4>
              <p className="text-gray-400 w-60 mx-auto md:mx-0">
                Our modern web and mobile aplications allow you to keep track of
                finances wherever you are in the world
              </p>
            </div>
            {/* second card */}
            <div className="space-y-4 text-center md:text-left mx-auto xl:mx-0">
              <img src={budgeting} alt="icon_online" className="size-14 mx-auto md:mx-0" />
              <h4 className="text-xl md:text-2xl text-slate-700">Online Banking</h4>
              <p className="text-gray-400 w-60 mx-auto md:mx-0">
                Our modern web and mobile aplications allow you to keep track of
                finances wherever you are in the world
              </p>
            </div>
            {/* third card */}
            <div className="space-y-4 text-center md:text-left mx-auto xl:mx-0">
              <img src={onboarding} alt="icon_online" className="size-14 mx-auto md:mx-0" />
              <h4 className="text-xl md:text-2xl text-slate-700">Online Banking</h4>
              <p className="text-gray-400 w-60 mx-auto md:mx-0">
                Our modern web and mobile aplications allow you to keep track of
                finances wherever you are in the world
              </p>
            </div>
            {/* fourth card */}
            <div className="space-y-4 text-center md:text-left mx-auto xl:mx-0">
              <img src={api} alt="icon_online" className="size-14 mx-auto md:mx-0" />
              <h4 className="text-xl md:text-2xl text-slate-700">Online Banking</h4>
              <p className="text-gray-400 w-60 mx-auto md:mx-0">
                Our modern web and mobile aplications allow you to keep track of
                finances wherever you are in the world
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* latest article */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto space-y-5">
          <h3 className="text-2xl md:text-4xl text-slate-700 text-center md:pb-6 xl:pb-0 xl:text-left">Latest Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 md:px-0">
            {/* first card */}
            <div className="space-y-3 rounded-md bg-white md:w-65 xl:w-full mx-auto xl:mx-0">
              <img src={currency} alt="" className="rounded-t-md w-full h-45" />
              <div className="px-5 py-5 flex flex-col">
                <span className="text-xs text-gray-400">
                  By calaie robinson
                </span>
                <a href="#" className="text-xl text-gray-600 w-60 hover:text-emerald-500">
                  Recive money in any currency with no fees
                </a>
                <p className="text-gray-400 w-55 xl:w-full text-sm">
                  the work is getting smaller and we're becomming more moble. so
                  why should you be forced to only recive money in a single...
                </p>
              </div>
            </div>
            {/* second card */}
            <div className="space-y-3 rounded-md bg-white w-65 xl:w-full mx-auto xl:mx-0">
              <img src={restaurant} alt="" className="rounded-t-md w-full h-45" />
              <div className="px-5 py-5 flex flex-col">
                <span className="text-xs text-gray-400">
                  By calaie robinson
                </span>
                <a href="#" className="text-xl text-gray-600 w-60 hover:text-emerald-500">
                  Recive money in any currency with no fees
                </a>
                <p className="text-gray-400 w-55 xl:w-full text-sm">
                  the work is getting smaller and we're becomming more moble. so
                  why should you be forced to only recive money in a single...
                </p>
              </div>
            </div>
            {/* third card */}
            <div className="space-y-3 rounded-md bg-white w-65 xl:w-full mx-auto xl:mx-0">
              <img src={plane} alt="" className="rounded-t-md w-full h-45" />
              <div className="px-5 py-5 flex flex-col">
                <span className="text-xs text-gray-400">
                  By calaie robinson
                </span>
                <a href="#" className="text-xl text-gray-600 w-60 hover:text-emerald-500">
                  Recive money in any currency with no fees
                </a>
                <p className="text-gray-400 w-55 xl:w-full text-sm">
                  the work is getting smaller and we're becomming more moble. so
                  why should you be forced to only recive money in a single...
                </p>
              </div>
            </div>
            {/* fourth card */}
            <div className="space-y-3 rounded-md bg-white w-65 xl:w-full mx-auto xl:mx-0">
              <img src={confetti} alt="" className="rounded-t-md w-full h-45" />
              <div className="px-5 py-5 flex flex-col">
                <span className="text-xs text-gray-400">
                  By calaie robinson
                </span>
                <a href="#" className="text-xl text-gray-600 w-60 hover:text-emerald-500">
                  Recive money in any currency with no fees
                </a>
                <p className="text-gray-400 w-55 xl:w-full text-sm">
                  the work is getting smaller and we're becomming more moble. so
                  why should you be forced to only recive money in a single...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
