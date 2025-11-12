//LOCAL STORAGE
//key value - funtion
//string - type
//set item() save data in local strg , getItem() access from storage  ,removeItem() at time one element , clear() delete permanently.

/*localStorage.setItem("username" , "rahul");
localStorage.setItem("userage" , "55");
localStorage.setItem("usercity" , "bhopal");
localStorage.setItem("usercountry" , "india");
localStorage.setItem("userstate" , "MP");*/

//get item
/*let name = localStorage.getItem("username")
console.log(name);

// removeItem()
localStorage.removeItem("userage")

//clear()
localStorage.clear()*/

let person = {
    name:"raj" , age:44 , city:"Bhopal"
}
localStorage.setItem("userdata",JSON.stringify(person));

let vl = JSON.parse(localStorage.getItem("userdata"))
console.log(vl.name);

