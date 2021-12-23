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

data.sort(function(a,b){
    if(Number(a.period.slice(a.period.length-5, a.period.length-1))>Number(b.period.slice(b.period.length-5, b.period.length-1))){
        return 1;
    }
    else return -1;
});

// variant 1

let newDataLiabilities = data.map(({period, liability}) => {
    return {x: period, y: liability};
});

let newDataAssets = data.map(({period, asset}) => {
    return  {x: period, y: asset};
});

const newData=[newDataLiabilities, newDataAssets];

console.log(newData);

// variant 2

let newData2=data.reduce((acc, el)=>{
  return [[...acc[0],{x: el.period, y: el.liability}], [...acc[1], {x: el.period, y: el.asset}]];

},[[],[]]);

console.log(newData2);