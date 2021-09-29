import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import apiCaller from "../../util/apiCaller";
import { LoadingHome } from "../../components/Loading/Loading";

function showLocation(locations, number) {
  var result = [];
  for (let i = 0; i < number; i++) {
    result.push(<li className="contact__detail-text-item">{locations[i]}</li>);
  }
  return result;
}

function ContactPage(props) {
  const [locations, setLocation] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    apiCaller("contact", "GET", null).then(({ data }) => {
      setLocation(data);
    });
  }, []);
  if (locations.length > 0) {
    return (
      <div className="container-custom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="contact__wrap">
                <div className="contact__detail">
                  <div className="contact__detail-title">
                    WHO ARE THE NIKE MASTER TRAINERS?
                  </div>
                  <img
                    src="https://static.nike.com/a/images/w_1920,c_limit/404dd596-30ff-4884-9722-ac65c8284a54/who-are-the-nike-master-trainers-nike-help.jpg"
                    alt=""
                    className="contact__detail-img"
                  />
                  <div className="contact__detail-text">
                    Nike Master Trainers work hard to earn the title. They
                    represent the pinnacle of every training discipline, from
                    high-intensity training to yoga—and they’re leading a charge
                    to transform lives through holistic fitness. We sought them
                    out in cities around the world—and together we created the
                    workouts in the Nike Training Club App, where their advice
                    and guidance helps athletes hone their routine and reach
                    their goals. Here's a list of our Nike Master Trainers
                    around the globe:
                  </div>
                  <div className="contact__detail-text">NORTH AMERICA</div>
                  <ul className="contact__detail-text">
                    {showLocation(locations, 24)}
                  </ul>
                  <div className="contact__detail-text">EUROPE</div>
                  <ul className="contact__detail-text">
                    {showLocation(locations, 17)}
                  </ul>
                  <div className="contact__detail-text">GREATER CHINA</div>
                  <ul className="contact__detail-text">
                    {showLocation(locations, 12)}
                  </ul>
                  <div className="contact__detail-text">
                    ASIA PACIFIC AND LATIN AMERICA
                  </div>
                  <ul className="contact__detail-text">
                    {showLocation(locations, 8)}
                  </ul>
                </div>
                <div className="contact__phone">
                  <div className="contact__phone-text">CONTACT US</div>
                  <div className="contact__phone-text">
                    Due to winter weather conditions, some orders may be
                    delayed. You can see your order status and any updates to
                    your estimated delivery date at nike.com/orders. Thank you
                    for your patience.
                  </div>
                  <div className="contact__phone-img">
                    <img
                      src="https://www.nike.com/help/static/phone.png"
                      alt=""
                      className="contact__phone-img-"
                    />
                  </div>
                  <div className="contact__phone-text">NRC &amp; NTC</div>
                  <div className="contact__phone-text">
                    1-800-379-6453 8 am - 5 pm PT Mon - Fri
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <LoadingHome />;
  }
}

export default ContactPage;
