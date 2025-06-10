const myFullname="RUSHI K TRIVEDI";
const myStudentNumber="1214179";

const result=`${myFullname}- ${myStudentNumber}`;
console.log(result);



const primaryHeadingContent=document.querySelector("h1");
console.log(primaryHeadingContent.innerHTML);

primaryHeadingContent.classList.add("primaryHeadings");
primaryHeadingContent.innerHTML="RUSHI K TRIVEDI-1214179";
