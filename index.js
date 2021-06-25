const sayHello = function(name) {
    console.log(`Hello, ${name}! My name is Dylan. I am figuring out the basics of setting up NPM packages.`);
}

const sayBye = function() {
    console.log('Okay bye.');
}

module.exports = {
    sayHello,
    sayBye,
};