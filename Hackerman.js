// program to pretend to look like a hacker write an async function which will simplify display the following output 
// initialising hack program hacking
// hacking name username
// username found anu10
// connecting to facebook
// try to use html and styling if possible
let a =[
    "initialising hack program hacking...",
    "Connecting to facebook...",
    "Connecting to server 1...",
    "Connection failed.Retrying....",
    "Connecting to server 2...",
    "Connected Successfully...",
    "hacking yourid...",
    "Trying Brute Force...",
    "200k passwords tried...",
    "Match not found...",
    "Another 200k passwords tried....",
    "Match not found...",
    "Another 200k passwords tried....",
    "Match found...",
    "Accessing Account...",
    "Hacked your Account!"
]
const sleep =async(seconds)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(true)},seconds* 1000)
    })
}
const showHack =async(message)=>{
    await sleep(2)
    text.innerHTML = text.innerHTML+ message+"<br>"
}
(async () => {
   for(let i=0;i<a.length;i++){
    await showHack(a[i])
   }
  })();