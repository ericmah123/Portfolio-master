import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Fullscreen Modal for Job Details
function JobDetailsModal({ show, onClose, job }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(20, 10, 40, 0.92)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(2px)",
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            style={{
              background: "rgba(40, 20, 60, 0.98)",
              borderRadius: "18px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "40px 32px 32px 32px",
              maxWidth: "600px",
              width: "90vw",
              maxHeight: "90vh",
              overflowY: "auto",
              color: "#fff",
              position: "relative",
              textAlign: "left",
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: 18,
                right: 24,
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "2rem",
                cursor: "pointer",
                zIndex: 20,
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              aria-label="Close"
              onMouseOver={e => (e.currentTarget.style.opacity = 1)}
              onMouseOut={e => (e.currentTarget.style.opacity = 0.7)}
            >
              ×
            </button>
            <h2 style={{ color: "#b18fff", fontWeight: 700, marginBottom: 10 }}>{job.title}</h2>
            <h4 style={{ color: "#fff", fontWeight: 500, marginBottom: 6 }}>{job.position}</h4>
            <div style={{ color: "#ccc", fontSize: "1rem", marginBottom: 12 }}>{job.location}</div>
            <div style={{ color: "#b18fff", fontWeight: 500, marginBottom: 18 }}>{job.date}</div>
            <div>
              {job.duties.map((duty, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    padding: "15px",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#fff",
                  }}
                >
                  {duty}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Timeline Item Component
function TimelineItem({ title, location, position, duties, date, index, onExpand }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="timeline-item"
      style={{
        position: "relative",
        marginBottom: "60px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        minHeight: "150px",
      }}
    >
      {/* Main Timeline Line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "#6f42c1",
          transform: "translateX(-50%)",
          opacity: 0.4,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: isLeft ? "flex-end" : "flex-start",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {/* Date Badge */}
        <div
          style={{
            position: "absolute",
            [isLeft ? "left" : "right"]: "50%",
            transform: `translate(${isLeft ? "-50%" : "50%"}, -50%)`,
            background: "#6f42c1",
            padding: "8px 16px",
            borderRadius: "20px",
            color: "white",
            fontSize: "0.9rem",
            fontWeight: "500",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 15px rgba(111, 66, 193, 0.3)",
            zIndex: 2,
            top: "50%",
            marginLeft: isLeft ? "-120px" : "0",
            marginRight: isLeft ? "0" : "-120px",
          }}
        >
          {date}
        </div>

        {/* Timeline Dot */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "16px",
            height: "16px",
            background: "#6f42c1",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 0 4px rgba(111, 66, 193, 0.2)",
            zIndex: 2,
          }}
        />

        {/* Content Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            width: "42%",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "15px",
            padding: "25px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            marginLeft: isLeft ? "0" : "80px",
            marginRight: isLeft ? "80px" : "0",
            position: "relative",
            overflow: "visible",
          }}
          onClick={() => onExpand()}
        >
          {/* Card Content */}
          <h3 style={{ 
            color: "#6f42c1", 
            marginBottom: "12px",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}>
            {title}
          </h3>
          <h4 style={{ 
            color: "white", 
            fontSize: "1.1rem", 
            marginBottom: "8px",
            fontWeight: "500"
          }}>
            {position}
          </h4>
          <p style={{ 
            color: "#e0e0e0", 
            fontSize: "0.95rem", 
            marginBottom: "15px"
          }}>
            {location}
          </p>
          <p style={{ 
            color: "#a0a0a0", 
            fontSize: "0.85rem", 
            marginTop: "12px",
            textAlign: "center",
            fontStyle: "italic"
          }}>
            Click to view details
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Job Experience Section Component
function JobExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [modalJob, setModalJob] = useState(null);

  const jobExperiences = [
    {
      title: "Calgary Korean Golf Association",
      location: "Canada, Calgary, AB",
      position: "Summer Analyst Intern",
      duties: [
        <>
          <strong>Revamped Client Management System through Database Modernization</strong>
          <ul>
            <li>
              Replaced an outdated Excel-based system with a scalable SQLite database, dramatically improving the accuracy, consistency, and accessibility of client records.
            </li>
            <li>
              Led a deep-dive analysis of existing workflows, uncovering inefficiencies in data entry, retrieval, and updates that slowed down operations during peak periods.
            </li>
            <li>
              Designed a clean, future-proof database schema and automated the migration of thousands of records using Python scripts, minimizing data loss and human error.
            </li>
            <li>
              Built a Python-based graphical user interface (GUI) tailored for non-technical staff, enabling easy client lookups and updates without needing direct database access.
            </li>
            <li>
              Trained team members on the new system and best practices for data management, reducing administrative processing time by 40% and ensuring smoother onboarding for new hires.
            </li>
          </ul>
        </>,
        <>
          <strong>Unified Cross-Departmental Data Workflows</strong>
          <ul>
            <li>
              Led a cross-functional project to eliminate data silos between management, operations, and IT teams, improving data consistency and access across the organization.
            </li>
            <li>
              Conducted stakeholder interviews and collaborative workshops to gather requirements, ensuring that the new system addressed the unique needs of each department.
            </li>
            <li>
              Designed a centralized database architecture that streamlined data retrieval and eliminated redundant storage, boosting interdepartmental efficiency by 30%.
            </li>
            <li>
              Facilitated training sessions and weekly syncs to guide smooth adoption of the new workflows, fostering better collaboration and quicker decision-making across teams.
            </li>
          </ul>
        </>,
      ],
      date: "May 2023 - September 2023",
    },
    {
      title: "Student Sealing",
      location: "Canada, Calgary, AB",
      position: "Sales Specialist",
      duties: [
        <>
          <strong>Led a team that generated over $100K in revenue:</strong>
          <ul>
            <li>
              Built and led a diverse sales team, creating a collaborative, goal-driven environment that consistently hit and surpassed revenue milestones.
            </li>
            <li>
              Conducted weekly one-on-one and team performance reviews, setting clear KPIs and using real-time feedback to drive continuous improvement.
            </li>

          </ul>
        </>,
        <>
          <strong>Transitioned Sales Strategy to a Consultative Model:</strong>
          <ul>
            <li>
              Shifted the team’s approach from transactional selling to consultative, relationship-based sales, resulting in deeper client engagement.
            </li>
            <li>
              Led needs assessments and personalized consultations that aligned offerings with client goals, increasing client satisfaction scores by 15%.
            </li>
            <li>
              Reinforced a solutions-first mindset across the team, driving longer client retention cycles and higher-value deals..
            </li>
          </ul>
        </>,
        <>
          <strong>Strengthened Client Retention and Referral Growth:</strong>
          <ul>
            <li>
              Established a structured client feedback loop through surveys and proactive follow-ups, turning insights into actionable service improvements.
            </li>
            <li>
              Resolved client concerns quickly and consistently, building stronger trust and loyalty.
            </li>
            <li>
              Increased repeat business and referral rates by 20%, fueling sustainable revenue growth and expanding market presence.
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
        padding: "60px 20px",
        background: "none",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ 
          textAlign: "center", 
          marginBottom: "60px",
          maxWidth: "800px",
          margin: "0 auto 60px"
        }}
      >
        <h1
          style={{
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "#fff",
            marginBottom: "15px",
          }}
        >
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ 
          color: "#e0e0e0", 
          fontSize: "1.1rem",
          lineHeight: "1.6"
        }}>
          A journey through my professional growth
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div style={{ 
        position: "relative", 
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px 0"
      }}>
        {/* Vertical Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(180deg, rgba(111, 66, 193, 0.4) 0%, rgba(111, 66, 193, 0.1) 100%)",
            transform: "translateX(-50%)",
          }}
        />
        
        {/* Timeline Items */}
        {jobExperiences.map((job, index) => (
          <TimelineItem
            key={index}
            {...job}
            index={index}
            onExpand={() => setModalJob(job)}
          />
        ))}
      </div>
      {/* Fullscreen Modal */}
      <JobDetailsModal show={!!modalJob} onClose={() => setModalJob(null)} job={modalJob || { duties: [] }} />
    </Container>
  );
}

export default JobExperienceSection;
