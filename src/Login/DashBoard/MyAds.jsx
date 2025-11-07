import React from "react";
import image from '../../assets/No ADs.webp';
import './Categories.css';

const AdsPage = ({ ads = [
  //  { image:image,title:"Car",description:'bnbbbbbf',}
] }) => {
 

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 title">
          <h1 className="mb-5 text-center">My ADs</h1>

          {/* Conditional Rendering */}
          {ads.length === 0 ? (
            <>
              <img
                src={image}
                alt="No Ads"
                width={300}
                className="img-fluid d-block mx-auto ADImage "
              />
              <h2 className="text-center text-muted">No Ads Available</h2>
            </>
          ) : (
            <div className="container my-5">
              <h2 className="text-center mb-4">Latest Ads</h2>
              <div className="row g-4">
                {ads.map((ad, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card h-100 shadow-sm">
                      <img
                        src={ad.image || "/path/to/default.jpg"}
                        className="card-img-top"
                        alt={ad.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{ad.title}</h5>
                        <p className="card-text text-muted">
                          {ad.description || "No description available"}
                        </p>
                        <button className="btn btn-primary w-100">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdsPage;
