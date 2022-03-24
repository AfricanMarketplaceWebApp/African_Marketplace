import React, { useState } from "react";
import Modal from "react-modal";
import "./dashboard.css";

import { MdPermIdentity } from "react-icons/md";
import LoginForm from "./LoginForm";

function Dashboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <h2>Your Account</h2>
      <div className="navbar">
        <nav>
          <button>
            <a href="/women">Women</a>
          </button>
          <button>
            <a href="/men">Men</a>
          </button>
          <button>
            <a href="/dashboard">Dashboard</a>
          </button>
        </nav>
      </div>
      <div className="beginning">
        <div className="organize">
          <div className="one">
            <button className="button" onClick={() => setModalIsOpen(true)}>
              Orders
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            style={{
              content: {
                inset: 120,
              },
            }}
          >
            <div class="thing">
              <div class="pink">
                <button onClick={() => setModalIsOpen(false)}>Back</button>
                <h2>Your orders</h2>
                <button className="button">Silver dress </button>
                <button className="button"> Peach dress</button>
              </div>
            </div>
          </Modal>

          <div className="one">
            <button className="button" onClick={LoginForm}>
              <h3>Login & Security</h3>
            </button>
          </div>
          <div className="one">
            <button className="button">
              <h3>Wishlist</h3>
            </button>
          </div>
          <div className="profile">
            <MdPermIdentity size="15em" color="rgb(225, 0, 255)" />
          </div>
        </div>
        <div className="reorganize ">
          <div className="one">
            <button className="button">
              <h3>Account Details</h3>
            </button>
          </div>
          <div className="one">
            <button className="button">
              <h3>Address</h3>
            </button>
          </div>
          <div className="one">
            <button className="button">
              <h3>Student discounts</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
