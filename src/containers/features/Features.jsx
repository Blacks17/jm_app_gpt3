import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrust instantly",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa neque quae tempore corporis, voluptatibus possimus?",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa neque quae tempore corporis, voluptatibus possimus?",
  },
  {
    title: "Message or an nothing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa neque quae tempore corporis, voluptatibus possimus?",
  },
  {
    title: "Really boy law country",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa neque quae tempore corporis, voluptatibus possimus?",
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
