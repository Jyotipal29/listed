import {
  DashBoardIcon,
  TransactionsIcon,
  SchedulesIcon,
  UsersIcon,
  SettingsIcon,
} from "../Buttons";

const Sidebar = () => {
  return (
    <div className="w-[240px] fixed top-0  left-0 z-50 hidden md:block">
      <div
        className="  relative top-[20px] 
       left-[40px]  bg-black text-white rounded-[30px]  "
      >
        <div className="h-full flex flex-col ml-12  py-12 ">
          <h1 className="text-4xl font-[700]">Board.</h1>
          <ul className="pt-16 space-y-10">
            <li className="flex  space-x-6 text-[18px] ">
              <DashBoardIcon />
              <span> Dashboard</span>
            </li>
            <li className="flex  text-white space-x-5 text-[18px]  ">
              <TransactionsIcon />
              <span>Transactions</span>
            </li>
            <li className="flex  space-x-6  text-[18px] ">
              <SchedulesIcon />
              <span>Schedules</span>
            </li>
            <li className="flex  space-x-6 text-[18px] ">
              <UsersIcon />
              <span> Users</span>
            </li>
            <li className="flex  space-x-6 text-[18px] ">
              <SettingsIcon />
              <span>Settings</span>
            </li>
          </ul>
          <div className="pt-28 space-y-5">
            <p className="text-[14px]">Help</p>
            <p className="text-[14px]">Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
