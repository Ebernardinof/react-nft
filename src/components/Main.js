import React, { useState, useEffect } from "react";
import EbinList from "./EbinList";
import "./Main.css";

import weth from "../assets/weth.png";
import instagramLogo from "../assets/owner/instagram.png";
import otherLogo from "../assets/owner/more.png";
import twitterLogo from "../assets/owner/twitter.png";

const Main = ({ selectedEbin, ebinListData }) => {
  const [activeEbin, setActiveEbin] = useState(ebinListData[0]);

  useEffect(() => {
    setActiveEbin(ebinListData[selectedEbin]);
  }, [ebinListData, selectedEbin]);
  console.log(ebinListData, selectedEbin, activeEbin);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="ebinHighlight">
          <div className="ebinContainer">
            <img
              className="selectedEbin"
              src={activeEbin.image_original_url}
              alt="image_original_url"
            />
          </div>
        </div>
        <div className="ebinDetails">
          <div className="title">{activeEbin.name}</div>
          <span className="itemNumber">#{activeEbin.token_id}</span>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activeEbin.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activeEbin.owner.address}</div>
                <div className="ownerHandle">@ebin</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} />
              </div>
              <div className="ownerLink">
                <img src={otherLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
