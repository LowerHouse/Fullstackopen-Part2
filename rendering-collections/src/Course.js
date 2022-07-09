const Course = (props) => {
    const Header = ({ course }) => <h1>{course}</h1>;
  
    const Total = ({ total }) => <p>Total of {total} exercises</p>;
  
    const Part = ({ part }) => (
      <p>
        {part.name} {part.exercises}
      </p>
    );
  
    const Content = ({ parts }) => (
      <>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </>
    );
  
    const total = props.course.parts
      .map((ex) => ex.exercises)
      .reduce((s, p) => s + p, 0);
  
    return (
      <>
        <Header course={props.course.name} />
        <Content parts={props.course.parts} />
        <Total total={total} />
      </>
    );
  };

  
export default Course;