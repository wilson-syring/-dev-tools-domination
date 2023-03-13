const dogs = [{ name: 'Taco', age: 5 },{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#2c248d';
    p.style.fontSize = '50px';
    console.log(p);
    console.dir(p);
}

// Regular
console.log('welcome');

// Interpolated
console.log('welcome to the %s show','💩');

// Styled
console.log('%c Welcome to the thunderdome!','font-size: 25px; background:red; text-shadow: 5px 5px 0 black; color: green; ');

// warning!
console.warn('Warning!');

// Error :|
console.error('❌');

// Info
console.info('SpaceX will take us to Mars and beyond!');

// Testing
console.assert(25 === '25','The number 25 is not a string object');

// clearing
// console.clear();

// Viewing DOM Elements
// console.log(p);
// console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`My dogs name is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} years old in dog years`);
    console.groupEnd(`${dog.name}`);
})
// counting
console.count('Whittey');
console.count('Whittey');
console.count('Whittey');
console.count('Whittey');
console.count('Whittey');

// timing
console.time('fetching data');
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data');
      console.table(data);
});