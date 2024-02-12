import React from 'react';
import Course from './Course';
import CoursesObject from './courses.json';

const Courses = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {CoursesObject.map((element) => (
        <Course 
          key={element.course_prefix + element.course_code}
          code={element.course_prefix + element.course_code}
          name={element.course_title}
          rating={element.average_stars}
          reviews={element.total_reviews}
          terms={element.offered_terms}
        />
      ))}
    </div>
  );
}

export default Courses;