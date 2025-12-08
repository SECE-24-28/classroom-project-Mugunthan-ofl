import React from "react";
import "./App.css";
// import FourOFourComponent from "./404-component/404-component";
// import PositionExampleComponent from "./position-example/position-example-component";
// import FlexBoxComponent from "./flex-box/flex-box-component";
// import HelloWorldComponent from "./hello-world/hello-world-component";
// import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
//import PlacementTrainingComponent from "./plcement_training/placement-training-component";
//import PositionComponent from "./positioning/position-component";
// import TrustedbyComponent from "./trusted-by/trusted-by-components";
// import { GetInTouchStyle } from "./get-in-touch/get-in-touch-style";
// import GetInTouchStyleComponent from "./get-in-touch/get-in-touch-component";
//import ImpactAGlanceComponent from "./impact-a-glance/impact-a-glance-component";
// import OurPromiseComponent from "./our-promise/our-promise-component";
//import FlexWrapComponent from "./flex-wrap/flex-wrap-component";
// import PropsPractice from "./props-property/props-practice";
import UseStateComponent from "./usestate-1st/use-state-component";
function App() {
  return (
    <div style={{ padding: '20px' }}>
      {/* <HelloWorldComponent /> */}
      {/* <FlexBoxComponent /> */}
      {/* <LeadersTomorrowComponent /> */}
      {/* <SymbolOfExcellenceComponent/> */}
      {/* <PositionComponent /> */}
      {/* <TrustedbyComponent /> */}
      {/* <GetInTouchStyleComponent/> */}
      {/* <ImpactAGlanceComponent/> */}
      {/* <OurPromiseComponent/> */}
      {/* <FlexWrapComponent/> */}
      {/* <PositionExampleComponent/> */}
      {/* <PropsPractice name="Sai" mobile="14234423243" />
      <PropsPractice name="Ragu" mobile="232332231231" /> */}
      {/* <FourOFourComponent /> */}
      <UseStateComponent />
    </div>
  );
}

export default App;


// import "./App.css";

// import { Routes, Route } from "react-router-dom";
// import HelloWorldComponent from "./hello-world/hello-world-component";
// import OurPromisesComponent from "./our-promises/our-promises";
// import TrustedbyComponent from "./trusted-by/trusted-by-component";
// import PropsPractice from "./props-practice/props-practice";
// function App() {
//   const arr1 = [
//     { name: "sai", mobile: "1234" },
//     { name: "ragu", mobile: "5678" },
//   ];
//   return (
//     <div>
//       <Routes>
//         {/* <Route path="/eshwar" element={<HelloWorldComponent />} />
//         <Route path="/our-promise" element={<OurPromisesComponent />} />
//         <Route path="/" element={<TrustedbyComponent />} /> */}
//         <Route path="/leetcode" element={<HelloWorldComponent />}>
//           <Route path="/" index element={<PropsPractice />} />
//           <Route path="/trusted-by" element={<TrustedbyComponent />} />
//           <Route path="/our-promise" element={<OurPromisesComponent />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;