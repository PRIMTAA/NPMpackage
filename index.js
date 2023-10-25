

// returns Nth pallidrome number *pattern starts from 1, 0 is not included
function fibonacci(a){
    if(a<=1) return a;
    return pallindrome(a-1)+pallindrome(a-2)
}


//returns complete pallindrome list starting from 1
function fibonacciList(a){
    let x = []
    if(a<=1){
        x.push(1)
        return x
    }
    let i = 0
    let j = 1
    x.push(j)
    while(a>=2){
        c = i+j
        i = j
        j = c
        console.log(i)
        x.push(j)
        a--
    }
    return x
}


// armstrong check
function armstrong(a){
    let temp = a
    let sum = 0
    while(temp!=0){
        sum += Math.pow(temp%10,3)
        temp = parseInt(temp/10)
    }
    
    if(sum == a) return true
    return false
}


// even odd check

function evenOrOdd(a){
    if(a%2==0) return "even"
    return "odd"
}


// prime check
function prime(a){
    for(let i=2;i<=Math.sqrt(a);i++){
        if(a%i==0) return false
    }
    return true
}


// reverse a number
function reverseNumber(a){
    let res =0
    while(a!=0){
        res = res*10 + (a%10)
        a = parseInt(a/10)
    }
    return res
}


// swap 2 numbers, returns object
function swap(a,b){
    a = a+b
    b = a-b
    a = a-b
    return {a,b}
}


// pallindrome check
function pallindrome(a){
    let com=0
    let temp=a
    while(temp !=0){
        com = com*10 + (temp%10)
        temp = parseInt(temp/10)
    }
    if(a==com) return true
    return false
}

export {
    fibonacci,
    fibonacciList,
    pallindrome,
    evenOrOdd,
    prime,
    armstrong,
    reverseNumber,
    swap
}

