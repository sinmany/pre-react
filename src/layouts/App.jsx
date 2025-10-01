import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div>
      <div className="bg-blue-600 w-full text-white text-center py-2 font-bold uppercase ">
        <h4> Skincare Shop</h4>
      </div>
      <Outlet />
    </div>
  );
}
