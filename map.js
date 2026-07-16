//mapped the data 
const input = [
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

let value = input.map((data) => {
//   console.log(data);
//   for (let i = 0; i < data; i++) {
//     console.log(i);
//   }
});

let allitems = input.map((item)=>{
    const value = item[0];
    // console.log(value)
})

//convert into json objects

let result = input.map(([name,age,role,experience])=> ({
    name,
    age,
    role,
    experience
}))
// console.log(result);
 

// immutable 

const fruits = ["apple","orange","grapes"];

let upper = fruits.map((fruit)=> fruit.toUpperCase())

console.log(upper)

