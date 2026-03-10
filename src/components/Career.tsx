import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Our journey <span>&</span>
          <br /> programs
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>EDHAA Concept</h4>
                <h5>Idea & Vision</h5>
              </div>
              <h3>START</h3>
            </div>
            <p>
              EDHAA began with a simple vision — to create meaningful
              weekend experiences for kids that combine creativity,
              curiosity, and fun learning beyond the classroom.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Workshops</h4>
                <h5>Hands-on Activities</h5>
              </div>
              <h3>PHASE 1</h3>
            </div>
            <p>
              Introducing creative workshops such as painting, craft,
              storytelling, and collaborative activities designed to
              develop imagination and creative thinking in children.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Weekend Experiences</h4>
                <h5>Learning Through Exploration</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              EDHAA continues to grow by organizing engaging weekend
              sessions including nature exploration, group activities,
              and fun educational experiences for curious young minds.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;