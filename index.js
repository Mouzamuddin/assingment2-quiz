var readlinesync = require("readline-sync");
var chalk = require("chalk")
var touppercase = require("upper-case")
var score=0
var username =readlinesync.question(chalk.yellow("What is your name: "))
console.log(chalk.red("welcome "+username))

questions = 
[
	{
		question:chalk.blue( `
	What country is also known as Persia?
  A. Iran
  B. Iraq
  C. Istambul
  D. Mozambique\n`),
		answer: "A"
	},
	{
		question: chalk.blue(`
	What name is given to the northeast part of China?
  A. Manchuria
  B. Beijing
  C. Chinovu
  D. Bachavu\n`),
		answer: "A"
	},
	{
		question:chalk.blue( `
	Which of the following countries are separated by the Strait of Gibraltar?
  A. Portugal and Morocco
  B. Algeria and Spain
  C. Morroco and Spain
  D. Algeria and Portugal\n`),
		answer: "C"
	},
	{
		question:chalk.blue( `
	The Great Victoria Desert is located in
A. Canada
B. West Africa
C. Australia
D. North America\n`),
		answer: "C"
	},
  {
		question: chalk.blue(`
	Ceylon is the former name of what country?
  A. India  
  B. Sri Lanka
  C. Pakistan
  D. Myanmar\n`),
		answer: "B"
	},
  {
		question:chalk.blue( `
	In India, the ports are categorized as major and non-major ports. Which one of the following is a non-major port?
  A. Kochi (Cochin)
  B. Dahej  
  C. Paradip
  D. New Mangalore\n`),
		answer: "D"
	},
  {
		question:chalk.blue( `
	In India, which one of the following States has the largest inland saline wetland?
  A. Gujarat
  B. Haryana
  C. Madhya Pradesh
  D. Rajasthan\n`),
		answer: "D"
	},
  {
		question: chalk.blue(`
	Which one of the following is the greatest circle?
  A. Arctic Circle
  B. Equator
  C. Tropic of Cancer
  D. Tropic of Capricorn\n`),
		answer: "A"
	},
];


function quiz(question,answer)
{
  var userans = (readlinesync.question(question))
  if (userans.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green("correct answer"))
    score++
  }
  else
  {
    console.log(chalk.red("wrong answer"))
    console.log(chalk.bgCyan("correct answer is "+ answer))
    score--
  }
  console.log(chalk.green("current score ") ,chalk.red(score))
}


for (i=0;i<questions.length;i++)
{
  var currentquestion = questions[i]
  quiz(currentquestion.question,currentquestion.answer)
   if(score<5 && currentquestion==questions[5])
  {
    console.log("Cannot proceed to level to insufficient score ")
    break;
  }
  
}
console.log(chalk.bgYellow("your final score is ",score))
console.log(questions.length)