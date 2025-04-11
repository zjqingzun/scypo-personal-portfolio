import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="profile-image">
          <img src="/profile.jpg" alt="Profile" />
        </div>
        <h1>Nguyễn Văn A</h1>
        <p className="title">Full Stack Developer</p>
        <div className="social-links">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:example@email.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="about-section">
        <h2>Giới Thiệu</h2>
        <p className="bio">
          Tôi là một Full Stack Developer với niềm đam mê xây dựng các ứng dụng web hiện đại và hiệu quả.
          Với kinh nghiệm làm việc trong cả frontend và backend, tôi có thể tạo ra các giải pháp toàn diện
          cho các vấn đề phức tạp.
        </p>
      </div>

      <div className="about-section">
        <h2>Kỹ Năng</h2>
        <div className="skills">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-bars">
              <div className="skill">
                <span>React.js</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill">
                <span>JavaScript/TypeScript</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill">
                <span>HTML/CSS</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill">
                <span>Tailwind CSS</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-bars">
              <div className="skill">
                <span>Node.js</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill">
                <span>Express.js</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill">
                <span>MongoDB</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill">
                <span>RESTful APIs</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Kinh Nghiệm Làm Việc</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Công ty ABC</h3>
              <p className="duration">2020 - Hiện tại</p>
              <p className="position">Senior Full Stack Developer</p>
              <ul>
                <li>Phát triển và duy trì các ứng dụng web</li>
                <li>Xây dựng API và tích hợp với frontend</li>
                <li>Quản lý cơ sở dữ liệu và tối ưu hiệu suất</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Công ty XYZ</h3>
              <p className="duration">2018 - 2020</p>
              <p className="position">Frontend Developer</p>
              <ul>
                <li>Phát triển giao diện người dùng</li>
                <li>Tối ưu hiệu suất và trải nghiệm người dùng</li>
                <li>Làm việc với các API và tích hợp backend</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Học Vấn</h2>
        <div className="education">
          <div className="education-item">
            <h3>Đại học XYZ</h3>
            <p className="duration">2016 - 2020</p>
            <p className="degree">Cử nhân Công nghệ Thông tin</p>
            <p className="gpa">GPA: 3.8/4.0</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Dự Án Tiêu Biểu</h2>
        <div className="projects">
          <div className="project-card">
            <h3>E-commerce Platform</h3>
            <p>Xây dựng nền tảng thương mại điện tử với React và Node.js</p>
            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <a href="#" className="project-link">Xem chi tiết</a>
          </div>
          <div className="project-card">
            <h3>Task Management App</h3>
            <p>Ứng dụng quản lý công việc với tính năng real-time</p>
            <div className="project-tags">
              <span>React</span>
              <span>Firebase</span>
              <span>Redux</span>
            </div>
            <a href="#" className="project-link">Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
