import React, { useState, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Job Experience Card Component
function JobExperienceCard({ title, location, position, duties, date }) {
  const [isExpanded, setIsExpanded] = useState(false); // Track expand/collapse state
  const contentRef = useRef(null); // Ref to measure content height

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`job-experience-card ${isExpanded ? "expanded" : ""}`}
        onClick={() => setIsExpanded(!isExpanded)} // Toggle expanded state on click
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
          borderRadius: "12px",
          marginBottom: "25px",
          padding: "20px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Card.Body>
          {/* Title */}
          <Card.Title
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginBottom: "10px",
            }}
          >
            <strong className="purple">{title}</strong>
          </Card.Title>

          {/* Subtitle */}
          <Card.Subtitle
            className="mb-3 text-muted"
            style={{
              textAlign: "center",
              fontSize: "1rem",
              fontStyle: "italic",
            }}
          >
            <span style={{ color: "#CCCCCC", fontWeight: "bold" }}>
              {position}
            </span>
            <span style={{ color: "#CCCCCC" }}>{" - "}</span>
            <span style={{ color: "#CCCCCC" }}>{location}</span>
          </Card.Subtitle>

          {/* Date */}
          <Card.Text
            style={{
              textAlign: "left",
              fontSize: "1rem",
              marginBottom: "10px",
            }}
          >
            <strong style={{ fontWeight: "600" }}>Date:</strong> {date}
          </Card.Text>

          {/* Click to see job duties */}
          <Card.Text
            className="text-muted"
            style={{
              fontSize: "0.9rem",
              textAlign: "left",
              fontStyle: "italic",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "#CCCCCC" }}>
              {isExpanded ? "Click to close job duties" : "Click to see job duties"}
            </span>
          </Card.Text>

          {/* Expandable Job Duties */}
          <div
            ref={contentRef}
            style={{
              height: isExpanded
                ? `${contentRef.current?.scrollHeight}px`
                : "0px", // Dynamically calculate height
              overflow: "hidden", // Hide content when collapsed
              transition: "height 0.5s ease-in-out", // Smooth expand/collapse
            }}
          >
            <Card.Text
              style={{
                textAlign: "left",
                fontSize: "1rem",
                marginTop: "15px",
              }}
            >
              <strong style={{ fontWeight: "600" }}>Job Duties:</strong>
              <ul
                className="list-group list-group-flush mt-3"
                style={{
                  listStyleType: "none",
                  paddingLeft: "0",
                }}
              >
                {duties.map((duty, index) => (
                  <li
                    className="list-group-item d-flex align-items-start bg-transparent text-white"
                    key={index}
                    style={{
                      padding: "12px",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      background:
                        index % 2 === 0
                          ? "rgba(255, 255, 255, 0.05)"
                          : "transparent",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      marginBottom: "10px",
                    }}
                  >
                    <i
                      className="bi bi-check-circle-fill"
                      style={{
                        marginRight: "12px",
                        color: "#6f42c1",
                        fontSize: "1.2rem",
                      }}
                    ></i>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

// Job Experience Section Component
function JobExperienceSection() {
  // Intersection Observer for triggering animations
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Array of Job Experience Data
  const jobExperiences = [
    {
      title: "Kyan Properties",
      location: "Canada, Calgary, AB",
      position: "Automation and Frontend Development",
      duties: [
        <>
          <strong>Streamlined Month-End Reconciliation Processes:</strong>
          <ul>
            <li>
              Automated the extraction and summarization of reservation data from multiple platforms, including Airbnb, Booking.com, and internal systems, which was previously done manually and prone to errors.
            </li>
            <li>
              Built a custom script using Python and integrated APIs to retrieve, clean, and compile data into a standardized format suitable for reconciliation and reporting.
            </li>
            <li>
              Reduced manual effort by 90% and significantly improved the accuracy of month-end financial reporting, eliminating discrepancies that delayed decision-making.
            </li>
            <li>
              Empowered finance and operations teams to meet reporting deadlines more efficiently, enabling them to allocate more time to strategic tasks.
            </li>
          </ul>
        </>,
        <>
          <strong>Automated Property Listing Data Validation:</strong>
          <ul>
            <li>
              Developed a Python-based validation tool that cross-checked property details across platforms like Airbnb, Booking.com, and the company's website to identify inconsistencies.
            </li>
            <li>
              Addressed discrepancies such as mismatched pricing, incorrect availability dates, and missing property descriptions, which previously caused confusion among customers and reduced trust in listings.
            </li>
            <li>
              Implemented automated alerts to notify team members of inconsistencies, enabling proactive resolution and reducing the need for manual audits.
            </li>
            <li>
              Improved data accuracy by 95%, leading to increased customer trust and a more seamless booking experience for users.
            </li>
          </ul>
        </>,
        <>
          <strong>Designed and Developed Key Portions of the Company Website:</strong>
          <ul>
            <li>
              Contributed to the redesign of underperforming sections of the website, focusing on improving navigation, accessibility, and responsiveness for both desktop and mobile users.
            </li>
            <li>
              Conducted user research and feedback sessions to identify pain points and incorporated insights into the redesign process to enhance the user experience.
            </li>
          </ul>
        </>,
      ],
      date: "December 2023 - Present",
    },
    {
      title: "Calgary Korean Golf Association",
      location: "Canada, Calgary, AB",
      position: "Summer Analyst Intern",
      duties: [
        <>
          <strong>Optimized Client Management System with Database Migration:</strong>
          <ul>
            <li>
              Migrated the company's client management system from an outdated Excel-based process to a modern, scalable SQLite database architecture.
            </li>
            <li>
              Conducted a comprehensive analysis of existing workflows and identified inefficiencies in data storage, retrieval, and updating processes.
            </li>
            <li>
              Designed and implemented a robust database schema to ensure consistency, accuracy, and scalability of client records while maintaining compatibility with future growth needs.
            </li>
            <li>
              Automated data migration using Python scripts, which minimized errors and ensured data integrity during the transition phase.
            </li>
            <li>
              Trained employees on the use of the new database system, enabling smoother adoption and a 40% reduction in time spent on administrative tasks.
            </li>
          </ul>
        </>,
        <>
          <strong>Improved Interdepartmental Efficiency through Data Integration:</strong>
          <ul>
            <li>
              Led a cross-functional initiative to address inefficiencies caused by fragmented data management practices across upper management, operations, and IT departments.
            </li>
            <li>
              Conducted stakeholder interviews and workshops to identify the unique data needs and challenges of each department.
            </li>
            <li>
              Designed and implemented a centralized database system that unified data storage and retrieval processes, reducing redundancy and enabling seamless access to critical business insights.
            </li>
            <li>
              Facilitated training sessions and weekly alignment meetings to ensure all departments were onboarded effectively, resulting in a 30% improvement in interdepartmental collaboration and workflow efficiency.
            </li>
          </ul>
        </>,
      ],
      date: "May 2023 - September 2023",
    },
    {
      title: "Sales Manager",
      location: "Canada, Calgary, AB",
      position: "Sales Manager",
      duties: [
        <>
          <strong>Led a team that generated over $100K in revenue:</strong>
          <ul>
            <li>
              Successfully managed a diverse sales team, fostering a collaborative environment and ensuring alignment with overarching sales objectives.
            </li>
            <li>
              Conducted weekly performance reviews to evaluate individual contributions, set clear KPIs, and motivate team members to achieve and exceed revenue targets.
            </li>
            <li>
              Leveraged data analytics tools to identify high-potential market segments and prioritize efforts toward opportunities with the highest ROI.
            </li>
            <li>
              Streamlined team workflows and optimized resource allocation, leading to a 25% improvement in overall team efficiency and productivity.
            </li>
          </ul>
        </>,
        <>
          <strong>Implemented a consultative approach to sales:</strong>
          <ul>
            <li>
              Shifted the sales strategy from a transactional model to a consultative approach, focusing on building long-term client relationships.
            </li>
            <li>
              Conducted in-depth needs assessments and personalized consultations to better understand client pain points and align solutions with their goals.
            </li>
            <li>
              Improved client satisfaction scores by 15% by delivering tailored solutions and ensuring a consistent, high-quality customer experience.
            </li>
          </ul>
        </>,
        <>
          <strong>Strengthened client relationships through proactive engagement:</strong>
          <ul>
            <li>
              Established a structured client feedback loop through post-purchase surveys and regular follow-ups to gather actionable insights for improving service delivery.
            </li>
            <li>
              Proactively addressed client concerns and resolved issues promptly, fostering trust and building long-term partnerships.
            </li>
            <li>
              Increased repeat business and referrals by 20%, contributing to sustained revenue growth and a stronger market presence.
            </li>
          </ul>
        </>,
      ],
      date: "May 2023 - September 2023",
    },
  ];
  

  return (
    <Container
      fluid
      ref={ref}
      className="job-experience-section"
      style={{
        padding: "40px 0",
        background: "none",
      }}
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="job-experience-heading"
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "#fff",
            marginBottom: "40px",
          }}
        >
          My <strong className="purple">Experience</strong>
        </h1>
      </motion.div>

      {/* Job Cards */}
      <Row style={{ justifyContent: "center" }}>
        {jobExperiences.map((job, index) => (
          <Col
            md={6}
            className="job-experience-card"
            key={index}
            style={{ padding: "15px" }}
          >
            <JobExperienceCard
              title={job.title}
              location={job.location}
              position={job.position}
              duties={job.duties}
              date={job.date}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default JobExperienceSection;
