const user = [
    {firstname:"Yesha", lastname:"shah", age:20},
    {firstname:"Riya", lastname:"shah", age:40},
    {firstname:"Diya", lastname:"shah", age:10},
];

const Fname = user.reduce((acc,curr) => {
    if(curr.age < 30){
      acc.push(curr.firstname);
    }
    return acc;
},[])

console.log(Fname)