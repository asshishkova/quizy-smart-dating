import "./achievements.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Achievement from "./Achievement/Achievement";

export default function Achievements({ achievements, fetcAchievements, userId, userEmail }) {

  const navigate = useNavigate();
  if (!userEmail) {
    navigate("/login");
  } else if (!userId) {
    navigate("/profile");
  }

  console.log('----------');
  console.log('userId', userId);
  console.log('----------');


  //temp: we should load globaly
  useEffect(() => {
    fetcAchievements(userId);
    // if (!achievements.length)
  }, [fetcAchievements, userId]);

  const categories = Object.keys(achievements);
  if (Object.keys(achievements).length > 0) {
    return (
      <div className="achievements-container">
        <Achievement
               title={categories[0]}
               score={achievements[categories[0]]}
         />
        <Achievement
              title={categories[1]}
              score={achievements[categories[1]]}
        />
        </div>
    );
  } else {
    return (
      <div>hi</div>
    );
  }
}
// import "./achievements.css";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Achievement from "./Achievement/Achievement";

// export default function Achievements({ achievements, fetcAchievements, userId, userEmail }) {

//   const navigate = useNavigate();
//   if (!userEmail) {
//     navigate("/login");
//   } else if (!userId) {
//     navigate("/profile");
//   }


//   //temp: we should load globaly
//   useEffect(() => {
//     fetcAchievements(userId);
//     // if (!achievements.length)
//   }, [fetcAchievements, userId]);

//   const categories = Object.keys(achievements);
//   if (categories.length > 0) {
//     return (
//       <div>
//         <Achievement
//                title={categories[0]}
//                score={achievements[categories[0]]}
//          />
//       <Achievement
//             title={categories[1]}
//             score={achievements[categories[1]]}
//       />
//       </div>
//     );
//   } else {
//     return (
//       <div>hi</div>
//     );
//   }
// }


// import "./achievements.css";
// import { useEffect } from "react";
// import Achievement from "./Achievement/Achievement";

// export default function Achievements({ achievements, fetcAchievements }) {
//   //temp: we should load globaly
//   useEffect(() => {
//     if (!achievements.length) fetcAchievements(1);
//   }, []);

//   return (
//     <div className="achievements-container">
//       {Object.keys(achievements).map((achievement) => {
//         const isCatagory = Array.isArray(achievements[achievement]);
//         if (isCatagory) {
//           return (
//             <Achievement
//               title={achievement}
//               score={achievements[achievement]}
//             />
//           );
//         }
//       })}
//     </div>
//   );
// }
