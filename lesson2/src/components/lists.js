export function ListArray(props) {
  let listItems = [];
  for (var i = 0; i < props.students.length; i++) {
    listItems.push(<li key={props.students[i].id}>{props.students[i].name} {props.students[i].grade}</li>);
  }

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export function ListMap({ students }) {
  const listItems = students.map(student =>
    <li key={student.id}>{student.name} {student.grade}</li>
  );

  return (
    <ol>
      {listItems}
    </ol>
  );
}
