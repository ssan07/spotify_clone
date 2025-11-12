// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function Cards(props) {
//   const navigat=useNavigate();

//   return (
//     <div className='border-none w-[30vh] h-[50vh] bg-blue-150 rounded-lg '>
//       <div className="out">

//       <img className='imagetop h-[210px]' loading="lazy" src={props.linkurl} alt='img' />

//         <div className='cardbody'>
//           &#128205;{props.locn}<br/>
//             &#128339; {props.days}<br/>
//             &#128176;{props.price}<br/><br/>

//             <button className='w-full justify-center bg-white bg-opacity-25' onClick={()=>navigat('/booknow')}>Book Now</button>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Cards

import React from "react";
import { useNavigate } from "react-router-dom";
// import test from "../../Pages/Home/home.png";

function Cards(props) {
  const navigate = useNavigate();

  return (
    <div className="p-2">

    <div className="border-none w-[30vh] bg-transparent rounded-lg shadow-lg flex flex-col overflow-hidden hover:scale-105 hover:bg-[#333] transition transform">
      <div className="p-2 overflow-hidden">
        <div className="flex-1 flex flex-col">
          <img
            className="imagetop w-[150px] w-full object-cover rounded-lg"
            loading="lazy"
            src={props.linkurl}
            // src={test}
            alt="img"
          />
          <div className="flex-1 cardbody text-center text-[15px] text-white bg-opacity-80 p-3 text-lg font-semibold">
            <div className="mb-1 w-full justify-center flex flex-wrap break-words">
              {props.name}
            </div>
            <div className="mb-1 w-full text-[#888] justify-center whitespace-normal break-words">{props.artist}</div>


          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
