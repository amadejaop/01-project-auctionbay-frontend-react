import { Outlet } from "react-router-dom";
import TopNavigation from "./TopNavigation";

export default function Profile() {
  return (
    <>
      <TopNavigation />
      <Outlet />
    </>
  );
}
