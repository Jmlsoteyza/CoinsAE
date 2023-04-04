import React, { useState, useEffect } from "react";
import ServiceCircle from "../images/Service circle.png";
import ServiceImage from "../images/Service Image.png";
import SecureLogo from "../images/secure-storage.svg";
import LowcostLogo from "../images/service-lowcost.svg";
import ProtectedLogo from "../images/service-protected.svg";
import MoneyLogo from "../images/service-money.svg";

const Service = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <section id="Service" className="service-container">
        {isLoading ? (
          <div className="cssload-container">
            <div className="cssload-loader">
              <div className="cssload-inner cssload-one"></div>
              <div className="cssload-inner cssload-two"></div>
              <div className="cssload-inner cssload-three"></div>
            </div>
          </div>
        ) : (
          <section className="Service-container">
            <div className="service-text">
              <h1>What We Offer!</h1>
            </div>
            <div className="service-images_description">
              <div className="service-images">
                <img
                  className="service-img-absolute coin-img"
                  src={ServiceImage}
                  alt="service"
                />
                <img
                  className="service-img-absolute img-circle"
                  src={ServiceCircle}
                  alt="service"
                />
              </div>
              <div className="service-description_container">
                <div className="service-description_position">
                  <div className="service-description_innercontainer">
                    <div className="service-circle-style">
                      <img
                        src={SecureLogo}
                        className="logothis"
                        alt="service"
                      />
                    </div>
                    <div className="text-block">
                      <h1>Secure Storage</h1>
                      <p>
                        Our crypto.AE will assures you that your wallets will be
                        secure. You can be confident that your financial
                        information and assets will be protected from potential
                        threats.
                      </p>
                    </div>
                  </div>
                  <div className="service-description_innercontainer">
                    <div className="service-circle-style">
                      <img
                        src={LowcostLogo}
                        className="logothis"
                        alt="service"
                      />
                    </div>
                    <div className="text-block">
                      <h1>Low cost</h1>
                      <p>
                        Our crypto.AE offers low-cost services for buying and
                        selling cryptocurrencies. You can save money on
                        transaction fees and enjoy competitive rates for your
                        trades.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-description_position">
                  <div className="service-description_innercontainer">
                    <div className="service-circle-style">
                      <img
                        src={ProtectedLogo}
                        className="logothis"
                        alt="service"
                      />
                    </div>
                    <div className="text-block">
                      <h1>Protected by insurance</h1>
                      <p>
                        Our crypto.AE website is protected by insurance, giving
                        you added peace of mind when using our platform to buy
                        and sell cryptocurrencies.
                      </p>
                    </div>
                  </div>
                  <div className="service-description_innercontainer">
                    <div className="service-circle-style">
                      <img src={MoneyLogo} className="logothis" alt="service" />
                    </div>
                    <div className="text-block">
                      <h1>Money Transfer</h1>
                      <p>
                        Our crypto website allows you to easily transfer money
                        to other users on our platform. With just a few clicks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Service;
