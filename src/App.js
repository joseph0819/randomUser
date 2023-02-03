// import React from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import { useNotificationCenter } from 'react-toastify/addons/use-notification-center';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const showToastMessage = () => {
//       toast.success('Success Notification !', {
//           position: toast.POSITION.TOP_RIGHT
//       });
//       toast.error('Error Notification !', {
//         position: toast.POSITION.TOP_LEFT
//     });
//     toast.info('Info Notification !', {
//       position: toast.POSITION.BOTTOM_RIGHT
//   });
//   toast.warning('Warning Notification !', {
//     position: toast.POSITION.BOTTOM_LEFT
// });
//   };
//   return (
//       <div>
//           <button onClick={showToastMessage} className="button">Notify</button>
//           <ToastContainer />
//       </div>
//   );
// }

// export default App;

// function App(){

//   const notifyMe = () => {
//     toast.info('Welcome user !', {
//       position: toast.POSITION.TOP_RIGHT
//   });
//   toast.info('You have 15 unread mail !', {
//       position: toast.POSITION.TOP_CENTER
//   });
//   toast.info('15 minutes to lunch break!', {
//       position: toast.POSITION.TOP_LEFT
//   });
//   toast.info(' Meeting in 10 minutes !', {
//       position: toast.POSITION.BOTTOM_RIGHT
//   });
//   toast.info('Pick up your kids !', {
//       position: toast.POSITION.BOTTOM_CENTER
//   });
//   toast.info('Counsel the interns !', {
//       position: toast.POSITION.BOTTOM_LEFT
//   });
//   }

//   return (
//     <div>
//       <button onClick={notifyMe} className="button">Notify me!</button>
//       <ToastContainer />
//     </div>
//   );
// }
// export default App;
// import React from "react";
// import { ToastContainer, toast } from 'react-toastify';
//  import 'react-toastify/dist/ReactToastify.css';

// const CustomToast = ({text}) => (
//   <div>
//    <p className="text">{text}</p>
//   <button className="button1" onClick={() => toast.dismiss()}>Dismiss</button>
//   </div>
// );
// const customToast = () => {
//   toast(<CustomToast  text="This is a custom toast" />);
// };

// const App = () => (

//   <div>
//     <button onClick={customToast} className="button">Custom toast</button>
//     <ToastContainer />
//   </div>
// );

// export default App;

// function App() {

//   const store = fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
// }
// import React from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from "react";

// function App() {

//     const store = new Promise((res) =>
//     fetch("https://fakestoreapi.com/products/")
//       .then((res) => res.json())
//       .then((json) => setTimeout(() => res(json), 5000))
//   );

//   useEffect(() => {
//     toast.promise(store, {
//       pending: "logging in ...",
//       success: "Welcome user",
//       error: "Error logging in"
//     });
//   },[]);

//   return(
//     <>
//     <ToastContainer/>
//     </>
//   )
// }

// export default App;

// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const toastNotify = () => {
//     toast.success("Slide Effect!", {
//       transition: Slide,
//       position:"top-left",
//     });
//       toast.error("Zoom Effect!", {
//           transition: Zoom,
//           position:"top-right",
//         })
//         toast.warning("Flip Effect!", {
//               transition: Flip,
//               position:"bottom-left",
//             })
//         toast.info("Bounce Effect!", {
//                   transition: Bounce,
//                   position:"bottom-right",
//                 })
//   };

//   return (
//     <div className='App'>
//       <h1 className="heading">Transition Effect with React Toastify</h1>
//       <button className='button' onClick={toastNotify}>Click for transition effect!</button>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

//  function App() {
//   const toastId = React.useRef(null);
//   const message = () => toastId.current = toast("welcome user");
//   const clear = () =>  toast.dismiss(toastId.current);
//   const clearAll = () =>  toast.dismiss();
//   return (
//     <div className='App'>
//       <h1 className="heading">Clearing Single and Multiple Toasts</h1>
//       <button className="button" onClick={message}>Notify</button>
//       <button className="button" onClick={clear}>Dismiss</button>
//       <button className="button" onClick={clearAll}>Dismiss All</button>
//       <ToastContainer/>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { useNotificationCenter } from "react-toastify/addons/use-notification-center";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const App = () => {
//   const { notifications } = useNotificationCenter();
//   const message = () => {
//     toast("Added to your cart !", );
//   };
//   return (
//     <div className="container">
//       <p className="counter">
//         You've added <span>{notifications.length}</span> items to your cart.

//       </p>
//       <button className="btn" onClick={message}>
//         Add to cart
//       </button>
//       <ToastContainer />
//     </div>
//   );
// };
// export default App;

// import React from "react";
// import { Sidebar, Menu, SubMenu, MenuItem} from 'react-pro-sidebar';
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// const App = () => {
// return(
//   <div className="app" style={{ display: 'flex', height: '100vh' }}>
//  <Sidebar >
//   <Menu>
//     <SubMenu label="Charts">
//       <MenuItem> Pie charts </MenuItem>
//       <MenuItem> Line charts </MenuItem>
//     </SubMenu>
//     <MenuItem> Documentation </MenuItem>
//     <MenuItem> Calendar </MenuItem>
//     <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
//           <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
//           <MenuItem icon={<DashboardRoundedIcon />}>ontacts</MenuItem>
//           <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
//           <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
//           <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
//   </Menu>
// </Sidebar>;
// </div>
// )
// };
// export default App;

import React from "react";
<<<<<<< HEAD
import { Routes, Route, Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Home = () => {
  return (
    <>
      <h1 className="header">WELCOME TO QUICKPAY</h1>
      <h3>Bank of the free</h3>
      <p>
        The dashboard page holds all your information... Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed varius mauris ex, in aliquam mi
        fermentum ut. Phasellus augue tortor, posuere in aliquam at, facilisis
        sed neque. Donec in leo ac magna posuere euismod a vel massa.
        Pellentesque ut arcu dignissim, interdum augue in, accumsan lectus.
        Integer eu venenatis neque. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Ut cursus non
        leo eget dictum. Proin sem ipsum, bibendum vel eleifend id, iaculis id
        sem. Maecenas mauris tortor, sollicitudin eu urna sed, condimentum
        rutrum turpis. Aenean vulputate nisl nibh, vel molestie eros cursus
        porttitor. Morbi commodo aliquam dui, ut tristique nisl pharetra sit
        amet. Curabitur ac lacus bibendum, ornare elit ac, imperdiet urna.
        Phasellus sem augue, auctor quis mi a, malesuada bibendum odio. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Mauris tincidunt tortor enim, non posuere sapien
        eleifend vel.
      </p>
    </>
  );
};
const Dashboard = () => {
  return (
    <>
      <h1 className="header"> DASHBOARD PAGE</h1>
      <h3>Welcome User</h3>
      <p>
        Suspendisse lobortis risus nisi, sit amet placerat ipsum tempus quis.
        Mauris dapibus, tortor nec semper laoreet, erat odio tristique nibh, a
        convallis magna justo non nulla. Ut vitae tristique mi. Nullam at ex
        ante. Vivamus congue nisi ex, a tincidunt dolor mattis vitae. Donec
        laoreet leo augue, et dapibus magna condimentum in. Duis cursus nec
        lorem placerat euismod. Duis vitae ante non diam vestibulum volutpat.
        Pellentesque vel nunc quis odio mattis laoreet. Etiam euismod velit sed
        dapibus elementum.Aenean vulputate nisl nibh, vel molestie eros cursus
        porttitor. Morbi commodo aliquam dui, ut tristique nisl pharetra sit
        amet. Curabitur ac lacus bibendum, ornare elit ac, imperdiet urna.
        Phasellus sem augue, auctor quis mi a, malesuada bibendum odio. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Mauris tincidunt tortor enim, non posuere sapien
        eleifend vel.
      </p>
    </>
  );
};
const Transactions = () => {
  return (
    <>
      <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
      <h3>Seamless Transactions</h3>
      <p>
        Nullam ultrices nisi ac ipsum gravida, in ullamcorper leo sodales. In
        hac habitasse platea dictumst. Morbi ut pulvinar lectus. Praesent vel
        leo tortor. In viverra libero ligula, eu interdum nibh condimentum et.
        Praesent eu commodo dolor. Sed scelerisque dui tortor, non auctor est
        maximus vel. In ullamcorper tellus at sapien iaculis, eget consequat sem
        luctus. Praesent maximus elit eu dictum fringilla. Suspendisse nec
        congue turpis.Aliquam at mattis arcu, non sagittis risus. Nunc tristique
        pretium nibh, eu sagittis metus. Ut tristique ullamcorper ultrices.
        Integer tincidunt purus nec feugiat venenatis. Donec quam urna,
        ultricies non justo et, maximus egestas metus. Donec dapibus ante ac
        justo accumsan, ac vestibulum nulla sollicitudin. Duis mauris libero,
        ultricies non sem ac, auctor tempus justo. Donec hendrerit tempor
        sagittis.
      </p>
    </>
  );
};

const App = () => {
  const { collapseSidebar,rtl } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app"  >
        <Menu>
          <MenuItem
            component={<Link to="/" className="link" />}
            className="menu1"
            icon={<MenuRoundedIcon onClick={() => {
              collapseSidebar();
            }} />}
            
          >
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem
            component={<Link to="dashboard" className="link" />}
            icon={<GridViewRoundedIcon />}
          >
            Dashboard
          </MenuItem>
          <MenuItem 
          icon={<ReceiptRoundedIcon />}
          >
             Invoices </MenuItem>
             
          <SubMenu label="Charts" 
          icon={<BarChartRoundedIcon />}
          >
            <MenuItem 
            icon={<TimelineRoundedIcon />}
            > Timeline Chart </MenuItem>
            <MenuItem 
            icon={<BubbleChartRoundedIcon />}
            >Bubble Chart</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" 
          icon={<WalletRoundedIcon />}
          >
            <MenuItem 
            icon={<AccountBalanceRoundedIcon />}
            >
              Current Wallet
            </MenuItem>
            <MenuItem 
            icon={<SavingsRoundedIcon />}
            >Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link to="transactions" className="link" />}
            icon={<MonetizationOnRoundedIcon />}
          >
            Transactions
          </MenuItem>
          <SubMenu label="Settings"
           icon={<SettingsApplicationsRoundedIcon />}
           >
            <MenuItem 
            icon={<AccountCircleRoundedIcon />}
            > Account </MenuItem>
            <MenuItem 
            icon={<ShieldRoundedIcon />}
            >
               Privacy </MenuItem>
            <MenuItem 
            icon={<NotificationsRoundedIcon />}
            >
              Notifications
            </MenuItem>
          </SubMenu>
          <MenuItem 
          icon={<LogoutRoundedIcon />}
          > Logout </MenuItem>
        </Menu>
      </Sidebar>

      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </section>
    </div>
=======
import { Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Errorpage from "./Errorpage";
import Home from "./Home";
import { ErrorBoundary } from "./ErrorBoundary";
import About from "./About";

const App = () => {
  return (
    <>
      <div>
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counterpage" element={<Counter/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Errorpage/>} />
        </Routes>
        </ErrorBoundary>
    
      </div>
    </>
>>>>>>> e47ee875ffd376d2bf847aff68c5aeeeba613814
  );
};

export default App;
