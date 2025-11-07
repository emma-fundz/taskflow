# # TaskFlow - Next-Gen To-Do List App

A futuristic, beautifully designed to-do list web application with glassmorphism, glow effects, and smooth animations. Built with React, TypeScript, and Tailwind CSS.

## 🎨 Design Philosophy

TaskFlow represents the future of task management interfaces:
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Glow Effects**: Electric cyan and violet accent colors with dynamic glows
- **Smooth Animations**: Fluid transitions and micro-interactions
- **Dark Theme**: Space-inspired deep navy background
- **Mobile-First**: Responsive design that works beautifully on all devices

## 🚀 Features

- ✨ Stunning entry/onboarding page with animated transitions
- 📝 Create, edit, and delete tasks
- ✅ Mark tasks as complete/incomplete
- 🎯 Separate views for active and completed tasks
- 📱 Fully responsive (mobile-first design)
- 🎭 Smooth animations and hover effects
- 🔮 Future-ready with clear API integration points

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/               # shadcn-ui components
│   ├── AddTaskDialog.tsx # Modal for creating new tasks
│   ├── DashboardHeader.tsx # Header with stats and branding
│   ├── TaskItem.tsx      # Individual task card with actions
│   └── TaskList.tsx      # List container for tasks
├── pages/
│   ├── EntryPage.tsx     # Landing/onboarding page
│   ├── TodoDashboard.tsx # Main task management dashboard
│   └── NotFound.tsx      # 404 error page
├── hooks/                # Custom React hooks
├── lib/
│   └── utils.ts          # Utility functions
├── App.tsx               # Root component with routing
├── index.css             # Global styles and design system
└── main.tsx              # Application entry point
```

## 🧩 Component Architecture

### Pages

#### **EntryPage** (`src/pages/EntryPage.tsx`)
- Landing page with animated hero section
- Features glassmorphic card with app icon
- Smooth fade-in animations
- CTA button navigates to dashboard
- Background gradient effects

#### **TodoDashboard** (`src/pages/TodoDashboard.tsx`)
- Main application interface
- State management for tasks (ready for backend sync)
- Displays active and completed tasks separately
- Floating "Add Task" button
- Empty state for first-time users

### Components

#### **DashboardHeader** (`src/components/DashboardHeader.tsx`)
- App branding with icon
- Live task count badges
- Animated stats display

#### **TaskList** (`src/components/TaskList.tsx`)
- Renders array of tasks
- Staggered animations for list items
- Handles task actions via callbacks

#### **TaskItem** (`src/components/TaskItem.tsx`)
- Individual task card with glassmorphic styling
- Inline editing mode
- Toggle completion status
- Hover actions (edit/delete)
- Smooth transitions between states

#### **AddTaskDialog** (`src/components/AddTaskDialog.tsx`)
- Modal dialog for task creation
- Form with title and description fields
- Validation and submit handling
- Glassmorphic styling with glow effects

## 🎨 Design System

### Color Palette
```css
--background: 222 47% 5%       /* Deep space navy */
--foreground: 195 100% 95%     /* Bright cyan-white */
--primary: 189 100% 55%        /* Electric cyan */
--secondary: 265 75% 60%       /* Violet purple */
--muted: 222 40% 12%           /* Muted background */
```

### Custom Utilities

**Glass Effects:**
- `.glass` - Standard glassmorphism
- `.glass-strong` - Enhanced glass with stronger blur

**Glow Effects:**
- `.glow-primary` - Cyan glow
- `.glow-primary-strong` - Intense cyan glow
- `.glow-secondary` - Violet glow

**Animations:**
- `.animate-float` - Gentle floating motion
- `.animate-pulse-glow` - Pulsing glow effect
- `.animate-slide-up` - Slide up with fade
- `.animate-fade-in` - Simple fade in

**Hover States:**
- `.hover-lift` - Elevates on hover
- `.hover-glow` - Adds glow on hover

## 🔌 Backend Integration Points

The app is structured with clear placeholders for backend integration:

### API Endpoints (To Be Implemented)

```typescript
// TodoDashboard.tsx - Task Operations

// Create task
POST /api/tasks
Body: { title: string, description?: string }

// Update task
PATCH /api/tasks/:id
Body: { title?: string, description?: string, completed?: boolean }

// Delete task
DELETE /api/tasks/:id

// Fetch all tasks (on mount)
GET /api/tasks
Response: Task[]
```

### Data Model

```typescript
interface Task {
  id: string;          // UUID
  title: string;       // Required
  description?: string; // Optional
  completed: boolean;  // Status
  createdAt: Date;     // Timestamp
}
```

### Authentication (Future)
- Add protected routes
- Implement user login/signup
- Store user sessions
- Associate tasks with users

### Storage (Future)
- Persist tasks to database
- Sync across devices
- Offline support with local storage
