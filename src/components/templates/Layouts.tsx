import React from "react";

type Props = {
    children?: React.ReactNode;
};

export default function Layouts({ children }: Props) {
  return (
    <main className="bg-gray-50 overflow-y-auto">
      <div className="max-w-[600px] min-h-screen mx-auto bg-orange-100 shadow-xl ">
          {/* <Outlet /> */}
          {children}
      </div>
    </main>
  );
}
