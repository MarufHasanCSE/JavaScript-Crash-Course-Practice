var lang = "Bangla";

function learn (topic){

let lang = topic;

if (true){

  let a = 5;
  //let a= 6; redelcare not allowed
  a = 6; // reassign allowed

  var b = 9;
  var b = 11; //re-declare and re-assign allowed

  const c = 5;
 // c = 8; // re-assign not allowd

  const o ={
    
    p: 5,
  };
o.p = 6; // for object, re-declearation of object not allowed, but can change property of that object.
 
 
 
  console.log(a);




}
 // console.log(a);= a not accessable as let follows block scope
  console.log(`I am Learning ${topic}`);

}

learn("JavaScript");
console.log(`I know ${lang}`)