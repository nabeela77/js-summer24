// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SideBar = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleStepChange = (newStep) => {
//     setCurrentStep(newStep);
//   };

//   return (
//     <div
//       className="sidebar  p-4 m-4 bg-white rounded-lg shadow-md"
//       style={{
//         backgroundImage:
//           "multi-step-form/src/assets/images/bg-sidebar-desktop.svg", // Replace with your image URL
//       }}
//     >
//       <ul className="space-y-4">
//         <li>
//           <Link
//             to="step1"
//             type="button"
//             className={`py-2 px-4 mb-2 rounded-md cursor-pointer border transition-colors duration-200 ease-in-out ${
//               currentStep === 1
//                 ? "bg-green-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => handleStepChange(1)}
//           >
//             Step 1
//           </Link>
//         </li>

//         <li>
//           <Link
//             to="step2"
//             type="button"
//             className={`py-2 px-4 mb-2 rounded-md cursor-pointer border transition-colors duration-200 ease-in-out ${
//               currentStep === 2
//                 ? "bg-green-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => handleStepChange(2)}
//           >
//             Step 2
//           </Link>
//         </li>

//         <li>
//           <Link
//             to="step3"
//             type="button"
//             className={`py-2 px-4 mb-2 rounded-md cursor-pointer border transition-colors duration-200 ease-in-out ${
//               currentStep === 3
//                 ? "bg-green-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => handleStepChange(3)}
//           >
//             Step 3
//           </Link>
//         </li>

//         <li>
//           <Link
//             to="step4"
//             type="button"
//             className={`py-2 px-4 mb-2 rounded-md cursor-pointer border transition-colors duration-200 ease-in-out ${
//               currentStep === 4
//                 ? "bg-green-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => handleStepChange(4)}
//           >
//             Step 4
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SideBar;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (newStep) => {
    setCurrentStep(newStep);
  };

  return (
    <div
      className="sidebar w-full text-white p-6 min-h-screen"
      style={{
        backgroundImage: "url('/src/assets/images/bg-sidebar-desktop.svg')",
      }}
    >
      {/* Sidebar Content */}
      <ul className="space-y-4">
        <li className="px-2 py-1">
          <Link
            to="step1"
            type="button"
            className={`py-2 px-4 mb-2 rounded-md cursor-pointer border transition-colors duration-200 ease-in-out ${
              currentStep === 1
                ? "bg-opacity text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleStepChange(1)}
          >
            <span className="mr-2 rounded-full">1</span>
            Step 1
          </Link>
        </li>

        <li className="px-2 py-1">
          <Link
            to="step2"
            type="button"
            className={`py-2 px-4 mb-2 rounded-md cursor-pointer border transition-colors duration-200 ease-in-out ${
              currentStep === 2
                ? "bg-opacity text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleStepChange(2)}
          >
            <span className="mr-2 rounded-full">2</span>
            Step 2
          </Link>
        </li>

        <li className="px-2 py-1">
          <Link
            to="step3"
            type="button"
            className={`py-2 px-4 mb-2 rounded-md cursor-pointer border transition-colors duration-200 ease-in-out ${
              currentStep === 3
                ? "bg-opacity text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleStepChange(3)}
          >
            <span className="mr-2 rounded-full">2</span>
            Step 3
          </Link>
        </li>

        <li className="px-2 py-1">
          <Link
            to="step4"
            type="button"
            className={`py-2 px-4 mb-2 rounded-md cursor-pointer border transition-colors duration-200 ease-in-out ${
              currentStep === 4
                ? "bg-opacity text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleStepChange(4)}
          >
            <span className="mr-2 rounded-full">2</span>
            Step 4
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
