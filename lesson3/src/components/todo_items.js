function TodoItems({items, onDelete}) {
  const output = items.map ( (item) => {
    return (
      <li key={item.key} onClick={() => onDelete(item)}>
            {item.text}<br />
            <div className="smallerText">
                {item.date}
            </div>
        </li>
    )
  });

  return (
    <ul className="theList">
      {output}
    </ul>
  );
}

export default TodoItems;
