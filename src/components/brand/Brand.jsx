import React from "react";
import "./brand.css";

import { google, slack, atlassinan, shopify, dropbox } from "./import";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding ">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassinan} alt="atlassinan" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  );
};

export default Brand;