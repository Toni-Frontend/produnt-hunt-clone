import React from "react";
import { StyledStorielist } from "../UI/StyledStorielist";

const StoriesList = ({storie}) => {
  const { title, subtitle, imagen, avatar } = storie;

  return (
    <StyledStorielist>
      <div className="container-storie">
        <h3>{title}</h3>
        <div className="container-user">
          <div className="container-img">
            <img src={avatar} />
          </div>
          <p>BY SARAH WRIGHT</p>
          <p>4 MIN READ</p>
        </div>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="preview-img-storie">
        <img src={imagen}/>
      </div>
    </StyledStorielist>
  );
};

export default StoriesList;
