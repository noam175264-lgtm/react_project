# Ticket Management System

A modern, full-featured ticket management application built with **React 19**, **TypeScript**, **Redux Toolkit**, and **Vite**. This system enables organizations to manage support tickets efficiently with role-based access control for customers, agents, and administrators.

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [User Roles & Permissions](#user-roles--permissions)
- [API Integration](#api-integration)
- [Development](#development)

## 🎯 Overview

This is a professional-grade ticket tracking system that streamlines customer support and issue management. The application provides an intuitive interface for creating, updating, and managing support tickets with features like priority levels, status tracking, comments, and comprehensive role-based permissions. All data is persisted through a RESTful API backend.

### Key Features

- 🔐 **Role-Based Access Control** - Three distinct user roles with specific permissions:
  - **Customer**: Create tickets, view own tickets, comment on tickets
  - **Agent**: View assigned tickets, update ticket status, comment on tickets
  - **Admin**: Full system access, manage users, set priorities, manage statuses, delete tickets
  
- 🎫 **Ticket Management** 
  - Create new support tickets with subject and description
  - View all tickets with filtering and sorting capabilities
  - Update ticket details and track changes
  - Assign tickets to agents
  - Delete tickets (admin only)

- 💬 **Comments System** 
  - Add comments to tickets for collaboration
  - View comment history with author information
  - Real-time comment display

- 📊 **Dashboard Views** 
  - **Customer Dashboard**: View personal tickets, create new ones
  - **Agent Dashboard**: View assigned tickets, update status
  - **Admin Dashboard**: Full system overview, manage users, priorities, statuses

- ⚡ **Priority Management** 
  - Create and manage priority levels
  - Assign priorities to tickets
  - Update priority on demand

- 🏷️ **Status Tracking** 
  - Manage ticket statuses throughout lifecycle
  - Update status with audit trail
  - Multiple status options per workflow

- 👥 **User Management** 
  - Admin user creation and management
  - View all users in the system
  - Role assignment capabilities

- 🔐 **Authentication & Authorization** 
  - Secure login and registration system
  - JWT token-based authentication
  - Protected routes based on user roles
  - Automatic token injection in API requests

- 📱 **Responsive Design** 
  - Material-UI (MUI) components for modern interface
  - Emotion-based styling system
  - Mobile-friendly layout
  - Consistent visual design across all pages

## 🛠️ Tech Stack

### Frontend
- **React 19.2** - UI library
- **TypeScript 5.9** - Type safety
- **Vite 7.2** - Fast build tool and dev server
- **React Router 7** - Client-side routing with data loading
- **Redux Toolkit 2** - State management
- **React Redux 9** - Redux bindings for React
- **Material-UI 7** - Component library
- **Emotion** - CSS-in-JS styling
- **Axios** - HTTP client with interceptors
- **React Hook Form** - Form management
- **SweetAlert2** - User notifications and alerts
- **React Select** - Accessible select component

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TS-aware linting
- **Prettier** - Code formatting (configured via ESLint)

## 📁 Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   ├── login.tsx          # Login form and logic
│   │   └── register.tsx       # Registration form and logic
│   ├── Dashboard/
│   │   ├── dashboard.tsx      # Main dashboard router
│   │   ├── admin/             # Admin-only components
│   │   │   ├── addPriority.tsx
│   │   │   ├── addStatus.tsx
│   │   │   ├── addUser.tsx
│   │   │   ├── deleteTicketBt.tsx
│   │   │   ├── getTickesById.tsx
│   │   │   ├── setAssignedTo.tsx
│   │   │   ├── showUsers.tsx
│   │   │   ├── updatePriority.tsx
│   │   │   └── dashboard_ad.tsx
│   │   ├── agent/             # Agent-only components
│   │   │   └── dashboard_ag.tsx
│   │   ├── customer/          # Customer-only components
│   │   │   ├── createTicketDialog.tsx
│   │   │   └── dashboard_c.tsx
│   │   ├── addComent.tsx      # Add comment functionality
│   │   ├── createTickets.tsx  # Create ticket form
│   │   ├── selectors.tsx      # Selector components
│   │   ├── showComents.tsx    # Display comments
│   │   ├── showTickets.tsx    # Display tickets list
│   │   ├── showTicketsBt.tsx  # Ticket buttons
│   │   └── updateStatus.tsx   # Update ticket status
│   ├── about.tsx              # About page
│   ├── footer.tsx             # Footer component
│   ├── header.tsx             # Header/navigation
│   ├── homePage.tsx           # Home page
│   ├── inputs.tsx             # Reusable input components
│   ├── role.tsx               # Role-based access control component
│   └── routes.tsx             # Route definitions
├── service/
│   ├── api.ts                 # Axios instance with interceptors
│   ├── authService.ts         # Authentication API calls
│   ├── comentService.ts       # Comments API calls
│   ├── ticketService.ts       # Tickets API calls
│   └── userService.ts         # Users API calls
├── store/
│   ├── authSlice.ts           # Auth Redux slice
│   ├── dataSlice.ts           # Data Redux slice
│   └── store.ts               # Redux store configuration
├── types/
│   └── index.ts               # TypeScript interfaces
├── utils/
│   ├── colorHelper.ts         # Color utility functions
│   └── sweetAlertConfig.ts    # SweetAlert configurations
├── App.tsx                    # Main App component
├── App.css                    # Global styles
├── main.tsx                   # React entry point
└── index.css                  # Global CSS

public/                        # Static assets
img/                           # Image assets
```

## ✅ Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR) at `http://localhost:5173`.

### Build
```bash
npm run build
```
Compiles TypeScript and builds the project for production using Vite. Output is in the `dist/` directory.

### Preview
```bash
npm run preview
```
Preview the production build locally before deployment.

### Linting
```bash
npm run lint
```
Run ESLint to check code quality and identify issues. Fix most issues automatically with `--fix` flag.

## 👥 User Roles & Permissions

### 👤 Customer
- ✅ Create new support tickets
- ✅ View own created tickets
- ✅ Add comments to their tickets
- ✅ Track ticket status and priority
- ❌ Cannot manage other tickets or system settings

### 👨‍💼 Agent
- ✅ View assigned tickets
- ✅ Update ticket status (e.g., Open → In Progress → Closed)
- ✅ Add comments to tickets
- ✅ Respond to customer inquiries
- ❌ Cannot create tickets or manage system settings

### 🔨 Admin
- ✅ Full system access
- ✅ Manage all tickets (view, edit, delete)
- ✅ Create and manage users
- ✅ Configure system statuses
- ✅ Configure ticket priorities
- ✅ Assign tickets to agents
- ✅ View system overview and reports
- ✅ Delete any ticket from the system

## 🔌 API Integration

The application connects to a backend API running on `http://localhost:4000` with the following features:

- **Automatic JWT Authentication** - Bearer tokens automatically added to all requests from Redux state
- **Axios Interceptors** - Request interceptors inject authentication tokens
- **Centralized API Client** - Single Axios instance in `src/service/api.ts`
- **Service Layer** - Organized service files for different data domains

### Backend API Endpoints

| Method | Endpoint | Purpose | Role |
|--------|----------|---------|------|
| POST | `/auth/login` | User login | Public |
| POST | `/auth/register` | User registration | Public |
| GET | `/tickets` | Get all tickets | All |
| POST | `/tickets` | Create new ticket | Customer |
| GET | `/tickets/:id` | Get specific ticket | Authorized |
| PUT | `/tickets/:id` | Update ticket | Agent/Admin |
| DELETE | `/tickets/:id` | Delete ticket | Admin |
| POST | `/tickets/:id/comments` | Add comment | Customer/Agent/Admin |
| GET | `/tickets/:id/comments` | Get ticket comments | Authorized |
| GET | `/users` | Get all users | Admin |
| POST | `/users` | Create new user | Admin |
| GET | `/statuses` | Get all statuses | Admin |
| POST | `/statuses` | Create status | Admin |
| GET | `/priorities` | Get all priorities | Admin |
| POST | `/priorities` | Create priority | Admin |

## 🔐 Authentication & Authorization

### Authentication Flow
1. **User Registration** - New users create account with name, email, and password
2. **User Login** - Existing users authenticate with email and password
3. **Token Generation** - Backend returns JWT token on successful login
4. **Token Storage** - Token stored in Redux `authSlice` state
5. **Token Injection** - Axios interceptor automatically includes token in all requests
6. **Protected Routes** - `Role` component validates user permissions before rendering

### JWT Token
- Stored in Redux auth state
- Automatically injected in `Authorization` header as `Bearer <token>`
- Included in all API requests via Axios interceptor
- Server validates token for protected endpoints

## 🗺️ Application Routes

| Path | Component | Public | Auth Required | Roles |
|------|-----------|--------|---------------|-------|
| `/` | HomePage | ✅ | ❌ | - |
| `/home` | HomePage | ✅ | ❌ | - |
| `/login` | Login | ✅ | ❌ | - |
| `/register` | Register | ✅ | ❌ | - |
| `/about` | About | ✅ | ❌ | - |
| `/dashboard` | Dashboard (Router) | ❌ | ✅ | All |
| `/dashboard_c` | CustomerDashboard | ❌ | ✅ | Customer |
| `/dashboard_ag` | AgentDashboard | ❌ | ✅ | Agent |
| `/dashboard_ad` | AdminDashboard | ❌ | ✅ | Admin |
| `/tickets` | ShowTickets | ❌ | ✅ | All |
| `/showComents/:ticketId` | ShowComments | ❌ | ✅ | All |
| `/updateStatus/:ticketId` | Form Action | ❌ | ✅ | Agent/Admin |
| `/updatePriority/:ticketId` | Form Action | ❌ | ✅ | Admin |
| `/setAssignedTo/:ticketId` | Form Action | ❌ | ✅ | Admin |
| `/deleteTicketBt/:ticketId` | Action Handler | ❌ | ✅ | Admin |
| `/addStatus` | Action Handler | ❌ | ✅ | Admin |
| `/addPriority` | Action Handler | ❌ | ✅ | Admin |
| `/addUser` | Action Handler | ❌ | ✅ | Admin |
| `*` | NotFound | ✅ | ❌ | - |

## 📊 State Management (Redux)

The application uses Redux Toolkit for centralized state management with two main slices:

### Authentication State (`authSlice`)
```typescript
{
  isLoggedIn: boolean,      // Authentication status
  token: string | null,     // JWT token for API requests
  user: {
    id: number,
    name: string,
    email: string,
    role: string,           // 'customer' | 'agent' | 'admin'
    created_at?: string
  } | null
}
```

### Data State (`dataSlice`)
```typescript
{
  users: User[],            // All system users
  priorities: Priority[],   // Available ticket priorities
  statuses: Status[]        // Available ticket statuses
}
```

## 🎨 UI Framework & Styling

### Material-UI (MUI)
- Comprehensive component library
- Pre-built components: Button, TextField, Dialog, Table, etc.
- Consistent design system
- Responsive layout support

### Emotion
- CSS-in-JS styling solution
- Component-scoped styles
- Dynamic styling based on props
- Theme integration with MUI

### Semantic UI CSS
- Additional styling utilities
- Grid system
- Form styling

## 📱 Component Architecture

### Layout Components
- **Header** - Navigation and user menu
- **Footer** - Footer information
- **Role** - Role-based access control wrapper

### Feature Components
- **Auth Components** - Login and registration forms
- **Dashboard Components** - Role-specific dashboards
- **Ticket Components** - Ticket management (create, view, update)
- **Comment Components** - Comment display and creation

### Utility Components
- **Selectors** - Dropdown selectors for filtering
- **Inputs** - Reusable form inputs

## 🚀 Development Guidelines

### Coding Standards
- **TypeScript** - All code must be type-safe
- **ESLint** - Follow configured linting rules
- **React Best Practices** - Functional components, hooks, memoization
- **Redux Patterns** - Use slices and thunks appropriately

### File Naming
- Components: PascalCase (e.g., `MyComponent.tsx`)
- Utilities: camelCase (e.g., `colorHelper.ts`)
- Types: TypeScript definitions in `types/index.ts`

### Folder Organization
- Group by feature (Dashboard, Auth, etc.)
- Separate services, components, and utilities
- Organize components by role (admin, agent, customer)

## 🐛 Troubleshooting

### Common Issues

**API Connection Error**
- Ensure backend API is running on `http://localhost:4000`
- Check `src/service/api.ts` for correct base URL
- Verify network connectivity

**Authentication Issues**
- Clear browser localStorage to remove old tokens
- Check Redux DevTools to verify token storage
- Ensure API returns valid JWT token

**Port Already in Use**
- Frontend default: `5173`
- Change with `npm run dev -- --port 3000`
- Kill existing process using the port

**Module Not Found**
- Run `npm install` to ensure all dependencies are installed
- Check import paths match actual file locations
- Verify TypeScript configuration in `tsconfig.json`

## 📝 Type Definitions

All TypeScript interfaces are defined in `src/types/index.ts`:

- **User** - User account information
- **AuthState** - Authentication state shape
- **Ticket** - Ticket data model
- **TicketFormInput** - Form data for creating tickets
- **Priority** - Priority level definition
- **Status** - Ticket status definition
- **Comment** - Comment data model
- **DataState** - Redux data state

## 🔄 Data Flow

```
User Input (Form) → React Hook Form → Service Layer → Axios → API
                                    ↓
                            Redux Store Update
                                    ↓
                            Component Re-render
                                    ↓
                              UI Update
```

## 📦 Production Deployment

### Build Process
```bash
npm run build
```
Generates optimized production build in `dist/` directory.

### Deployment Options
- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with CI/CD
- **GitHub Pages** - Free static hosting
- **Any Static Host** - Simply upload `dist/` folder

### Environment Configuration
- Update API base URL for production backend
- Configure API endpoints in `src/service/api.ts`
- Set appropriate CORS headers on backend

## 📄 License

[Add your license information here]

## 👨‍💻 Support

For issues or questions:
1. Check troubleshooting section
2. Review Redux DevTools for state issues
3. Check browser console for errors
4. Verify API connectivity and responses

---

**Last Updated**: December 27, 2025
**Version**: 1.0.0

### Data State (dataSlice)
- `users` - Array of system users
- `priorities` - Available ticket priorities
- `statuses` - Available ticket statuses

## 🎨 Styling & Colors

The application uses Material-UI theming with custom color helpers:
- Material Design components
- Emotion CSS-in-JS styling
- Custom color utilities in `utils/colorHelper.ts`

## 📝 Type Definitions

Full TypeScript support with comprehensive types:

### User Types
- `User` - User profile object
- `AuthState` - Authentication state
- `LoginFormInput` - Login form data
- `RegisterFormInput` - Registration form data

### Ticket Types
- `Ticket` - Ticket object
- `TicketFormInput` - Ticket creation form
- `TicketAssignedTo` - Assignment data
- `Priority` - Priority level
- `Status` - Ticket status
- `Comment` - Comment object

## 🚀 Deployment

### Build Process
```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Environment Configuration

Configure the API base URL in `src/service/api.ts`:

```typescript
const api = axios.create({
    baseURL: 'http://localhost:4000', // Change for production
});
```

## 🧪 Code Quality

### Linting
```bash
npm run lint
```

Runs ESLint to check code quality and TypeScript compliance.

## 🤝 Components Overview

### Authentication Components
- **Login** - Email/password authentication
- **Register** - New user registration

### Dashboard Components
- **DashboardC** - Customer ticket management
- **DashboardAg** - Agent ticket assignment
- **DashboardAd** - Admin system management

### Shared Components
- **Header** - Navigation and user info
- **Footer** - Footer content
- **Role** - Role-based access control wrapper
- **HomePage** - Landing page

### Ticket Management
- **CreateTickets** - Ticket creation form
- **ShowTickets** - Ticket list display
- **UpdateStatus** - Status update interface
- **ShowComments** - Ticket comments display
- **AddComment** - Comment input

### Admin Tools
- **AddUser** - User creation form
- **AddStatus** - Status configuration
- **AddPriority** - Priority configuration
- **SetAssignedTo** - Ticket assignment
- **DeleteTicketBt** - Delete ticket button

## 📚 Documentation

For additional information:
- React: https://react.dev
- Redux Toolkit: https://redux-toolkit.js.org
- React Router: https://reactrouter.com
- Material-UI: https://mui.com
- TypeScript: https://www.typescriptlang.org

## 💡 Tips for Development

1. **Redux DevTools** - Install Redux DevTools browser extension for state inspection
2. **React DevTools** - Use React DevTools for component debugging
3. **Type Safety** - Always define types for new data structures
4. **Code Splitting** - Components are already set up for code splitting with React Router
5. **Environment Variables** - Create a `.env` file for configuration if needed

## 🐛 Common Issues & Solutions

### Backend Connection Issues
- Ensure backend API is running on http://localhost:4000
- Check CORS configuration on backend
- Verify token is being sent in Authorization header

### Authentication Errors
- Clear browser localStorage and try logging in again
- Check token expiration
- Verify user role is correctly set in database

### Build Errors
- Delete `node_modules` and `dist` folders
- Run `npm install` again
- Check TypeScript errors with `npm run build`

## 📄 License

This project is private/internal use only.

## 👨‍💻 Development Notes

This is a modern React application following best practices:
- ✅ TypeScript for type safety
- ✅ Redux Toolkit for state management
- ✅ React Router v7 for client-side routing
- ✅ Material-UI for consistent design
- ✅ Axios with interceptors for API calls
- ✅ Form handling with React Hook Form
- ✅ Responsive design with MUI Grid

---

**Project Status:** Active Development

**Last Updated:** December 2025
