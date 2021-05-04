    // Instructions
    // - Show the user 4 random numbers between 1 and 100 with an alert
    // - When the user is ready to play the game... they click "OK"
    // - After 15 seconds, ask them to enter each number in order
    // - Let them know how many they got right!

    // Challenge 1
    // When asking the user for the numbers, add ordinality to each number you ask. i.e.:
    // - Enter the 1st number
    // - Enter the 2nd number
    // Etc...

    // Challenge 2
    // Turn your whole program into a function that will allow you to change the number of numbers displayed and asked for by just entering the desired number as an argument when calling the function

    // For example:

    // playMemoryTest(4) should show and ask for 4 numbers

    // playMemoryTest(10) should show and ask for 10 numbers
    const a = Math.floor((Math.random() * 100) + 1)
    const b = Math.floor((Math.random() * 100) + 1)
    const c = Math.floor((Math.random() * 100) + 1)
    const d = Math.floor((Math.random() * 100) + 1)

    const numberarray = [a, b, c, d ]
    alert(numberarray)
 
    function func(){
    const guess = prompt(' please type the  number in order')
    const  guessarray = guess.split(" ")
    const newguessarray = guessarray.map(function changeintoint(num){
        return parseInt(num)
    }
    )
    //check how many result they guess correct
    let count = 0
    for(const guess of newguessarray){
        if(numberarray.includes(guess)){
            count++
        }
    }
    alert('correct numbers amount you guess are: '+ count+' your guess are'+ guess )
    return guess
    }
   let result = setTimeout(func,8000)
    
    // then create a new array

// challenge 1 
const a = Math.floor((Math.random() * 100) + 1)
const b = Math.floor((Math.random() * 100) + 1)
const c = Math.floor((Math.random() * 100) + 1)
const d = Math.floor((Math.random() * 100) + 1)

const numberarray = [a, b, c, d ]
alert(numberarray)

function func(){
const guessone = prompt(' please type the first number in order')
const guesstwo = prompt(' please type the  second number in order')
const guessthree = prompt(' please type the third number in order')
const guessfour = prompt(' please type the forth number in order')
const guessarray = [guessone,guesstwo,guessthree,guessfour]
const newguessarray = guessarray.map(function changeintoint(num){
    return parseInt(num)
}
)
//check how many result they guess correct
let count = 0
for(const guess of newguessarray){
    if(numberarray.includes(guess)){
        count++
    }
}
alert('correct numbers amount you guess are: '+ count+' your guess are '+guessone+' '+ guesstwo+' '+guessthree+' '+guessfour)
return guess
}
let result = setTimeout(func,5000)
// chanllenge 2
function playMemoryTest(num){
    let setarray =[]
    for(let i=0;i<num;i++){
        setarray.push(Math.floor((Math.random() * 100) + 1))
    }
    alert(setarray)
    function func(){
        const guessarray = []
        for(let i =0;i<num;i++ ){
            let j = i +1
            let guess = prompt(`please type the number ${j} number in order`)
            guessarray.push(guess)
        }
        const newguessarray = guessarray.map(function changeintoint(num){
            return parseInt(num)
        }
        )
        //check how many result they guess correct
        let count = 0
        for(const guess of newguessarray){
            if(setarray.includes(guess)){
                count++
            }
        }
        alert('correct numbers amount you guess are: '+ count)
        }
    let result = setTimeout(func,15000)
}
