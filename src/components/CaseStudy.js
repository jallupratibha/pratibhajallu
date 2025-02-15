import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CaseStudy.css';  // Optional: Add styles if needed

// Correct the image paths using process.env.PUBLIC_URL
const caseStudies = {
  mentorBridgeStudent: [
    `${process.env.PUBLIC_URL}/assets/test.png`,
    `${process.env.PUBLIC_URL}/assets/test2.png`,
    `${process.env.PUBLIC_URL}/assets/test3.png`,
    `${process.env.PUBLIC_URL}/assets/test4.png`,
    `${process.env.PUBLIC_URL}/assets/test5.png`,
    `${process.env.PUBLIC_URL}/assets/test6.png`,
    `${process.env.PUBLIC_URL}/assets/test7.png`,
    `${process.env.PUBLIC_URL}/assets/test8.png`,
    `${process.env.PUBLIC_URL}/assets/test9.png`,
    `${process.env.PUBLIC_URL}/assets/test10.png`,
    `${process.env.PUBLIC_URL}/assets/test11.png`,
    `${process.env.PUBLIC_URL}/assets/test12.png`,
    `${process.env.PUBLIC_URL}/assets/test13.png`,
    `${process.env.PUBLIC_URL}/assets/test14.png`,
    `${process.env.PUBLIC_URL}/assets/test15.png`,
    `${process.env.PUBLIC_URL}/assets/test16.png`,
    `${process.env.PUBLIC_URL}/assets/test17.png`,
    `${process.env.PUBLIC_URL}/assets/test18.png`,
    `${process.env.PUBLIC_URL}/assets/test19.png`,
    `${process.env.PUBLIC_URL}/assets/test20.png`,
    `${process.env.PUBLIC_URL}/assets/test21.png`,
    `${process.env.PUBLIC_URL}/assets/test22.png`,
    `${process.env.PUBLIC_URL}/assets/test23.png`,
    `${process.env.PUBLIC_URL}/assets/test24.png`,
    `${process.env.PUBLIC_URL}/assets/test25.png`,
    `${process.env.PUBLIC_URL}/assets/test26.png`,
    `${process.env.PUBLIC_URL}/assets/test27.png`,
    `${process.env.PUBLIC_URL}/assets/test28.png`,
    `${process.env.PUBLIC_URL}/assets/test29.png`,
    `${process.env.PUBLIC_URL}/assets/test30.png`,
    `${process.env.PUBLIC_URL}/assets/test31.png`,
    `${process.env.PUBLIC_URL}/assets/test32.png`,
    `${process.env.PUBLIC_URL}/assets/test33.png`
  ],
  mentorBridgeMentor: [
    `${process.env.PUBLIC_URL}/assets/test34.png`,
    `${process.env.PUBLIC_URL}/assets/test35.png`,
    `${process.env.PUBLIC_URL}/assets/test36.png`,
    `${process.env.PUBLIC_URL}/assets/test37.png`,
    `${process.env.PUBLIC_URL}/assets/test38.png`,
    `${process.env.PUBLIC_URL}/assets/test39.png`,
    `${process.env.PUBLIC_URL}/assets/test40.png`,
    `${process.env.PUBLIC_URL}/assets/test41.png`,
    `${process.env.PUBLIC_URL}/assets/test42.png`,
    `${process.env.PUBLIC_URL}/assets/test43.png`,
    `${process.env.PUBLIC_URL}/assets/test44.png`,
    `${process.env.PUBLIC_URL}/assets/test45.png`,
    `${process.env.PUBLIC_URL}/assets/test46.png`,
    `${process.env.PUBLIC_URL}/assets/test47.png`,
    `${process.env.PUBLIC_URL}/assets/test48.png`,
    `${process.env.PUBLIC_URL}/assets/test49.png`,
    `${process.env.PUBLIC_URL}/assets/test50.png`,
    `${process.env.PUBLIC_URL}/assets/test51.png`,
    `${process.env.PUBLIC_URL}/assets/test52.png`,
    `${process.env.PUBLIC_URL}/assets/test53.png`,
    `${process.env.PUBLIC_URL}/assets/test54.png`,
    `${process.env.PUBLIC_URL}/assets/test55.png`,
    `${process.env.PUBLIC_URL}/assets/test56.png`,
    `${process.env.PUBLIC_URL}/assets/test57.png`,
    `${process.env.PUBLIC_URL}/assets/test58.png`,
    `${process.env.PUBLIC_URL}/assets/test59.png`,
    `${process.env.PUBLIC_URL}/assets/test60.png`
  ],
  cabo: [
    `${process.env.PUBLIC_URL}/assets/test61.png`,
    `${process.env.PUBLIC_URL}/assets/test62.png`,
    `${process.env.PUBLIC_URL}/assets/test63.png`,
    `${process.env.PUBLIC_URL}/assets/test64.png`,
    `${process.env.PUBLIC_URL}/assets/test65.png`,
    `${process.env.PUBLIC_URL}/assets/test66.png`,
    `${process.env.PUBLIC_URL}/assets/test67.png`,
    `${process.env.PUBLIC_URL}/assets/test68.png`,
    `${process.env.PUBLIC_URL}/assets/test69.png`,
    `${process.env.PUBLIC_URL}/assets/test70.png`,
    `${process.env.PUBLIC_URL}/assets/test71.png`,
    `${process.env.PUBLIC_URL}/assets/test72.png`,
    `${process.env.PUBLIC_URL}/assets/test73.png`,
    `${process.env.PUBLIC_URL}/assets/test74.png`,
    `${process.env.PUBLIC_URL}/assets/test75.png`,
    `${process.env.PUBLIC_URL}/assets/test76.png`,
    `${process.env.PUBLIC_URL}/assets/test77.png`,
    `${process.env.PUBLIC_URL}/assets/test78.png`,
    `${process.env.PUBLIC_URL}/assets/test79.png`
  ],
  nykaa: [
    `${process.env.PUBLIC_URL}/assets/test80.png`,
    `${process.env.PUBLIC_URL}/assets/test81.png`,
    `${process.env.PUBLIC_URL}/assets/test82.png`,
    `${process.env.PUBLIC_URL}/assets/test83.png`,
    `${process.env.PUBLIC_URL}/assets/test84.png`,
    `${process.env.PUBLIC_URL}/assets/test85.png`,
    `${process.env.PUBLIC_URL}/assets/test86.png`
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
