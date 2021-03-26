import React from "react";
import { StyledBoxHunter } from '../UI/StyledBoxHunter';

const BoxHunter = () => {
  return (
    <StyledBoxHunter>
      <h6>HUNTER</h6>
      <div className="users-hunter">
        <div className="img-hunter">
          <img src="/static/avatars/14.png" alt="avatar" />
        </div>
        <div className="user-role">
          <h4>Annika Rofman</h4>
          <p>QA Engineer</p>
        </div>
      </div>
      <h6>4 MAKERS</h6>
      <div className="users-hunter hunter-two">
        <div className="img-hunter">
          <img src="/static/avatars/3.png" alt="avatar" />
        </div>
        <div className="user-role">
          <h4>Alessa Chanel</h4>
          <p>Frontend Engineer</p>
        </div>
        <div className="img-hunter">
          <img src="/static/avatars/6.png" alt="avatar" />
        </div>
        <div className="user-role">
          <h4>Darwin Emmett</h4>
          <p>Fullstack Developer</p>
        </div>
        <div className="img-hunter">
          <img src="/static/avatars/4.png" alt="avatar" />
        </div>
        <div className="user-role">
          <h4>Bradley Wilder</h4>
          <p>Backend Developer</p>
        </div>
      </div>
    </StyledBoxHunter>
  );
};

export default BoxHunter;
