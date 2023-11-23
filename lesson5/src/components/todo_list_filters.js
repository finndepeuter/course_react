export default function TodoListFilters() {
  
  function updateFilter(event) {
    
  }

  return (
    <p>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </p>
  );
}