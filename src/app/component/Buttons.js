"use client";
import Image from "next/image";
import DashIcon from "../icons/dashboard_icon.png";
import TransIcon from "../icons/transaction_icon.png";
import ScheduleIcon from "../icons/schedule_icon.png";
import UserIcon from "../icons/user_icon.png";
import SettingIcon from "../icons/setting_icon.png";
export const DashBoardIcon = () => {
  return <Image src={DashIcon} alt="dash board" />;
};
export const TransactionsIcon = () => {
  return <Image src={TransIcon} alt="dash board" />;
};
export const SchedulesIcon = () => {
  return <Image src={ScheduleIcon} alt="dash board" />;
};
export const UsersIcon = () => {
  return <Image src={UserIcon} alt="dash board" />;
};
export const SettingsIcon = () => {
  return <Image src={SettingIcon} alt="dash board" />;
};
