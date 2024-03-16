interface ToDoListProps {
  toDoList: string[];
}
export const ToDoList = ({ toDoList }: ToDoListProps) => {
  return (
    <ul>
      {toDoList.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};
