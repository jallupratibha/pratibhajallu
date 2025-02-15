import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CaseStudy.css';  // Optional: Add styles if needed

const caseStudies = {
  mentorBridgeStudent: [
    "/assets/test.png",
    "/assets/test2.png",
    "/assets/test3.png",
    "/assets/test4.png",
    "/assets/test5.png",
    "/assets/test6.png",
    "/assets/test7.png",
    "/assets/test8.png",
    "/assets/test9.png",
    "/assets/test10.png",
    "/assets/test11.png",
    "/assets/test12.png",
    "/assets/test13.png",
    "/assets/test14.png",
    "/assets/test15.png",
    "/assets/test16.png",
    "/assets/test17.png",
    "/assets/test18.png",
    "/assets/test19.png",
    "/assets/test20.png",
    "/assets/test21.png",
    "/assets/test22.png",
    "/assets/test23.png",
    "/assets/test24.png",
    "/assets/test25.png",
    "/assets/test26.png",
    "/assets/test27.png",
    "/assets/test28.png",
    "/assets/test29.png",
    "/assets/test30.png",
    "/assets/test31.png",
    "/assets/test32.png",
    "/assets/test33.png"

  ],
  mentorBridgeMentor: [
    "/assets/test34.png",
    "/assets/test35.png",
    "/assets/test36.png",
    "/assets/test37.png",
    "/assets/test38.png",
    "/assets/test39.png",
    "/assets/test40.png",
    "/assets/test41.png",
    "/assets/test42.png",
    "/assets/test43.png",
    "/assets/test44.png",
    "/assets/test45.png",
    "/assets/test46.png",
    "/assets/test47.png",
    "/assets/test48.png",
    "/assets/test49.png",
    "/assets/test50.png",
    "/assets/test51.png",
    "/assets/test52.png",
    "/assets/test53.png",
    "/assets/test54.png",
    "/assets/test55.png",
    "/assets/test56.png",
    "/assets/test57.png",
    "/assets/test58.png",
    "/assets/test59.png",
    "/assets/test60.png"
  ],

  
  cabo: [
    "/assets/test61.png",
    "/assets/test62.png",
    "/assets/test63.png",
    "/assets/test64.png",
    "/assets/test65.png",
    "/assets/test66.png",
    "/assets/test67.png",
    "/assets/test68.png",
    "/assets/test69.png",
    "/assets/test70.png",
    "/assets/test71.png",
    "/assets/test72.png",
    "/assets/test73.png",
    "/assets/test74.png",
    "/assets/test75.png",
    "/assets/test76.png",
    "/assets/test77.png",
    "/assets/test78.png",
    "/assets/test79.png"
  ],

  nykaa: [
    "/assets/test80.png",
    "/assets/test81.png",
    "/assets/test82.png",
    "/assets/test83.png",
    "/assets/test84.png",
    "/assets/test85.png",
    "/assets/test86.png"



  ]



};

const CaseStudy = () => {
  const { id } = useParams();
  const images = caseStudies[id] || [];

  return (
    <div className="case-study-container">
      
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Case Study Part ${index + 1}`} className="case-study-image" />
      ))}
    </div>
  );
};

export default CaseStudy;
