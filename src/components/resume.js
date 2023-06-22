
import React from 'react';
import resumeLink from "./resume2023.pdf";

const ResumePage = () => {
  return (
    <div className="resume-page">
      <header>
        <h1>Grant Willis</h1>
        <p>Phone: (928) 965-7404 | Email: thegwillis.gw@gmail.com</p>
        <div>
       <a href={resumeLink} download="resume2023.pdf">Download Resume</a>
        </div>
      </header>

      <section className="resume-section">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Bachelors of Applied Technology</h3>
            <p>BYU-Idaho, 2024</p>
          </li>
          {/* Add more education entries */}
          <li>
            <h3>Associate of General Studies</h3>
            <p>Eastern Arizona College, 2018</p>
          </li>
          <li>
            <h3>Full Stack Web Development Flex Course</h3>
            <p>University of Arizona, 2023</p>
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <h3>Senior-Officer Specialist Gs-07</h3>
            <p>Department of Justice/Bureau of Prisons | April 2015 - December 2022</p>
            <ul>
              <li>Responsibility 1</li>
              <li>Responsibility 2</li>
              {/* Add more responsibilities */}
            </ul>
          </li>
          {/* Add more work experience entries */}
        </ul>
      </section>

      {/* <section className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
        
        </ul>
      </section> */}
    </div>
  );
};

export default ResumePage;
