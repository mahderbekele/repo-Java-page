let text="extravaganza";
let part= text.slice(8);
console.log(part);


const food="The quick brown fox jumped over the lazy dog" ;
let x="eat";
const res=food.slice(0,4)+x+food.slice(4);
console.log(res);


const story="The quick brown fox jumped the over the lazy dog" ;
const lower=story.toLowerCase()
const result=(lower.split("the")).length-1 ;
console.log(result);
const resulttwo=(lower.split("brown")).length-1 ;
console.log(resulttwo);

let string1 = "The pupils are reading in the library"
let string2 = "The child was sitting on the table before it fell"
let are = string1.includes("are");
let sitting = string2.includes("sitting")? true:false;
console.log(are);
console.log(sitting);

let r="wonderful"
let t=r.toUpperCase()

console.log(t)
let a="amazing"
let b=a.toLowerCase()
console.log(b)
let c="UndERneath"
let d=c.toLowerCase()
console.log(d)
function toTitle(str) {
    const lowerCase = str.toLowerCase();
    const words = lowerCase.split(" ");
    const titleWords = words.map(function(word) {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return "";
      }
    });
    return titleWords.join(" ");
  }
  const wonderStr = "A wonderful world";
  const titleString = toTitle(wonderStr);
  console.log(titleString);
