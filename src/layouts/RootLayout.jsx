import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import { useMediaQuery } from "react-responsive";

function RootLayout({ children }) {
  const [open, setOpen] = useState(true);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="flex">
      <Sidebar setOpen={setOpen} open={open} />

      <main className="max-w-5xl flex-1 mx-auto pb-4 lg:ml-64">
        <Header handleToggle={handleToggle} />
        <div className="py-10">{children}</div>
      </main>
    </div>
  );
}

export default RootLayout;
