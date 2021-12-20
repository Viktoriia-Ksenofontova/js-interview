// Balanced Brackets

// Given a string, return true if it contains all balanced parentheses (), curly-brackets {}, and square-brackets [].

// Input: String
// Output: Boolean

// variant 1 (passed 6 tests out of 7)
function isBalanced1(str) {
    let arr=str.split("");

    const brackets={
        curlyBracketsOpen:0, 
        curlyBracketsClose:0, 
        squareBracketsOpen:0, 
        squareBracketsClose:0, 
        parenthesisOpen:0, 
        parenthesisClose:0 };

    arr.map(element=>{
    switch (element) {
    case `(`:
        brackets["parenthesisOpen"]+=1;
        break;
    case `)`: 
        brackets["parenthesisClose"]+=1;
        break;
    case `{`: 
        brackets["curlyBracketsOpen"]+=1;
        break; 
    case `}`:
        brackets["curlyBracketsClose"]+=1;
        break;
    case `[`:
        brackets["squareBracketsOpen"]+=1;
        break;
    case `]`:
        brackets["squareBracketsClose"]+=1;
        break;
        }
    });

    if(brackets["parenthesisOpen"]!==brackets["parenthesisClose"] || 
    brackets["curlyBracketsOpen"]!==brackets["curlyBracketsClose"] ||
    brackets["squareBracketsOpen"]!==brackets["squareBracketsClose"]){
        return false;
    } else {
        return true;
    }
}

// variant 2
function isBalanced2(str) {
const arrOfOpenBrackets=[];
    const openBrackets="{([";
    const closeBrackets="})]";
    const matches = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i=0; i<str.length; i+=1){
        if (openBrackets.includes(str[i])){
            arrOfOpenBrackets.push(str[i]);
        } else if (closeBrackets.includes(str[i])){
        let lastBracket=arrOfOpenBrackets.pop();
            if(matches[str[i]]!==lastBracket){
            return false;
            }
        }
    }

    return !arrOfOpenBrackets.length;
}

console.log(isBalanced2('{(})'));
console.log(isBalanced1('(((10 ) ()) ((?)(:)))'));