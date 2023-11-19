// CoursePage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CoursePage = () => {
  // Access the course parameter from the URL
  const { course } = useParams();

  // Dummy data for related courses
  const relatedCourses = [
    { id: 'react', title: 'React Course', description: 'Learn ReactJS for building user interfaces.' },
    { id: 'javascript', title: 'JavaScript Course', description: 'Master the fundamentals of JavaScript.' },
    { id: 'html-css', title: 'HTML & CSS Course', description: 'Build responsive and beautiful websites.' },
    { id: 'python', title: 'Python Course', description: 'Explore the world of Python programming.' },
    { id: 'nodejs', title: 'Node.js Course', description: 'Build scalable network applications using Node.js.' },
    { id: 'mongodb', title: 'MongoDB Course', description: 'Master NoSQL database with MongoDB.' },
    { id: 'angular', title: 'Angular Course', description: 'Learn front-end web development with Angular.' },
    { id: 'vuejs', title: 'Vue.js Course', description: 'Build interactive web interfaces with Vue.js.' },
    { id: 'typescript', title: 'TypeScript Course', description: 'Enhance your JavaScript with TypeScript.' },
    // Add more related courses as needed
  ];

  return (
    <div className="course-page">
      {/* ... (your existing code) */}

      <section className="related-courses">
        <h2>Related Courses</h2>
        <div className="course-grid">
          {relatedCourses.map(relatedCourse => (
            <Link to={'/reactpage'} key={relatedCourse.id} className="course-block">
              <h3>{relatedCourse.title}</h3>
              <p>{relatedCourse.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ... (your existing code) */}
    </div>
  );
};

export default CoursePage;
