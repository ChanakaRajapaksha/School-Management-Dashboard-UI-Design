"use client";

import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";

import { role, eventsData } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderRow = (item: Event) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-rcpPurpleLight"
  >
    <td className="flex items-center gap-4 p-4">{item.title}</td>
    <td>{item.class}</td>
    <td className="hidden md:table-cell">{item.date}</td>
    <td className="hidden md:table-cell">{item.startTime}</td>
    <td className="hidden md:table-cell">{item.endTime}</td>
    <td>
      <div className="flex items-start gap-2">
        {role === "admin" && (
          <>
            <FormModel table="event" type="update" data={item} />
            <FormModel table="event" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);

const EventListPage = () => {
   return (
     <div className="flex-1 p-4 bg-white rounded-md m-4 mt-0">
       {/* TOP */}
       <div className="flex items-center justify-between">
         <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
         <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
           <TableSearch />
           <div className="flex items-center justify-end gap-4">
             <button className="w-8 h-8 bg-rcpYellow rounded-full flex items-center justify-center">
               <Image src="/filter.png" alt="filter" width={14} height={14} />
             </button>
             <button className="w-8 h-8 bg-rcpYellow rounded-full flex items-center justify-center">
               <Image src="/sort.png" alt="sort" width={14} height={14} />
             </button>
             {role === "admin" && (
               <FormModel table="event" type="create" />
             )}
           </div>
         </div>
       </div>

       {/* LIST */}
       <Table columns={columns} renderRow={renderRow} data={eventsData} />

       {/* PAGINATION */}
       <Pagination />
     </div>
   );
};

export default EventListPage;
