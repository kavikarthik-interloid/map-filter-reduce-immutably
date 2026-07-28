const userList = [
  {
    name: "KaviKarthiK",
    age: 22,
    role: "FullStackDeveloper",
    experience: 1,
  },
  {
    name: "ArjunDev",
    age: 24,
    role: "FrontendDeveloper",
    experience: 3,
  },
  {
    name: "PriyaCodes",
    age: 21,
    role: "BackendDeveloper",
    experience: 2,
  },
  {
    name: "RahulTech",
    age: 26,
    role: "DevOpsEngineer",
    experience: 5,
  },
  {
    name: "SnehaJS",
    age: 23,
    role: "UIUXDeveloper",
    experience: 6,
  },
  {
    name: "VikramAI",
    age: 27,
    role: "MachineLearningEngineer",
    experience: 6,
  },
  {
    name: "MeeraStack",
    age: 25,
    role: "SoftwareEngineer",
    experience: 4,
  },
  {
    name: "KiranWeb",
    age: 20,
    role: "ReactDeveloper",
    experience: 1,
  },
  {
    name: "AnithaNode",
    age: 28,
    role: "CloudEngineer",
    experience: 7,
  },
  {
    name: "SureshData",
    age: 29,
    role: "DataEngineer",
    experience: 8,
  },
  {
    name: "DivyaApps",
    age: 22,
    role: "MobileAppDeveloper",
    experience: 2,
  },
]

// Filter users with more than 5 years of experience
const experiencedUsers = userList.filter((user) => user.experience > 5);
// console.log(user)

//Filter users with the same age
const sameAge = userList.filter((users) => users.age === 22);
console.log(sameAge)  