import React, { useEffect, useState, useRef } from "react";
import { NOTIFY } from "../../constants/Config";

function Banner(props) {
  return (
    <div className="container-custom notify">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="container__wrap-notify">
              <div className="container__wrap-notify-text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
