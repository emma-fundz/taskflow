import { useState } from "react";
import { Check, Trash2, Edit2, X, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Task } from "@/pages/TodoDashboard";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string, description?: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete, onEdit }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || "");

  const handleSave = () => {
    if (editTitle.trim()) {
      onEdit(task.id, editTitle.trim(), editDescription.trim() || undefined);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditDescription(task.description || "");
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="glass-strong rounded-xl p-4 border border-primary/30 glow-primary">
        <div className="space-y-3">
          <Input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Task title"
            className="bg-background/50 border-border/50 text-foreground"
            autoFocus
          />
          <Textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Description (optional)"
            className="bg-background/50 border-border/50 text-foreground resize-none"
            rows={2}
          />
          <div className="flex gap-2 justify-end">
            <Button
              onClick={handleCancel}
              variant="ghost"
              size="sm"
              className="text-foreground/60 hover:text-foreground hover:bg-background/50"
            >
              <X className="w-4 h-4 mr-1" />
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              size="sm"
              className="bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30"
            >
              <Save className="w-4 h-4 mr-1" />
              Save
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`glass rounded-xl p-4 hover-lift transition-all group ${
        task.completed ? "opacity-60" : "hover-glow"
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(task.id)}
          className={`flex-shrink-0 mt-1 w-5 h-5 rounded-md border-2 transition-all ${
            task.completed
              ? "bg-primary border-primary glow-primary"
              : "border-border hover:border-primary"
          } flex items-center justify-center`}
        >
          {task.completed && <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3
            className={`text-base font-medium transition-all ${
              task.completed
                ? "line-through text-foreground/50"
                : "text-foreground"
            }`}
          >
            {task.title}
          </h3>
          {task.description && (
            <p
              className={`text-sm mt-1 transition-all ${
                task.completed
                  ? "line-through text-foreground/40"
                  : "text-foreground/70"
              }`}
            >
              {task.description}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex-shrink-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            onClick={() => setIsEditing(true)}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-foreground/60 hover:text-primary hover:bg-primary/10"
          >
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => onDelete(task.id)}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-foreground/60 hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
