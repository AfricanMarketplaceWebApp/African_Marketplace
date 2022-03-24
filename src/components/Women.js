import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { MdPermIdentity } from "react-icons/md";
import "./Home.css";
import LoginForm from "./LoginForm";
import pic from "./../components/./../images/Influencer.png";
import picture from "./../components/./../images/Golden peach.jpg";
import image from "./../components/./../images/african pattern.jpg";
import peachgold from "./../components/./../images/peach gold.jpg";
function Women() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div class="beginning">
      <div class="source">
        <nav>
          <button className="buticon">
            <Link to="/LoginForm"> Log in</Link>{" "}
          </button>
          <button className="buticon"> Sign up </button>
        </nav>
        <div class="headingstyle">
          <header>
            <title>Site Title</title>
            <h2>African Market </h2>
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
          </header>
        </div>
      </div>
      <body>
        <div class="body-begin">
          <img src={pic} />
        </div>
        <div class="headingstyle">
          <header>
            <h2> SALES 10% OFF</h2>
          </header>
        </div>
        <section>
          <div class="organize">
            <div class="container">
              <div class="boxOne">
                {" "}
                <div class="middle">
                  <button onClick={() => setModalIsOpen(true)}> $30.99</button>{" "}
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
                        <button onClick={() => setModalIsOpen(false)}>
                          Back
                        </button>
                        <h2>Description</h2>
                        <p>
                          Peach Gold bodycon dress
                          <br />
                        </p>
                        <h4>Price: $30.99</h4>
                      </div>

                      <div>
                        <img src={picture} />
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxTwo">
                {" "}
                <div class="middle">
                  <button onClick={() => setModalIsOpen(true)}> $9.99</button>
                  <Modal>
                    <div>
                      <img src={image} />
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxThree">
                {" "}
                <div class="middle">
                  <button> $24.99</button>{" "}
                </div>
              </div>
            </div>
          </div>

          <div class="reorganize">
            <div class="container">
              <div class="boxFour">
                {" "}
                <div class="middle">
                  <button onClick="Descriptions()">$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxFive">
                {" "}
                <div class="middle">
                  <button onClick="Descriptions()">$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxSix">
                {" "}
                <div class="middle">
                  <button onClick="Descriptions()">$9.99</button>
                </div>
              </div>
            </div>
          </div>
          <div class="headingstyle">
            <header>
              <h2> Best Sellers</h2>
            </header>
          </div>
        </section>

        <div class="style">
          <div class="stylish">
            <div class="container">
              <div class="boxSeven">
                <div class="middle">
                  <button onClick="Descriptions()">$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxNine">
                <div class="middle">
                  <button onClick="Descriptions()">$9.99</button>
                </div>
              </div>
            </div>
          </div>
          <div class="stylish">
            <div class="container">
              <div class="boxEleven">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxTwelve">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
          </div>
          <div class="stylish">
            <div class="container">
              <div class="boxEight">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="boxTen">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="foot">
            <h2>Need Help?</h2>
            <p>
              Contact:
              <a href="+1(513)3046167">+1(513)3046167</a>
              <br />
              Email:
              <a href="pizzahome@gmail.com">pizzahome@gmail.com</a>
            </p>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default Women;
