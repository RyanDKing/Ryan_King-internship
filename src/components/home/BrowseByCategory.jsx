import React from "react";
import { Link } from "react-router-dom";

const BrowseByCategory = () => {
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <div
              data-aos="fade-right"
              data-aos-duration="450"
              data-aos-delay="300"
            >
              <Link to="/explore" className="icon-box style-2 rounded">
                <i className="fa fa-image"></i>
                <span>Art</span>
              </Link>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <div
              data-aos="fade-right"
              data-aos-duration="450"
              data-aos-delay="700"
            >
              <Link to="/explore" className="icon-box style-2 rounded">
                <i className="fa fa-music"></i>
                <span>Music</span>
              </Link>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <div
              data-aos="fade-right"
              data-aos-duration="450"
              data-aos-delay="1100"
            >
              <Link to="/explore" className="icon-box style-2 rounded">
                <i className="fa fa-search"></i>
                <span>Domain Names</span>
              </Link>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <div
              data-aos="fade-right"
              data-aos-duration="450"
              data-aos-delay="1500"
            >
              <Link to="/explore" className="icon-box style-2 rounded">
                <i className="fa fa-globe"></i>
                <span>Virtual Worlds</span>
              </Link>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <div
              data-aos="fade-right"
              data-aos-duration="450"
              data-aos-delay="1800"
            >
              <Link to="/explore" className="icon-box style-2 rounded">
                <i className="fa fa-vcard"></i>
                <span>Trading Cards</span>
              </Link>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <div
              data-aos="fade-right"
              data-aos-duration="450"
              data-aos-delay="2200"
            >
              <Link to="/explore" className="icon-box style-2 rounded">
                <i className="fa fa-th"></i>
                <span>Collectibles</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
