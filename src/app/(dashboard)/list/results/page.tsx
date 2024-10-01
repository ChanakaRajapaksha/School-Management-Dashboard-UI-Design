"use client";

import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";

import { role, resultsData } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
};

const columns = [
  {
    header: "Subject",
    accessor: "subject",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderRow = (item: Result) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-rcpPurpleLight"
  >
    <td className="flex items-center gap-4 p-4">{item.subject}</td>
    <td>{item.student}</td>
    <td className="hidden md:table-cell">{item.score}</td>
    <td className="hidden md:table-cell">{item.teacher}</td>
    <td className="hidden md:table-cell">{item.class}</td>
    <td className="hidden md:table-cell">{item.date}</td>
    <td>
      <div className="flex items-start gap-2">
        {role === "admin" && (
          <>
            <FormModel table="result" type="update" data={item} />
            <FormModel table="result" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);

const ResultListPage = () => {
  return (
    <div className="flex-1 p-4 bg-white rounded-md m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
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
              <FormModel table="result" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ResultListPage;
