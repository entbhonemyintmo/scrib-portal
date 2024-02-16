"use client";
import UserButton from "./user-button";

const Navbar = () => {
  return (
    <div className="flex item-center gap-x-4 p-5 bg-green-500">
      <div className="hidden lg:flex lg:flex-1">
        {/* TODO: Search Component */}
        Search
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;
