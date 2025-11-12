import React, { useRef, useState } from "react";
import "./Home.css";
import logo from "./spotifylogo.jpeg";
import homelogo from "./home.png";
import searchImg from "./search.ico";
import browse from "./browse.png";
import Data from "./Data.json";
import Cards from "../../Components/cards/Cards";
import Cardsa from "../../Components/cards/Cardsa";
import Cardsb from "../../Components/cards/Cardsb";
import { useNavigate } from "react-router-dom";
// Navigate

function Scroller(props) {
  // const scrollRef = useRef();
  // const [hovered, setHovered] = useState(false);

  // const scrollBy = (offset) => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  //   }
  // };

  return (
    <>
    <div className="flex-row-scroll   ">
        <div
        className="w-full overflow-x-auto custom-scrollbar whitespace-nowrap no-scrollbar"
        style={{ scrollbarWidth: "none" }}
        // onWheel={(e) => e.preventDefault()}
      >
        {props.id === "1" &&
          props.dat.map((song) => (
            <div key={song.k} className="inline-block align-top mx-2">
              <Cards
                linkurl={song.linkurl}
                name={song.name}
                artist={song.artist}
              />
            </div>
          ))}
        {props.id === "2" &&
          props.dat.map((song) => (
            <div key={song.k} className="inline-block align-top mx-2">
              <Cardsa
                linkurl={song.linkurl}
                name={song.name}
                artist={song.artist}
              />
            </div>
          ))}
        {props.id === "3" &&
          props.dat.map((song) => (
            <div key={song.k} className="inline-block align-top mx-2">
              <Cardsb
                linkurl={song.linkurl}
                name={song.name}
                artist={song.artist}
              />
            </div>
          ))}
      </div>
    </div>
    </>
    // <div
    //   className="w-full bg-transparent flex items-center group relative py-4"
    //   onMouseEnter={() => setHovered(true)}
    //   onMouseLeave={() => setHovered(false)}
    // >
      // <button
      //   className={`absolute left-4 z-10 bg-gray-700 text-white px-2 py-1 rounded transition-opacity duration-200 ${
      //     hovered ? "opacity-100" : "opacity-0 pointer-events-none"
      //   }`}
      //   onClick={() => scrollBy(-200)}
      //   tabIndex={-1}
      // >
      //   &lt;
      // </button>
//       <div
//         ref={scrollRef}
//         className="w-full overflow-x-auto custom-scrollbar whitespace-nowrap no-scrollbar"
//         style={{ scrollbarWidth: "none" }}
//         onWheel={(e) => e.preventDefault()}
//       >
//         {props.id === "1" &&
//           props.dat.map((song) => (
//             <div key={song.k} className="inline-block align-top mx-2">
//               <Cards
//                 linkurl={song.linkurl}
//                 name={song.name}
//                 artist={song.artist}
//               />
//             </div>
//           ))}
//         {props.id === "2" &&
//           props.dat.map((song) => (
//             <div key={song.k} className="inline-block align-top mx-2">
//               <Cardsa
//                 linkurl={song.linkurl}
//                 name={song.name}
//                 artist={song.artist}
//               />
//             </div>
//           ))}
//         {props.id === "3" &&
//           props.dat.map((song) => (
//             <div key={song.k} className="inline-block align-top mx-2">
//               <Cardsb
//                 linkurl={song.linkurl}
//                 name={song.name}
//                 artist={song.artist}
//               />
//             </div>
//           ))}
//       </div>
//       <button
//         className={`absolute right-4 z-10 bg-gray-700 text-white px-2 py-1 rounded transition-opacity duration-200 ${
//           hovered ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={() => scrollBy(200)}
//         tabIndex={-1}
//       >
//         &gt;
//       </button>
//     </div>
  );
}

function Home() {
  // Search state for Trending Songs
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();

  // Filter cards1 data (Trending Songs) based on search query
  const filteredCards1 = Data.cards1.filter(
    (song) =>
      song.name.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase())
  );
  const filteredCards2 = Data.cards2.filter(
    (song) =>
      song.name.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase())
  );
  const filteredCards3 = Data.cards3.filter(
    (song) =>
      song.name.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black w-screen h-screen flex flex-col text-white font-bold px-2">
      {/* Header */}
      <div className="w-full p-2 bg-black flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4 w-0 flex-grow">
          <img className="h-[35px] flex-shrink-0" alt="logo" src={logo} />
          <img
            className="h-[55px] flex-shrink-0"
            alt="homelogo"
            src={homelogo}
          />
          <div className="h-[45px] flex-1 min-w-0 max-w-[450px] rounded-[50px] bg-[#2a2a2a] items-center flex mx-auto">
            <img className="h-[25px] pl-2.5" src={searchImg} alt="search" />
            <input
              className="bg-transparent pr-2 pl-3 w-full h-full text-white font-normal border-none focus:outline-none focus:border-none"
              placeholder="Search Trending Songs or Artists"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="bg-[#c2c2c2] w-[1.5px] h-[35px]"></div>
            <img className="h-[25px] pl-2 pr-2.5" src={browse} alt="Browse" />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 whitespace-nowrap" onClick={()=>Navigate("/login")}>Sign up</button>
          <button className="rounded-[30px] bg-white text-black p-3 whitespace-nowrap" onClick={()=>Navigate("/login")}>
            Log in
          </button>
        </div>
      </div>
      {/* Main body: Sidebar + Content */}
      <div className="flex gap-2 flex-1 min-h-0">
        {/* Sidebar */}
        <div className="relative w-[27%] bg-[#121212] flex-shrink-0 rounded-[10px]">
          <div className="p-5 flex justify-between items-center">
            <div className="text-center">Your Library</div>
            <div className="text-[#ababab] text-[30px] font-normal">+</div>
          </div>
          <div className="absolute shadow-inset top-[20%] bottom-[35%] left-0 right-0 custom-scrollbar overflow-y-auto p-4">
            <div className="p-3 rounded-lg bg-[#222]">
              Create your first playlist
              <br />
              <span className="font-normal">It's easy, we'll help you</span>
              <br />
              <div className="pt-4 px-4">
                <button className="rounded-[30px] bg-white text-black p-2 whitespace-nowrap">
                  Create Playlist
                </button>
              </div>
            </div>
            <br />
            <div className="p-3 rounded-lg bg-[#222]">
              Let's find some podcasts to follow
              <br />
              <span className="font-normal">
                we'll keep you updated on new episodes
              </span>
              <br />
              <div className="pt-4 px-4">
                <button className="rounded-[30px] bg-white text-black p-2 whitespace-nowrap">
                  Create Playlist
                </button>
              </div>
            </div>
          </div>
          <div className="p-2 font-normal text-[#999] xl:mt-[500px] lg:mt-[400px]  md:mt-[280px]  sm:mt-[350px] ">
            <ul className="flex flex-wrap  xl:gap-4 lg:gap-2 md:gap-0 sm:gap-0
            ">
              <li>Legal</li>
              <li>Safety & Privacy Center</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>About Ads</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div className="xl:p-8 lg:p-4 md:p-2 sm:p-1">
            <div className="border-[#888] text-center border-[1px] h-[32px] w-[80px] p-1 rounded-[20px]">
              English
            </div>
          </div>
        </div>
        
        <div className="w-[73%] h-full overflow-y-auto bg-gradient-to-b from-[#031627] to-[#121212] rounded-[10px] custom-scrollbar">
          <div className="min-h-[1500px] flex flex-col space-y-12 py-10">
            
            <div className="px-10">
              <div className="flex justify-between items-center mb-4">
                <div className="text-[1.5rem] font-semibold">
                  Trending Songs
                </div>
              </div>
              <Scroller dat={filteredCards1} key="1" id="1" />
              <div className="mt-6"></div>
            </div>
            
            <div className="px-10">
              <div className="flex justify-between items-center mb-4">
                <div className="text-[1.5rem] font-semibold">
                  Popular Artist
                </div>
              </div>
              <Scroller dat={filteredCards2} key="2" id="2" />
              <div className="mt-6"></div>
            </div>
            {/* Popular Artist */}
            <div className="px-10">
              <div className="flex justify-between items-center mb-4">
                <div className="text-[1.5rem] font-semibold">
                  Featured Charts
                </div>
              </div>
              <Scroller dat={filteredCards3} key="3" id="3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
