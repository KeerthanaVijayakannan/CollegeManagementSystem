import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

// context
import { UserProvider } from "./Hooks/UserContext";

// components
import Loading from "./Components/Layouts/Loading";
import Footer from "./Components/Footer";
// layouts
import AppLayout from "./Components/Layouts/AppLayout";
import Layout from "./Components/Layouts/Layout";
import Dash from "./Components/Layouts/Dash";
import ErrorElement from "./Components/Layouts/ErrorElement";
import AttendanceLayout from "./Components/Layouts/AttendanceLayout";
import InternalLayout from "./Components/Layouts/InternalLayout";
import RegisterLayout from "./Components/Layouts/RegisterLayout";

// queries
import Paper from "./Components/Queries/Paper";
import Notes from "./Components/Queries/Notes";
import StudentsList from "./Components/Queries/StudentsList";
import Profile from "./Components/Queries/Profile";
import MyMessage from "./Components/Queries/MyMessage";
import Chat from "./Components/Queries/Chat";
import Contact from "./Components/Queries/Contact";
import LandingPageCMS from "./Components/Queries/LandingPageCMS";
import Institution from "./Components/Queries/Institution";
import Management from "./Components/Queries/Management";
import VisionMission from "./Components/Queries/VissionMission";
import CoreValues from "./Components/Queries/CoreValues";
import Events from "./Components/Queries/Events";
import Principal from "./Components/Queries/Principal";
import AcademicsSection from "./Components/Queries/Academics";

// forms
import StaffForm from "./Components/Forms/StaffForm";
import StudentForm from "./Components/Forms/StudentForm";
import NotesForm from "./Components/Forms/NotesForm";
import TimeScheduleForm from "./Components/Forms/TimeScheduleForm";
import Login from "./Components/Forms/Login";
import CivilEngineering from "./Components/Queries/CivilEngineering";
import ComputerScienceEngineering from "./Components/Queries/ComputerScienceEngineering";
import Iot from "./Components/Queries/Iot";
import Aiml from "./Components/Queries/Aiml";
import Cyber from "./Components/Queries/Cyber";
import Eee from "./Components/Queries/Eee";
import Ece from "./Components/Queries/Ece";
import Mech from "./Components/Queries/Mech";
import SandH from "./Components/Queries/SandH";
import Feedback from "./Components/Queries/Feedback";

// lazy loading user specific components
const StaffApproval = lazy(() =>
  import("./Components/Queries/StaffApproval")
);
const PaperForm = lazy(() => import("./Components/Forms/PaperForm"));
const JoinPaper = lazy(() => import("./Components/Forms/JoinPaper"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />} errorElement={<ErrorElement />}>
      {/* Define the route for the landing page */}
      <Route path="/" element={<LandingPageCMS />} />
      
        <Route path="/" element={<LandingPageCMS />} />
        <Route path="/civil" element={<CivilEngineering />} />
        <Route path="/cse" element={<ComputerScienceEngineering/>}/>
        <Route path="/iot" element={<Iot/>}/>
        <Route path="/aiml" element={<Aiml/>}/>
        <Route path="/cyber" element={<Cyber/>}/>
        <Route path="/eee" element={<Eee/>}/>
        <Route path="/ece" element={<Ece/>}/>
        <Route path="/mech" element={<Mech/>}/>
        <Route path="/science-humanities" element={<SandH/>}/>
        <Route path="/institution" element={<Institution />} />
        <Route path="/management" element={<Management />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/core-values" element={<CoreValues />} />
        <Route path="/events" element={<Events />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/academics" element={<AcademicsSection/>}/>
      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterLayout />}>
          <Route path="reg_staff" element={<StaffForm />} />
          <Route path="reg_student" element={<StudentForm />} />
        </Route>
        <Route
          path="/dash"
          element={<Layout />}
          errorElement={<ErrorElement />}
        >
          <Route index element={<Dash />} />
          <Route path="paper" element={<Paper />} />
          <Route path="paper/:paper" element={<Notes />} />
          <Route path="paper/:paper/add" element={<NotesForm />} />
          <Route path="paper/:paper/:note/edit" element={<NotesForm />} />
          <Route path="paper/:paper/students" element={<StudentsList />} />
          <Route path="attendance" element={<AttendanceLayout />} />
          <Route path="internal" element={<InternalLayout />} />
          <Route path="time_schedule" element={<TimeScheduleForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path="myMessage" element={<MyMessage />} />
          <Route path="chat" element={<Chat />} />
          
          <Route path="contact" element={<Contact />} />
          <Route
            path="approve_staff"
            element={
              <Suspense fallback={<Loading />}>
                <StaffApproval />
              </Suspense>
            }
          />
          <Route
            path="add_paper"
            element={
              <Suspense fallback={<Loading />}>
                <PaperForm />
              </Suspense>
            }
          />
          <Route
            path="join_paper"
            element={
              
                <JoinPaper />
            
            }
          />
        </Route>
      </Route>
    )
  );

  return (
    <UserProvider>
      <RouterProvider router={router} />
      <ToastContainer
        className="toast"
        toastClassName="toast-rounded"
        bodyClassName="toast-body"
        // progressClassName="toast-progress"
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        hideProgressBar={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Feedback/>
      <Footer/>
    </UserProvider>
    
  );
}

export default App;
