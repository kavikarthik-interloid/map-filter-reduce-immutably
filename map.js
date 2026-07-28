const userList = [
  ["KaviKarthiK", 22, "FullStackDeveloper", 6],
  ["ArjunDev", 24, "FrontendDeveloper", 3],
  ["PriyaCodes", 21, "BackendDeveloper", 2],
  ["RahulTech", 26, "DevOpsEngineer", 5],
  ["SnehaJS", 23, "UIUXDeveloper", 4],
  ["VikramAI", 27, "MachineLearningEngineer", 6],
  ["MeeraStack", 25, "SoftwareEngineer", 4],
  ["KiranWeb", 20, "ReactDeveloper", 1],
  ["AnithaNode", 28, "CloudEngineer", 7],
  ["SureshData", 29, "DataEngineer", 8],
  ["DivyaApps", 22, "MobileAppDeveloper", 2],
];

// 1) Map all users with their details 
let developersList = userList.map((user) => {
  for (let i = 0; i < user; i++) {
    console.log(i);
  }
  return user;
});
// console.log(developersList)

// 2) Map the names of the candidates 

let developerNames = userList.map((user) => {
  const userName = user[0];
  return userName;
});
// console.log(developerNames)

// 3) converting userList into json objects 

let userDetails = userList.map(([name, age, role, experience]) => ({
  name,
  age,
  role,
  experience,
}));
console.log(userDetails);

// 4) returns a new array without modifying the original array 
 
const fruits = ["apple", "orange", "grapes"];
let upperCase = fruits.map((fruit) => fruit.toUpperCase());

// console.log(upperCase)
