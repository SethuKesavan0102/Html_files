// function changecolor(){   
//     document.getElementById('para').style.color = "red";
//     console.log("this paragraph color is changed");
// }

// var _a=5;   
// console.log(_a);
//                 // (cannot start with numbers)(you can use $,_,....etc)
// var _a=5;
// console.log(typeof(_a));

// var fname;
// var fname="raj";
// console.log(fname);

// const lname;
// const lname="siva";
// console.log(lname);
// (there is no redecelare for let , const,)(only redeclare for var)
// let saat;
// let saat="sk";
// console.log(saat);

// var ame="raj";
// ame="sam";
// console.log(ame);

// const kame="raj";
// kame="sam";
// console.log(kame);
// (reassign can use only for var , let)(not reassign for const )
// let hname="raj";
// hname="sam";
// console.log(hname);

    // objects:

// var person={
//     firstname:"siva",
//      // key  : values
//     lastname:"ram",
//     age:20
// };
// console.log(person);

    // primitive data type:

// var a=6;
// console.log(a);

// let b=BigInt(895765897638572347238956495);
// console.log(b);

// const c="html";
// console.log(c);

// var d=true;
// console.log(d);

// let e;
// console.log(e);

// object:(nonprimitive data type)

// var person={};
// person.firstname="siva";
// person.lastname="ram";
// person.age=20;
// console.log(person);

// array:      [0]     [1]      [2]
// var fruits=["apple","orange","banana"];
// fruits[3]="graps";
// console.log(fruits[0]);

// var fruits=[]
// fruits[0]="apple";
// fruits[1]="banana";
// console.log(fruits);


var bike = {
    name: "jawa",
    color: "green",
    modal: "perak",
    // display:function(){
    //     alert("bike modal is" + this.modal)
    // }
}

bike.modal ="perak 2.0"
console.log(bike);
bike = {...bike,year: 2024}
console.log(bike);