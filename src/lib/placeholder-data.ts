import { EmployeeStatus } from "@prisma/client";

export const jobs = [
  { id: 1, title: "UI UX Designer" },
  { id: 2, title: "Graphic Designer" },
  { id: 3, title: "Finance" },
  { id: 4, title: "Project Manager" },
  { id: 5, title: "Creative Director" },
  { id: 6, title: "Lead Designer" },
  { id: 7, title: " IT Support" },
  { id: 8, title: "3D Designer" },
  { id: 9, title: "Senior Android Developer" },
  { id: 10, title: "Frontend Engineer" },
];

export const offices = [
  { id: 1, name: "TechHub Central" },
  { id: 2, name: "Innovate Plaza" },
  { id: 3, name: "MetroTech Tower" },
  { id: 4, name: "Digital Heights" },
  { id: 5, name: "Creative Nexus" },
  { id: 6, name: "Silicon Valley Hub" },
  { id: 7, name: "DataForge Tower" },
  { id: 8, name: "Quantum Junction" },
];

export const departments = [
  { id: 1, name: "Design and Creativity" },
  { id: 2, name: "Information Technology" },
  { id: 3, name: "Project Management" },
  { id: 4, name: "Finance and Accounting" },
  { id: 5, name: "Software Development" },
];

export const employess = [
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    firstName: "Pristia",
    lastName: "Candra",
    image: "/prista.png",
    email: "lincoln@unpixel.com",
    joinDate: new Date("2022-12-02").toISOString(),
    status: EmployeeStatus.ACTIVE,
    jobId: jobs[0].id,
    departmentId: departments[0].id,
    officeId: offices[5].id,
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    firstName: "Hanna",
    lastName: "Baptista",
    image: "/hanna.png",
    email: "hanna@unpixel.com",
    joinDate: new Date("2023-10-06").toISOString(),
    status: EmployeeStatus.ON_BOARDING,
    jobId: jobs[1].id,
    departmentId: departments[0].id,
    officeId: offices[4].id,
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    firstName: "Miracle",
    lastName: "Geidt",
    image: "",
    email: "miracle@unpixel.com",
    joinDate: new Date("2023-08-05").toISOString(),
    status: EmployeeStatus.PROBATION,
    jobId: jobs[2].id,
    departmentId: departments[3].id,
    officeId: offices[6].id,
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    firstName: "Rayna",
    lastName: "Torff",
    image: "/rayna.png",
    email: "rayna@unpixel.com",
    joinDate: new Date("2022-12-07").toISOString(),
    status: EmployeeStatus.ACTIVE,
    jobId: jobs[3].id,
    departmentId: departments[2].id,
    officeId: offices[1].id,
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    firstName: "Giana",
    lastName: "Lipshutz",
    image: "/giana.png",
    email: "giana@unpixel.com",
    joinDate: new Date("2022-09-10").toISOString(),
    status: EmployeeStatus.ON_LEAVE,
    jobId: jobs[4].id,
    departmentId: departments[0].id,
    officeId: offices[4].id,
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    firstName: "James",
    lastName: "George",
    image: "/games.png",
    email: "james@unpixel.com",
    joinDate: new Date("2022-04-10").toISOString(),
    status: EmployeeStatus.ACTIVE,
    jobId: jobs[5].id,
    departmentId: departments[0].id,
    officeId: offices[4].id,
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    firstName: "Jordyn",
    lastName: "George",
    email: "jordyn@unpixel.com",
    image: "/george.png",
    joinDate: new Date("2023-06-09").toISOString(),
    status: EmployeeStatus.ON_BOARDING,
    jobId: jobs[6].id,
    departmentId: departments[1].id,
    officeId: offices[5].id,
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    firstName: "Skylar",
    lastName: "Herwitz",
    email: "skylar@unpixel.com",
    image: "",
    joinDate: new Date("2023-10-04").toISOString(),
    status: EmployeeStatus.ACTIVE,
    jobId: jobs[7].id,
    departmentId: departments[0].id,
    officeId: offices[2].id,
  },
  {
    id: "126wwd9c-c90c-4ef6-a4a8-fcf7408d3c66",
    firstName: "Farid",
    lastName: "Guluzade",
    email: "farid@unpixel.com",
    image: "",
    joinDate: new Date("2023-07-12").toISOString(),
    status: EmployeeStatus.ACTIVE,
    jobId: jobs[9].id,
    departmentId: departments[4].id,
    officeId: offices[5].id,
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea4aca9bd81aa",
    firstName: "Ilham",
    lastName: "Novruzov",
    email: "ilham@unpixel.com",
    image: "",
    joinDate: new Date("2022-06-05").toISOString(),
    status: EmployeeStatus.ACTIVE,
    jobId: jobs[2].id,
    departmentId: departments[3].id,
    officeId: offices[6].id,
  },
];
