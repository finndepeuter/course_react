export default function TodoItem({ item }) {

  function editItemText() {

  }

  function toggleItemCompletion() {

  }

  function deleteItem() {

  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}