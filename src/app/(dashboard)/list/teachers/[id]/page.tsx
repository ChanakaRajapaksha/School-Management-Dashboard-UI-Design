"use client";

import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import FormModel from "@/components/FormModel";
import PerformanceChart from "@/components/PerformanceChart";

import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 p-4 flex-1">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="px-4 py-6 bg-rcpSky rounded-md flex flex-1 gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="profile"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">RCP Rajapaksha</h1>
                <FormModel
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "RCP Rajapaksha",
                    email: "chanaka@gmail.com",
                    password: "1234",
                    firstName: "Chanaka",
                    lastName: "Rajapaksha",
                    phone: "071 526 4449",
                    address: "No.25, Minindugama, Ratnapura",
                    bloodType: "A+",
                    dateOfBirth: "1999-07-23",
                    sex: "male",
                    img: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }}
                />
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amer consectetur adipisicing elit.
              </p>
              <div className="flex items-center flex-wrap gap-2 justify-between text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="blood" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="blood" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="blood" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="blood" width={14} height={14} />
                  <span>071 526 4449</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-between gap-4 flex-wrap">
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt="singleAttendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt="singleAttendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt="singleAttendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt="singleAttendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="text-xl font-semibold">Teacher's Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-rcpSkyLight"
              href="/list/classes"
            >
              Teacher's Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-rcpPurpleLight"
              href="/list/students"
            >
              Teacher's Students
            </Link>
            <Link
              className="p-3 rounded-md bg-rcpYellowLight"
              href="/list/lessons"
            >
              Teacher's Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/list/exams">
              Teacher's Exams
            </Link>
            <Link
              className="p-3 rounded-md bg-rcpSkyLight"
              href="/list/assignments"
            >
              Teacher's Assignments
            </Link>
          </div>
        </div>
        <PerformanceChart />
        <Announcement />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
