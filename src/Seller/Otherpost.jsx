import React from "react";
import './Createpost.css';
import picture from "../assets/sell.png";
import img from '../assets/Tv.jpg';
import SearchBar from '../Componend/SearchBar';
import {motion} from 'framer-motion';

const Otherpost = ({ post = [
    { image: img,prices:13000 ,title: "LED Tv ", description: "2 Years old model tv with good condition" },{ image: img, prices:12000,title: "Smart Tv", description: "4 Year Old model Tv with good Condition" }
] }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {post.length === 0 ? (
          <div className="col-12">
            <div style={{ marginTop: 150 }}>
              <motion.img
                src={picture}
                alt="Picture"
                width={500}
                className="img-fluid d-block mx-auto"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <h2 className="text-center text-muted">Start Your Sales</h2>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="col-12" style={{ marginTop: 150 }}>
              <h1>My Post</h1>
              <div className="row">
                <div className="col-8">
                  <SearchBar />
                </div>
              </div>

              {/* Status Buttons */}
              <div className="status-buttons mt-3 d-flex  ">
                <button className="status-btn active">Active</button>
                <button className="status-btn sold-out">Sold Out</button>
                <button className="status-btn draft">Draft</button>
                <button className="status-btn delete">Delete</button>
              </div>

              {/* Posts */}
              <div className="row mt-5">
                {post.map((Post, index) => (
                  <div className="col-md-3" key={index}>
                    <div className="card h-100 shadow-sm">
                      <img src={Post.image} alt={Post.title} className="card-img-top" height={300} width={150} />
                      <div className="card-body">
                        <pre>₹ {Post.prices} </pre>
                        <h5>{Post.title}</h5>
                        <p>{Post.description || "No Description available"}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Otherpost;