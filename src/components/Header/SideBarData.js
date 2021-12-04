import React from "react";

import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { AiOutlineShop } from "@react-icons/all-files/ai/AiOutlineShop";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { GrDatabase } from "@react-icons/all-files/gr/GrDatabase";
import { BiLogInCircle } from "@react-icons/all-files/bi/BiLogInCircle";
import { BiLogOutCircle } from "@react-icons/all-files/bi/BiLogOutCircle";
import { IoMdAnalytics } from "@react-icons/all-files/io/IoMdAnalytics";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";

export const SideBarDataLogIn = [
  {
    title: "ΗΟΜΕ",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "COURSES",
    path: "/courses",
    icon: <AiOutlineShop />,
    cName: "nav-text",
  },
  {
    title: "TEST",
    path: "/test",
    icon: <IoMdAnalytics />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: "/profile",
    icon: <CgProfile />,
    cName: "nav-text",
  },
  {
    title: "My Workout",
    path: "/profile",
    icon: <CgProfile />,
    cName: "nav-text",
  },
];

export const SideBarDataLogOut = [
  {
    title: "ΗΟΜΕ",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "COURSES",
    path: "/courses",
    icon: <AiOutlineShop />,
    cName: "nav-text",
  },
  {
    title: "TEST",
    path: "/test",
    icon: <IoMdAnalytics />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: "/login",
    icon: <CgProfile />,
    cName: "nav-text",
  },
];
