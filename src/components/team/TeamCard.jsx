// import React from "react"
// import { team } from "../../dummydata"
// import { useHistory } from "react-router-dom"

// const TeamCard = () => {
//   const history = useHistory();
//   const handleKnowMoreClick = () => {
//     history.push("/download");
//   }
//   return (
//     <>
//       {team.map((val) => (
//         <div className='items shadow'>
//           <div className='img'>
//             <img src={val.cover} alt='' />
//             <div className='overlay'>
//               <i className='fab fa-facebook-f icon'></i>
//               <i className='fab fa-twitter icon'></i>
//               <i className='fab fa-instagram icon'></i>
//               <i className='fab fa-tiktok icon'></i>
//             </div>
//           </div>
//           <div className='details'>
//             <h2>{val.name}</h2>
//             <p>{val.work}</p>
//             <button id="download_id" onClick={handleKnowMoreClick}>Click to Know More</button>
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }

// export default TeamCard


import React from "react";
import { team } from "../../dummydata";
import { useHistory } from "react-router-dom";

const TeamCard = () => {
  const history = useHistory();

  const handleKnowMoreClick = (name) => {
    // Pass the category name in state
    history.push("/download", { categoryName: name });
  };

  return (
    <>
      {team.map((val, index) => (
        <div key={index} className="items shadow">
          <div className="img">
            <img src={val.cover} alt={val.name} />
            <div className="overlay">
              {/* <i className="fab fa-facebook-f icon"></i> */}
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-tiktok icon"></i>
            </div>
          </div>
          <div className="details">
            <h2>{val.name}</h2>
            <p>{val.work}</p>
            <button
              id="download_id"
              onClick={() => handleKnowMoreClick(val.name)}
            >
              Click to Know More
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;

