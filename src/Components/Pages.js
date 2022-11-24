import React from "react";
import avatar from "../img/avatar.png";
import twitch from "../img/twitch.png";
import steam from "../img/steam.png";
import upcoming from "../img/upcoming.png";
import library from "../img/library.png";
import controller from "../img/controller.png";
import assassins from "../img/assassins.png";
import sackboy from "../img/sackboy.png";
import spiderman from "../img/spiderman.png";

const Pages = () => {
  return (
    <div className="w-full h-screen  bg-gradient-to-r from-[#65d5c9] to-[#6cdbeb] flex justify-center items-center relative ">

      <div className="w-40 h-40 bg-gradient-to-r from-[#ffffffb3] to-[#ffffff4d] rounded-[50%] absolute bottom-[170px] left-[30px] "></div>
      <div className="w-44 h-44 bg-gradient-to-r from-[#ffffffb3] to-[#ffffff4d] rounded-[50%] absolute top-[25px] right-[170px] "></div>


      <div className="w-10/12  rounded-[20px] flex bg-gradient-to-r from-[#ffffffb3] to-[#ffffff4d]  shadow-xl backdrop-blur-md bg-white/30 ">
        <div className="bg-gradient-to-r from-[#ffffffcc] to-[#ffffff80] w-1/3 rounded-[20px] p-4 ">
          <div className="text-center py-3">
            <img className="w-14 mx-auto" src={avatar} alt="" />
            <h4>Simo Edwin</h4>
            <p>Pro Member</p>
          </div>

          <div className="flex justify-center gap-2 py-4">
            <img className="" src={twitch} alt="" />
            <h3>Streams</h3>
          </div>
          <div className="flex justify-center gap-2 py-4">
            <img src={steam} alt="" />
            <h3>Streams</h3>
          </div>
          <div className="flex justify-center gap-2 py-4">
            <img src={upcoming} alt="" />
            <h3>Streams</h3>
          </div>
          <div className="flex justify-center gap-2 py-4">
            <img src={library} alt="" />
            <h3>Streams</h3>
          </div>
          <div className="flex justify-center items-center rounded-lg  bg-indigo-500 w-9/12 mx-auto p-4">
            <h3>Join pro for free games.</h3>
            <img className="w-18 h-16" src={controller} alt="" />
          </div>
        </div>
        <div className="w-full h-20 py-4 text-[#658ec6] ">
          <div className="ml-16 py-10">
            <h1 className=" text-3xl font-bold ">Active Games</h1>
            <div className="w-48 rounded-lg h-4 bg-gradient-to-r from-[#ffffffcc] to-[#ffffff80]"></div>
          </div>
          <div className="flex gap-10 bg-gradient-to-r from-[#ffffffcc] to-[#ffffff80] w-3/4 rounded-lg  justify-around items-center ml-16 py-4">
            <div>
              <img className="w-16" src={assassins} alt="" />
            </div>
            <div>
              <h2 className="sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl font-bold">
                Assassins Creed Valhalla
              </h2>
              <p>PS5 Version</p>
              <div className="w-full bg-[#ececec] rounded-md">
                <div className="w-4/6 h-4 rounded-md bg-gradient-to-r from-[#65dfc9] to-[#6cdbeb]"></div>
              </div>
            </div>
            <div className="sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl font-bold p-2">
              60%
            </div>
          </div>
          <div className="flex gap-10 bg-gradient-to-r from-[#ffffffcc] to-[#ffffff80] w-3/4 rounded-lg  justify-around items-center my-4 ml-16 py-4">
            <div>
              <img className="w-16" src={sackboy} alt="" />
            </div>
            <div>
              <h2 className="sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl font-bold">
                Assassins Creed Valhalla
              </h2>
              <p>PS5 Version</p>
              <div className="w-full bg-[#ececec] rounded-md">
                <div className="w-4/6 h-4 rounded-md bg-gradient-to-r from-[#65dfc9] to-[#6cdbeb]"></div>
              </div>
            </div>
            <div className="sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl font-bold p-2">
              60%
            </div>
          </div>
          <div className="flex gap-10 bg-gradient-to-r from-[#ffffffcc] to-[#ffffff80] w-3/4 rounded-lg  justify-around items-center ml-16 py-4">
            <div>
              <img className="w-16" src={spiderman} alt="" />
            </div>
            <div>
              <h2 className="sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl font-bold">
                Assassins Creed Valhalla
              </h2>
              <p>PS5 Version</p>
              <div className="w-full bg-[#ececec] rounded-md">
                <div className="w-4/6 h-4 rounded-md bg-gradient-to-r from-[#65dfc9] to-[#6cdbeb]"></div>
              </div>
            </div>
            <div className="sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl font-bold p-2">
              60%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
