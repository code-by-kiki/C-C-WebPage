import React, { useState } from "react";
import { motion } from "framer-motion";
import pic from '../../assets/edit.png';

export default function EditProfile() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [phonenum, setPhonenum] = useState(localStorage.getItem("phonenum") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const handleSave = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("phonenum", phonenum);
    localStorage.setItem("email", email);
    alert("Profile updated successfully!");
  };

  return (
    <main className="container-fluid p-4 " style={{marginTop:150}}>
        <div className="row">
      <div className="col-6">
      <h1>Edit Profile</h1>
      <form >
       <div className="card p-5 mt-5">
         <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            value={phonenum}
            onChange={(e) => setPhonenum(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSave}
        >
          Save Changes
        </button>
       </div>
      </form>
      </div>  
    <div className="col-6 mt-5 d-flex align-items-center justify-content-center">
     <motion.img src={pic} alt="Picture"
       whileHover={{
        y:-20,
        scale: 1,
        rotate: -2,
        transition: { type:'tween', stiffness: 600 },
    }}width={500} className="img-fluid"
    />
</div>
      </div>
    </main>
  );
}