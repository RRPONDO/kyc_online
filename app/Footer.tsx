import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white py-4 mt-5">
      <div className="container">
        <p className="mb-2">
          &copy; 2024 Zuva Petroleum Company. All rights reserved.
        </p>
        <p className="mb-2">Developed by the IT Department</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
