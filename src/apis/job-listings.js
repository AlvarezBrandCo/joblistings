import moment from 'moment';
import photosnap from "../images/photosnap.svg";
import manage from "../images/manage.svg";
import myhome from "../images/myhome.svg";
import account from "../images/account.svg";
import loop from "../images/loop-studios.svg";
import faceit from "../images/faceit.svg";
import shortly from "../images/shortly.svg";

export const listings = [
  {
    logo: photosnap,
    companyName: "Photosnap",
    title: "Senior Frontend Developer",
    postedDate: moment().subtract(1, 'days').fromNow(),
    type: "Full Time",
    location: "USA Only",
    newTag: true,
    featuredTag: true,
    keywords: ["Frontend", "Senior", "HTML", "CSS", "Javascript"]
  },
  {
    logo: manage,
    companyName: "Manage",
    title: "Full Stack Developer",
    postedDate: moment().subtract(1, 'days').fromNow(),
    type: "Part Time",
    location:"Remote",
    newTag: true,
    featuredTag: true,
    keywords: ["Fullstack", "Midweight", "Python", "React"]
  },
  {
    logo: myhome,
    companyName: "Account",
    title: "Junior Frontend Developer",
    postedDate: moment().subtract(2, 'days').fromNow(),
    type: "Part Time",
    location:"USA Only",
    newTag: true,
    featuredTag: false,
    keywords: ["testnew", "asdf"]
  },
  {
    logo: account,
    companyName: "MyHome",
    title: "Junior Frontend Developer",
    postedDate: moment().subtract(5, 'days').fromNow(),
    type: "Contract",
    location:"USA Only",
    newTag: true,
    featuredTag: false,
    keywords: ["testnew", "asdf"]
  },
    {
    logo: loop,
    companyName: "Loop Studios",
    title: "Software Engineer",
    postedDate: moment().subtract(1, 'weeks').fromNow(),
    type: "Full Time",
    location:"Worldwide",
    newTag: false,
    featuredTag: false,
    keywords: ["Fullstack", "Midweight", "Javascript", "Sass", "Ruby"]
  },
    {
    logo: faceit,
    companyName: "FaceIt",
    title: "Junior Backend Developer",
    postedDate: moment().subtract(2, 'weeks').fromNow(),
    type: "Full Time",
    location:"UK Only",
    newTag: false,
    featuredTag: false,
    keywords: ["Backend", "Junior", "Ruby", "RoR"]
  },
    {
    logo: shortly,
    companyName: "Shortly",
    title: "Junior Developer",
    postedDate: moment().subtract(2, 'weeks').fromNow(),
    type: "Full Time",
    location:"Worldwide",
    newTag: false,
    featuredTag: false,
    keywords: ["Frontend", "Junior", "HTML", "Sass", "Javascript"]
  },

]
