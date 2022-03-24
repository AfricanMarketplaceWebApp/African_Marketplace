//import React from "react";

import pic from "./../components/./../images/Trad Wear.png";
import "./profile.css";
function Men() {
  return (
    <div class="beginning">
      <div class="source">
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
                <button>
                  <a href="/">Add Items</a>
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
          <div class="structure">
            <div class="container">
              <div class="boxA">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxB">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxC">
                <div class="middle">
                  <button>$9.99</button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="restructure">
            <div class="container">
              <div class="boxD">
                {" "}
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="boxE">
                {" "}
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="boxF">
                {" "}
                <div class="middle">
                  <button>$9.99</button>
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

        <div class="styles">
          <div class="stylishs">
            <div class="container">
              <div class="boxG">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxH">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
          </div>
          <div class="stylishs">
            <div class="container">
              <div class="boxI">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxJ">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
          </div>
          <div class="stylishs">
            <div class="container">
              <div class="boxK">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="boxL">
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

export default Men;
