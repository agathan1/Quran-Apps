import React from "react";

// interface Props {
//     props?: React.HTMLAttributes<HTMLDivElement>;
// }

// type Props = React.HTMLAttributes<HTMLDivElement> & {
//     children: React.ReactNode;
//     icon?: React.ReactNode;
//   };

export default function Skeleton({...props}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div role="status" className="animate-pulse">
      <div {...props}></div>
      {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span> */}
    </div>
  );
}
