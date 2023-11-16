import { getStudentById } from '../data/student_api';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Student() {
  const {id} = useParams();
  const navigate = useNavigate();

  const student = getStudentById(Number(id));
  if (!student) {
      return <div>Student does not exist</div>
  }

  return (
    <div>
      <h2>Student</h2>
      <p>
        Name: {student.name}
        <br />
        Id: {student.id}
        <br />
        Grade: {student.grade}
      </p>
      <Link onClick={() => navigate(-1)}>Back</Link>
    </div>
  );
}

export default Student;
