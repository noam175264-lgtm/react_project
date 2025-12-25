# Ticket Management System

A modern, full-featured ticket management application built with **React**, **TypeScript**, and **Redux Toolkit**. This system enables organizations to manage support tickets efficiently with role-based access control for customers, agents, and administrators.

## 🎯 Overview

This is a professional-grade ticket tracking system that streamlines customer support and issue management. Users can create, update, and manage tickets with features like priority levels, status tracking, comments, and role-based permissions.

### Key Features

- 🔐 **Role-Based Access Control** - Three distinct user roles: Customer, Agent, and Admin
- 🎫 **Ticket Management** - Create, view, update, and delete support tickets
- 💬 **Comments System** - Add and view comments on tickets for collaboration
- 📊 **Dashboard Views** - Personalized dashboards for each user role
- ⚡ **Priority Management** - Assign and update ticket priorities
- 🏷️ **Status Tracking** - Update ticket status throughout lifecycle
- 👥 **User Management** - Admin-only user creation and management
- 🔐 **Authentication** - Secure login and registration system
- 📱 **Responsive Design** - Material-UI components for modern interface

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn** package manager
- A running backend API server (http://localhost:4000)

### Installation

1. **Clone or download the project:**
   ```bash
   cd project_React
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── commponents/              # React components
│   ├── Auth/                # Authentication components
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── Dashboard/           # Dashboard and feature components
│   │   ├── customer/        # Customer-specific dashboard
│   │   ├── agent/           # Agent-specific dashboard
│   │   ├── admin/           # Admin-specific dashboard
│   │   ├── addComent.tsx
│   │   ├── createTickets.tsx
│   │   ├── showComents.tsx
│   │   ├── showTickets.tsx
│   │   └── updateStatus.tsx
│   ├── about.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── homePage.tsx
│   ├── inputs.tsx
│   ├── role.tsx             # Role-based access control component
│   └── routes.tsx           # Application routing
├── service/                 # API service layer
│   ├── api.ts              # Axios instance with interceptors
│   ├── authService.ts      # Authentication API calls
│   ├── comentService.ts    # Comments API calls
│   ├── ticketService.ts    # Tickets API calls
│   └── userService.ts      # Users API calls
├── store/                  # Redux store
│   ├── authSlice.ts       # Authentication state management
│   ├── dataSlice.ts       # Data state management
│   └── store.ts           # Store configuration
├── types/                 # TypeScript type definitions
│   └── index.ts           # All application types
├── utils/                # Utility functions
│   ├── colorHelper.ts    # Color utilities
│   └── sweetAlertConfig.ts  # SweetAlert configuration
├── assets/              # Static assets
├── App.tsx             # Main app component
├── App.css            # App styles
├── main.tsx           # Application entry point
├── index.css          # Global styles
└── NotFound.tsx       # 404 page
```

## 🔑 User Roles

### 👤 Customer
- Create new support tickets
- View their own tickets
- Add comments to tickets
- Track ticket status and priority

### 👨‍💼 Agent
- View all tickets assigned to them
- Update ticket status
- Add comments to tickets
- Respond to customer inquiries

### 🔨 Admin
- Full system access
- Manage all tickets
- Create and manage users
- Configure system statuses
- Configure ticket priorities
- Assign tickets to agents
- Delete tickets

## 🛠️ Technology Stack

### Frontend
- **React** 19.2.0 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 7.2.4 - Build tool and dev server
- **React Router DOM** 7.11.0 - Client-side routing
- **Redux Toolkit** 2.11.2 - State management
- **React Redux** 9.2.0 - React bindings for Redux

### UI & Styling
- **Material-UI (MUI)** 7.3.6 - Component library
- **Emotion** 11.14.0 - CSS-in-JS styling
- **Semantic UI CSS** 2.5.0 - Additional styling

### Forms & Validation
- **React Hook Form** 7.68.0 - Form state management
- **React Select** 5.10.2 - Select component

### HTTP & Notifications
- **Axios** 1.13.2 - HTTP client
- **SweetAlert2** 11.26.10 - User notifications

### Development
- **ESLint** 9.39.1 - Code linting
- **TypeScript ESLint** 8.46.4 - TypeScript linting

## 🔌 API Integration

The application connects to a backend API running on `http://localhost:4000`. The API client is configured with:

- **Automatic JWT Authentication** - Bearer tokens are automatically added to all requests
- **Axios Interceptors** - Request interceptors handle token injection from Redux store
- **Error Handling** - Global error handling through service layer

### API Endpoints Used

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/auth/login` | User login |
| POST | `/auth/register` | User registration |
| GET | `/tickets` | Get all tickets |
| POST | `/tickets` | Create new ticket |
| PUT | `/tickets/:id` | Update ticket |
| DELETE | `/tickets/:id` | Delete ticket |
| POST | `/tickets/:id/comments` | Add comment |
| GET | `/tickets/:id/comments` | Get comments |
| GET | `/users` | Get all users |
| POST | `/users` | Create user |
| POST | `/statuses` | Add status |
| POST | `/priorities` | Add priority |

## 🔐 Authentication Flow

1. **Registration** - Users create account with name, email, and password
2. **Login** - Users authenticate with email and password
3. **Token Storage** - JWT token stored in Redux auth state
4. **Protected Routes** - Role component validates user permissions
5. **Auto-Authentication** - Token automatically included in all API requests

## 🗺️ Routes

| Path | Role | Component | Description |
|------|------|-----------|-------------|
| `/` | Public | HomePage | Landing page |
| `/home` | Public | HomePage | Home page |
| `/login` | Public | Login | Login page |
| `/register` | Public | Register | Registration page |
| `/about` | Public | About | About page |
| `/dashboard` | Customer/Agent/Admin | Role-specific Dashboard | Main dashboard |
| `/dashboard_c` | Customer | DashboardC | Customer dashboard with loader |
| `/dashboard_ag` | Agent | DashboardAg | Agent dashboard |
| `/dashboard_ad` | Admin | DashboardAd | Admin management dashboard |
| `/showComents/:ticketId` | Customer/Agent/Admin | ShowComments | Ticket comments |
| `/updateStatus/:ticketId` | Agent/Admin | - | Update ticket status (action) |
| `/updatePriority/:ticketId` | Admin | - | Update priority (action) |
| `/setAssignedTo/:ticketId` | Admin | - | Assign ticket to agent (action) |
| `/deleteTicketBt/:ticketId` | Admin | - | Delete ticket (action) |
| `/addStatus` | Admin | - | Add system status (action) |
| `/addPriority` | Admin | - | Add priority level (action) |
| `/addUser` | Admin | - | Create new user (action) |
| `*` | Public | NotFound | 404 page |

## 📊 State Management (Redux)

### Authentication State (authSlice)
- `isLoggedIn` - Boolean authentication status
- `token` - JWT token
- `user` - Current user object

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
