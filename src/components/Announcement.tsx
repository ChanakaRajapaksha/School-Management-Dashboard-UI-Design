import Image from "next/image";

const Announcement = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-rcpSkyLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white px-1 py-2 rounded-md">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        <div className="bg-rcpPurpleLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white px-1 py-2 rounded-md">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        <div className="bg-rcpYellowLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white px-1 py-2 rounded-md">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;