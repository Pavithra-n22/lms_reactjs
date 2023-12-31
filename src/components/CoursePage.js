// CoursePage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CoursePage = () => {
  // Access the course parameter from the URL
  const { course } = useParams();

  // Dummy data for related courses
  const relatedCourses = [
    { id: 'react', title: 'React Course', description: 'Learn ReactJS for building user interfaces.' },
    { id: 'java', title: 'Java Course', description: 'Master the fundamentals of Java.' },
    { id: 'python', title: 'Python Course', description: 'Explore the world of Python programming.' },
    { id: 'datas', title: 'Data Structures Course', description: 'A data structure is a specialized format for organizing, processing data' },
    { id: 'html', title: 'HTML Course', description: 'Master the fundementals of HTML.' },
    { id: 'cprog', title: 'C programming Course', description: 'check for c programming tutorial' },
    { id: 'css', title: 'CSS  Course', description: 'start learning on CSS fundementals' },
    { id: 'angular', title: 'Angular Course', description: 'start your learning on Angular' },
    { id: 'typescript', title: 'TypeScript Course', description: 'upcoming.' },
    // Add more related courses as needed
  ];

  return (
    <div className="course-page">
      {/* ... (your existing code) */}

      <section className="related-courses">
        <h2>Related Courses</h2>
        <div className="course-grid">
          {relatedCourses.map(relatedCourse => (
            <Link to={`/${relatedCourse.id}page`} key={relatedCourse.id} className="course-block">
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
