import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface AddTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (title: string, description?: string) => void;
}

const AddTaskDialog = ({ open, onOpenChange, onAdd }: AddTaskDialogProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), description.trim() || undefined);
      setTitle("");
      setDescription("");
      onOpenChange(false);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-strong border-primary/30 glow-primary">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Create New Task
          </DialogTitle>
          <DialogDescription className="text-foreground/60">
            Add a new task to your workflow
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-foreground/80">
              Task Title *
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className="bg-background/50 border-border/50 text-foreground focus:border-primary"
              autoFocus
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground/80">
              Description (Optional)
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add more details..."
              className="bg-background/50 border-border/50 text-foreground focus:border-primary resize-none"
              rows={3}
            />
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              onClick={handleCancel}
              variant="ghost"
              className="text-foreground/60 hover:text-foreground hover:bg-background/50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!title.trim()}
              className="bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Task
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskDialog;
