import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Event One",
    time: "12:00 PM - 2.00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: 2,
    title: "Event Two",
    time: "12:00 PM - 2.00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: 3,
    title: "Event Three",
    time: "12:00 PM - 2.00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
  },
];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-md p-4">
      <Calendar onChange={onChange} value={value} />

      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md odd:border-t-rcpSky even:border-t-rcpPurple border-t-4 border-2 border-gray-100"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
