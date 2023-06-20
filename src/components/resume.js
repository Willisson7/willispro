import React from 'react';

function Resume() {
  const resumeData = {
    name: 'Grant Willis',
    title: 'Full Stack Web Developer',
    education: [
      {
        institution: 'University of Arizona',
        degree: 'Certification of ',
        graduationYear: 2023,
      },
    ],
    experience: [
      {
        company: 'Department of Justice-Bureau of Prisons',
        position: 'Senior Officer Specialist GS-08-07',
        startDate: '2015',
        endDate: '2022',
        responsibilities: [
          'Developed and maintained web applications using React.js',
          'Collaborated with cross-functional teams to deliver high-quality software',
        ],
      },
    ],
    skills: ['JavaScript', 'React', 'CSS', 'HTML', 'Git'],
  };

  return (
    <div className="main-container">
      <div className="resume">
        <div className="header">
          <h1>{resumeData.name}</h1>
          <h2>{resumeData.title}</h2>
        </div>

        <div className="section">
          <h3>Education</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index}>
              <h4>{edu.institution}</h4>
              <p>{edu.degree}</p>
              <p>Graduation Year: {edu.graduationYear}</p>
            </div>
          ))}
        </div>

        <div className="section">
          <h3>Experience</h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index}>
              <h4>{exp.company}</h4>
              <p>{exp.position}</p>
              <p>{exp.startDate} - {exp.endDate}</p>
              <ul>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section">
          <h3>Skills</h3>
          <ul>
            {resumeData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
