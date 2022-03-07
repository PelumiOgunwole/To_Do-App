/* function factorial (n) {
    //let result=1
    if (n==0){
      return 1
    }
    return n * factorial(n-1)
}

console.log(` factorial of n is ${factorial(12)}`)


function combination (n,r){
  const result= (factorial(n))/(factorial(r) * factorial( n-r) )
  return result
}

console.log(`${combination(5,3)}`) */

const data= [
  {
      id:1, 
      text: "Reading",
      day: "Feb 6th at 4:30pm",
      reminder: true
  },

  {
      id:2, 
      text: "Market",
      day: "Feb 17th at 1:30pm",
      reminder: false
  },

  {
      id:3, 
      text: "Library",
      day: "Nov 12th at 10:00 am",
      reminder: true
  }
]

 const data2= [
  {
      id:1, 
      text: "Hospital",
      day: "Feb 6th at 4:30pm",
      reminder: true
  },

  {
      id:2, 
      text: "School",
      day: "Feb 17th at 1:30pm",
      reminder: false
  },

  {
      id:3, 
      text: "Party",
      day: "Nov 12th at 10:00 am",
      reminder: true
  }
]

const res=[...data,...data2]
console.log(res)