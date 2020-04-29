// Import stylesheets
import "./style.css";
import * as _ from "lodash";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Lodash implementation</h1>`;

const dataList = [
  {
    a: 1,
    list: [
      {
        b: 1,
        aList: [1]
      },
      {
        b: 2,
        aList: [2]
      }
    ]
  },
  {
    a: 22,
    list: [
      {
        b: 22,
        aList: [11]
      },
      {
        b: 22,
        aList: [12]
      }
    ]
  }
];

// Faltten the inherited array
const result = _.flatMap(dataList, ({ a, list }) =>
  _.map(list, tag => ({ a, ...tag }))
);

console.log(result);

const dataObj = {
  a: null,
  b: '12',
  c: null
}
const key = 'b';

// Remove keys which doesn't have data values
const definedData = _.pickBy(dataObj, _.identity);

console.log(definedData[key]);
