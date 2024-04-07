// console.log("I am a student")
// var name=prompt("I am taking input")
// console.log(name);

// for(let i=1;i<=10;i++){
//     console.log(i*2);
// }

// let n=1
// while(n<=10){
//     console.log(n);
//     n++;
// }

// let n=prompt("i a taking input");
// if(n%2==0){
//     console.log("I am even");
// }
// else
// {
//  console.log("I am odd");
// }

// let marks=prompt("enter your marks");
// if(marks>80 &&marks<=90){
//     console.log(" A grade");
// }
// else if(marks>70 && marks<=80){
//     console.log(" B grade");
// }
// else if(marks>60 && marks<=70){
//     console.log("C grade");
// }
// else{
//     console.log("D grade");
// }

// let fname=prompt("give fname");
// let lname=prompt("give lname");
// let msg="hello "+fname+" "+lname+" you are using js!!";
// alert(msg);


//            guesss the movie


// const favmovie="Genius";
// let guess=prompt("guess my favmovie");
// while((guess!=favmovie)&&(guess!="quit")){
//     guess=prompt("wrong answer!! please try again!!");

// }
// if(guess==favmovie){
//     console.log("Congrats budy!!");
// }
// else{
//     console.log("You quited");
// }


function updateTime(id, offset) {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const localTime = new Date(utc + (3600000 * offset));
  
  const hours = localTime.getHours().toString().padStart(2, '0');
  const minutes = localTime.getMinutes().toString().padStart(2, '0');
  const seconds = localTime.getSeconds().toString().padStart(2, '0');
  
  document.getElementById(`time-${id}`).textContent = `${hours}:${minutes}:${seconds}`;
}

function updateClocks() {
  updateTime('newyork', -5); // New York (Eastern Time)
  updateTime('london', 0);    // London (GMT)
  updateTime('tokyo', 9);     // Tokyo (Japan Standard Time)
  updateTime('india', 5.5);
}

updateClocks();
setInterval(updateClocks, 1000);

document.getElementById('timezone').addEventListener('change', function() {
  const selectedTimezone = this.value;
  document.querySelectorAll('.clock').forEach(clock => {
      clock.style.display = 'none';
  });
  document.getElementById(selectedTimezone).style.display = 'flex';
});
