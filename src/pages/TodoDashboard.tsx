import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import TaskList from "@/components/TaskList";
import AddTaskDialog from "@/components/AddTaskDialog";
import DashboardHeader from "@/components/DashboardHeader";

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

const TodoDashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  // API Integration Point: Future backend sync
  const addTask = (title: string, description?: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
    // TODO: POST /api/tasks
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    // TODO: PATCH /api/tasks/:id
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // TODO: DELETE /api/tasks/:id
  };

  const editTask = (id: string, title: string, description?: string) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, title, description } : task
    ));
    // TODO: PATCH /api/tasks/:id
  };

  const activeTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-8 md:py-12">
        <DashboardHeader 
          taskCount={activeTasks.length}
          completedCount={completedTasks.length}
        />

        {/* Add Task Button */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button
            onClick={() => setIsAddDialogOpen(true)}
            size="lg"
            className="w-full glass-strong hover-glow hover-lift border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-xl h-14 text-base font-medium"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Task
          </Button>
        </div>

        {/* Task Lists */}
        <div className="space-y-8">
          {activeTasks.length > 0 && (
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-lg font-semibold mb-4 text-foreground/80 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary glow-primary" />
                Active Tasks
              </h2>
              <TaskList
                tasks={activeTasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            </div>
          )}

          {completedTasks.length > 0 && (
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-lg font-semibold mb-4 text-foreground/60 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                Completed
              </h2>
              <TaskList
                tasks={completedTasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            </div>
          )}

          {tasks.length === 0 && (
            <div className="glass rounded-2xl p-12 text-center animate-fade-in">
              <div className="text-muted-foreground">
                <p className="text-lg mb-2">No tasks yet</p>
                <p className="text-sm">Create your first task to get started</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <AddTaskDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAdd={addTask}
      />
    </div>
  );
};

export default TodoDashboard;
