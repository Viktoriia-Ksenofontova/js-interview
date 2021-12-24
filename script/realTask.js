const data=[
    {   
    "asset": 1155360,
    "displayOrder":1,
    "liability":1078314.2,
    "period":"Mar 2021"
    },
    {
    "asset": 1157919.9,
    "displayOrder":2,
    "liability":1086063.8,
    "period":"Mar 2020"
    },
    {
    "asset": 780987,
    "displayOrder":3,
    "liability":730003.9,
    "period":"Mar 2019"
    },
    {
    "asset": 720000,
    "displayOrder":4,
    "liability":676605.2,
    "period":"Mar 2018"
    }
];

// => [[{x:'Mar 2018', y:676605.2}, {...}],[{x:'Mar 2018', y:720000}, {...}]]

// data.sort(function(a,b){
//     if(Number(a.period.slice(a.period.length-5, a.period.length-1))>Number(b.period.slice(b.period.length-5, b.period.length-1))){
//         return 1;
//     }
//     else return -1;
// });

// data.sort(function(a,b){
//     if (a.displayOrder< b.displayOrder){
//         return 1;
//     } else return -1;
// });

// variant 1

// let newDataLiabilities = data.map(({period, liability}) => {
//     return {x: period, y: liability};
// });

// let newDataAssets = data.map(({period, asset}) => {
//     return  {x: period, y: asset};
// });

// const newData=[newDataLiabilities, newDataAssets];



// variant 2

// let newData2=data.reduce((acc, el)=>{
//    return [[...acc[0],{x: el.period, y: el.liability}], [...acc[1], {x: el.period, y: el.asset}]];

// },[[],[]]);


// Измерение производительности

// 2

function getNewDataUsingReduce(arr){
    const newData= arr.reduce((acc, el)=>{
        return [[{x: el.period, y: el.liability}, ...acc[0]], [{x: el.period, y: el.asset}, ...acc[1]]];
     },[[],[]]);
    
    return newData;
}

console.log(getNewDataUsingReduce(data));

let t2 = performance.now();
for (let i = 0; i < 100; i++) {
    getNewDataUsingReduce(data);
};
let t3 = performance.now();
console.log('getNewDataUsingReduce took', ((t3 - t2) / 100).toFixed(4), 'milliseconds to generate');


// 4
function getNewDataUsingReduceAndUnshift(arr){
    const newData= arr.reduce((acc, el)=>{
        acc[0].unshift({x: el.period, y: el.liability});
        acc[1].unshift({x: el.period, y: el.asset});
        return acc;
     }, [[],[]]);
    
    return newData;
};
console.log(getNewDataUsingReduceAndUnshift(data));

let t6 = performance.now();
for (let i = 0; i < 100; i++) {
    getNewDataUsingReduce(data);
};
let t7 = performance.now();
console.log('getNewDataUsingReduceAndUnshift took', ((t7 - t6) / 100).toFixed(4), 'milliseconds to generate');


// 3

function getNewDataUsingReduceAndPush(arr){
    const newData= arr.reverse().reduce((acc, el)=>{
        acc[0].push({x: el.period, y: el.liability});
        acc[1].push({x: el.period, y: el.asset});
        return acc;
     }, [[],[]]);
    
    return newData;
};
console.log(getNewDataUsingReduceAndPush(data));

let t4 = performance.now();
for (let i = 0; i < 100; i++) {
    getNewDataUsingReduce(data);
};
let t5 = performance.now();
console.log('getNewDataUsingReduceAndPush took', ((t5 - t4) / 100).toFixed(4), 'milliseconds to generate');




// 1
function getNewDataUsingMap(arr){
    arr.sort(function(a,b){
        if (a.displayOrder< b.displayOrder){
            return 1;
        } else return -1;
    });

    let newDataLiabilities = arr.map(({period, liability}) => {
        return {x: period, y: liability};
    });
    
    let newDataAssets = arr.map(({period, asset}) => {
        return  {x: period, y: asset};
    });
    
    return [newDataLiabilities, newDataAssets];
};

console.log(getNewDataUsingMap(data));


let t0 = performance.now();
for (let i = 0; i < 100; i++) {
    getNewDataUsingMap(data);
};
let t1 = performance.now();


  
console.log('getNewDataUsingMap took', ((t1 - t0) / 100).toFixed(4), 'milliseconds to generate');




// getNewDataUsingReduce took 0.0044 milliseconds to generate
// getNewDataUsingReduceAndUnshift took 0.0019 milliseconds to generate
//  getNewDataUsingReduceAndPush took 0.0018 milliseconds to generate
// getNewDataUsingMap took 0.0026 milliseconds to generate

// update
// getNewDataUsingReduce took 0.0064 milliseconds to generate
// getNewDataUsingReduceAndUnshift took 0.0029 milliseconds to generate
// getNewDataUsingReduceAndPush took 0.0006 milliseconds to generate
//  getNewDataUsingMap took 0.0013 milliseconds to generate