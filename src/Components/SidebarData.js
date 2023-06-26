import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Departments",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "All Departments ",
        path: "/departmenttable",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Employee",
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add New",
        path: "/addemployeeform",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Update",
        path: "/updateemployee",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Delete",
        path: "/deleteemployee",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Single Employee Record",
        path: "/employeedetails",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "All Records",
        path: "/employeetable",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
