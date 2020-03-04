var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var message = 'hello world';
console.log(message);
var count = 0;
count += 1;
var done = true;
var numbers = [1, 2, 3];
var messages = ['hello', 'world'];
var mightBeUndefined = undefined;
var nullableNumber = null;
var color = 'red';
var sum = function (x, y) {
    return x + y;
};
sum(1, 2);
var sumArray = function (numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
};
var total = sumArray([1, 2, 3, 4, 5]);
var returnNothing = function () {
    console.log('I am ust saying hello world');
};
var Circle = (function () {
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var person = {
    name: '사람',
    age: 20
};
var expert = {
    name: '개발',
    skills: ['js', 'react']
};
var people = [person, expert];
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
var items = {
    list: ['a', 'b', 'c']
};
//# sourceMappingURL=practice.js.map