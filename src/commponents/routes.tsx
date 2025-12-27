import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "./Auth/register";
import HomePage from "./homePage";
import Login from "./Auth/login";
import Role from "./role";
import { addPririty, addStatus, createTicketAction, deleteTicket, getAllTickets, getAllUsers,  setPriority, setStatus } from "../service/ticketService";
import DashboardC from "./Dashboard/customer/dashboard_c";
import { addCommentToTicket, getComentsByTicketId } from "../service/comentService";
import ShowComments from "./Dashboard/showComents";
import DashboardAg from "./Dashboard/agent/dashboard_ag";
import DashboardAd from "./Dashboard/admin/dashboard_ad";
import { addUser } from "../service/userService";
import About from "./about";
import NotFound from "../NotFound";
import ShowTickets from "./Dashboard/showTickets";
import Dashboard from "./Dashboard/dashboard";
export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: < Role roles={['customer','agent','admin']} > <Dashboard /></Role >,
      },
      {
        path: "/about",
        element: <About />,
      }
      ,
      {
        path: "dashboard_c",
        element: <Role roles={['customer']}><DashboardC /></Role>,
        action: createTicketAction,
      },
       {
        path: "/tickets",
        element: <ShowTickets />,
        loader: getAllTickets,
      },
      {
        path: "showComents/:ticketId",
        element: <Role roles={['customer', 'agent', 'admin']}><ShowComments /></Role>,
        loader: getComentsByTicketId,
        action: addCommentToTicket
      },
      {
        path: "dashboard_ag",
        element: <Role roles={['agent']}><DashboardAg /></Role>,
      },
      {
        id: "dashboardRoot",
        path: 'dashboard_ad',
        element: <Role roles={['admin']}> <DashboardAd /></Role>,
        loader: async () => {
          const tickets = await getAllTickets();
          return { tickets };
        },

        children: [
          {
            id: "dashboardChild",
            index: true,
            loader: getAllUsers,
          },
        ]
      },
      {
        path: 'updateStatus/:ticketId',
        element: <Role roles={["admin", "agent"]}> </Role>,
        action: setStatus,
      },
      {
        path: 'updatePriority/:ticketId',
        element: <Role roles={['admin']}> </Role>,
        action: setPriority,
      },
      {
        path: 'setAssignedTo/:ticketId',
        element: <Role roles={['admin']}> </Role>,
        loader: getAllUsers,
        action: setPriority,
      },
      {
        path: 'deleteTicketBt/:ticketId',
        element: <Role roles={['admin']}> </Role>,
        action: deleteTicket,
      },
      {
        path: 'addStatus',
        element: <Role roles={['admin']}></Role>,
        action: addStatus,

      },
      {
        path: 'addPriority',
        element: <Role roles={['admin']}></Role>,
        action: addPririty

      },
      {
        path: 'addUser',
        element: <Role roles={['admin']}></Role>,
        action: addUser
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

]);
export default Routes;