import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import HomeIcon from "@mui/icons-material/Home";
import Groups2Icon from "@mui/icons-material/Groups2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import courseImage from "./../../assests/images/about_us.jpg";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import inst1 from '../../assests/images/inst1.jpg';
import inst2 from '../../assests/images/inst2.jpg';
import inst3 from '../../assests/images/inst3.jpg';

export const whyUs = [
  {
    title: "Skilled Instructors",
    Icon: <SchoolIcon sx={{ fontSize: 50 }} />,
    desc: " Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu",
    id: 1,
  },
  {
    title: "Online Classes",
    Icon: <LanguageIcon sx={{ fontSize: 50 }} />,
    desc: " Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu",
    id: 2,
  },
  {
    title: "Group Discussion",
    Icon: <Groups2Icon sx={{ fontSize: 50 }} />,
    desc: " Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu",
    id: 3,
  },
  {
    title: "Home Projects",
    Icon: <HomeIcon sx={{ fontSize: 50 }} />,
    desc: " Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu",
    id: 4,
  },
];

export const aboutUs = [
  {
    title: "Skilled Instructors",
    Icon: (
      <ArrowForwardIcon
        sx={{ fontWeight: 600, color: "#34c6eb", fontSize: 20 }}
      />
    ),
    id: 1,
  },
  {
    title: "Online Classes",
    Icon: (
      <ArrowForwardIcon
        sx={{ fontWeight: 600, color: "#34c6eb", fontSize: 20 }}
      />
    ),
    id: 2,
  },
  {
    title: "Group Discussion",
    Icon: (
      <ArrowForwardIcon
        sx={{ fontWeight: "600", color: "#34c6eb", fontSize: 20 }}
      />
    ),
    id: 3,
  },
  {
    title: "Home Projects",
    Icon: (
      <ArrowForwardIcon
        sx={{ fontWeight: 600, color: "#34c6eb", fontSize: 20 }}
      />
    ),
    id: 4,
  },
];

export const coursesCategories = [
  { id: 1, img: courseImage, course: "Web development", num_of_courses: 20 },
  { id: 2, img: courseImage, course: "Web development", num_of_courses: 33 },
  { id: 3, img: courseImage, course: "Web development", num_of_courses: 19 },
  { id: 3, img: courseImage, course: "Web development", num_of_courses: 15 },
];

export const popularCourses = [
  { id: 1,img: courseImage, price:"K450.0", course:"Web development", icon: <PersonIcon sx={{color: "#34c6eb", fontSize:"20px"}}/> },
  {id: 1,img: courseImage, price:"K450.0", course:"Web development", icon: <AccessTimeIcon sx={{color: "#34c6eb", fontSize:"20px"}}/> },
  {id: 1, img: courseImage, price:"K450.0", course:"Web development", icon: <AccountCircleIcon sx={{color: "#34c6eb", fontSize:"20px"}}/>},
];

export const popularCourseInfo = [
  { id: 1, name: "John Doe", icon: <PersonIcon sx={{color: "#34c6eb", fontSize:"20px"}}/> },
  {id: 1, name: "1hr 30min" , icon: <AccessTimeIcon sx={{color: "#34c6eb", fontSize:"20px"}}/> },
  {id: 1, name: "30 Students", icon: <AccountCircleIcon sx={{color: "#34c6eb", fontSize:"20px"}}/>},
]

export const instructorsInfo = [
  { id: 1, name: "John Doe", facebook: <Facebook sx={{color: "#fff", fontSize:"20px"}} />, twitter: <Twitter sx={{color: "#fff", fontSize:"20px"}}/>, insta: <Instagram sx={{color: "#fff", fontSize:"20px"}}/>, img:inst1 },
  {id: 1, name: "Micheal Mumba" , facebook: <Facebook sx={{color: "#fff", fontSize:"20px"}} />, twitter: <Twitter sx={{color: "#fff", fontSize:"20px"}}/>, insta: <Instagram sx={{color: "#fff", fontSize:"20px"}}/>, img: inst2},
  {id: 1, name: "Wess Banda", facebook: <Facebook sx={{color: "#fff", fontSize:"20px"}} />, twitter: <Twitter sx={{color: "#fff", fontSize:"20px"}}/>, insta: <Instagram sx={{color: "#fff", fontSize:"20px"}}/>, img:inst3},
]