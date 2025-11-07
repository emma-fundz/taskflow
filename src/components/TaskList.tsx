import TaskItem from "./TaskItem";
import { Task } from "@/pages/TodoDashboard";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string, description?: string) => void;
}

const TaskList = ({ tasks, onToggle, onDelete, onEdit }: TaskListProps) => {
  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className="animate-slide-up"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <TaskItem
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
