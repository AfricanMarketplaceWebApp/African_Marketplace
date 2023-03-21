import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="source">
        <div className="headingstyle">
          <header>
            <title>Site Title</title>
            <h2>African Market </h2>
            <nav>
              <button>
                <a href="/home">Home</a>
              </button>
              <button>
                <a href="profile">Profile</a>
              </button>
              <button>
                <a href="/">Add Items</a>
              </button>
            </nav>
          </header>
        </div>
      </div>
      <body>
        <section>
          <div className="organize">
            <div className="boxOne"></div>
            <div className="boxTwo"></div>
            <div className="boxThree"></div>
          </div>

          <div className="reorganize">
            <div className="boxFour"></div>
            <div className="boxFive"></div>
            <div className="boxSix"></div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Home;
