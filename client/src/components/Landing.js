import React, { Component } from "react";

import denver from "./images/denver.jpg";
import Email from "./Email";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-image">
                <img src={denver} alt="meaning prop text" />
                <span className="card-title">Cover Letter</span>
              </div>
              <div className="card-content">
                <p className="flow-text">
                  Hello, and welcome to <a href="/">Gridder.dev</a>! I built
                  this tiny web-app with the technologies I imagine future
                  Twilio SendGrid customers or developers would be using.
                </p>
                <div className="collection">
                  <a
                    href="https://sendgrid.com/docs/api-reference/"
                    className="collection-item active purple darken-1"
                  >
                    Twilio SendGrid v3 API
                  </a>
                  <a href="/" className="collection-item">
                    Amazon Web Services
                  </a>
                  <a href="/" className="collection-item">
                    React/Redux
                  </a>
                  <a href="/" className="collection-item">
                    CI/CD
                  </a>
                  <a href="/" className="collection-item">
                    Docker
                  </a>
                </div>

                <p>
                  <b>Goals:</b> I have a desire to grow into a competent
                  software engineer and become an even better team player. I
                  continuously look for ways to improve and am always
                  conscientious about my impact on others. Sometimes this means
                  cultivating my technical and soft skills outside of office
                  hours. Luckily I enjoy the process and willing to do what it
                  takes to keep growing in these arenas.
                  <br />
                  <br />
                  <b>Achievements:</b> I have cultivated my skills over the
                  years as a software engineer. I have participated on teams,
                  lead teams, and have fully experienced collaborative
                  environments which have fostered my communication skills to
                  both technical and non-technical individuals or groups. I'm
                  excited to help others and improve my colleagues and
                  customers' experiences. On a more personal level, I recently
                  walked over 500 miles in the span of 35 days on the Camino de
                  Santiago and gained a profound sense of personal growth.
                  Exposure to various cultures has broadened my mind, and I have
                  built lasting relationships with diverse groups of people
                  during my time abroad.
                  <br />
                  <br />
                  <b>Next Steps:</b> It is with optimism that I step forward to
                  bringing a positive attitude, a hunger to learn, and a
                  contributing skillset to Twilio SendGrid. I admire the
                  <b> 4H </b> culture set forth by the company. Finding a
                  long-term fit for your team often takes time, and it is my
                  impression that your team is in search of a technically
                  capable person who can successfully navigate a team-oriented
                  environment. I believe I can be that person and I feel my past
                  colleagues would agree. I'm ready for the next great challenge
                  and mountain to climb!
                </p>
              </div>
              <div className="card-action">
                <p className="flow-text">Time for some fun!</p>
                <Email />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
