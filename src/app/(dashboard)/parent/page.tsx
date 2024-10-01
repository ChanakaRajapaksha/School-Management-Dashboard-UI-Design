"use client";

import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";

const ParentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row flex-1">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="p-4 bg-white h-full rounded-md">
          <h1 className="text-xl font-semibold">Schedule (RCP Rajapaksha)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
};

export default ParentPage;
