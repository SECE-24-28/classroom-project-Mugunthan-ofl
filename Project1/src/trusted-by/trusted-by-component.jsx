import React from "react";
import { PositionExampleStyle } from "./trusted-by-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBuilding, faGraduationCap, faTrophy } from "@fortawesome/free-solid-svg-icons";

const TrustedbyComponent = () => {
  const data = [
    {
      icon: faUsers,
      color: "rgb(0, 197, 190)",
      title: "10K+",
      content: "Students",
      description: "Trained Successfully"
    },
    {
      icon: faBuilding,
      color: "rgb(0, 189, 235)",
      title: "500+",
      content: "Companies",
      description: "Trust Our Training"
    },
    {
      icon: faGraduationCap,
      color: "rgb(243, 176, 79)",
      title: "95%",
      content: "Success Rate",
      description: "In Placements"
    },
    {
      icon: faTrophy,
      color: "rgb(250, 63, 70)",
      title: "15+",
      content: "Years",
      description: "Of Excellence"
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>Trusted By</h1>
      <PositionExampleStyle>
      {data.map((item, index) => (
        <div key={index} className="box">
          <div className="box__content">
            <div className={`circular__parent${index + 1}`}>
              <div className="circle">
                <FontAwesomeIcon icon={item.icon} color={item.color} />
              </div>
            </div>
            <div className="value">{item.title}</div>
            <div className="name">{item.content}</div>
            {item.description && (
              <div className="description" style={{ color: item.color }}>
                {item.description}
              </div>
            )}
          </div>
          <div className={`box__color${index + 1}`}></div>
        </div>
      ))}
      </PositionExampleStyle>
    </div>
  );
};

export default TrustedbyComponent;