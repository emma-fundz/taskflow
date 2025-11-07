import { Sparkles } from "lucide-react";

interface DashboardHeaderProps {
  taskCount: number;
  completedCount: number;
}

const DashboardHeader = ({ taskCount, completedCount }: DashboardHeaderProps) => {
  return (
    <div className="mb-8 md:mb-12 animate-slide-up">
      <div className="flex items-center gap-3 mb-4">
        <div className="glass rounded-xl p-3 glow-primary">
          <Sparkles className="w-6 h-6 text-primary" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          TaskFlow
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 text-sm">
        <div className="glass rounded-lg px-4 py-2 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-foreground/80">
            {taskCount} {taskCount === 1 ? "task" : "tasks"} active
          </span>
        </div>
        {completedCount > 0 && (
          <div className="glass rounded-lg px-4 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
            <span className="text-foreground/60">
              {completedCount} completed
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
