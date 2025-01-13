/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map((item)=>{
        if(item.profession === "developer"){
            console.log(
                `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
            );
        }
    });
    
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((item)=>{
        if(item.profession === "developer"){
            console.log(
                `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
            );
        }
    });
  }
  
  function addData() {
    let newData = {id:4, name:"susan", age:"20", profession:"intern"};
    arr.push(newData);
    arr.map((item)=>{
        console.log(
            `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
        );
    });
  }
  
  function removeAdmin() {
    arr.filter((item)=>{
        if(item.profession !== "admin"){
            console.log(
                `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
            );
        }    
    });
  }
  
  function concatenateArray() {
    let newArr = [
        { id: 5, name: "Eminem", age: "21", profession: "rapper" },
        { id: 6, name: "Tupac", age: "18", profession: "rapper" },
        { id: 7, name: "50Cent", age: "22", profession: "rapper" },
        { id: 8, name: "Snoopdogg", age: "22", profession: "rapper" }
      ];
      let finalArray = [...arr, ...newArr];
      finalArray.forEach((item)=>{
        console.log(
            `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
        );
      });
  }