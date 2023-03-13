const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
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
console.info();

// Testing

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing