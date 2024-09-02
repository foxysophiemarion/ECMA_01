"use strict";
// 1
const arr = [1, 5, 7, 9];
const min = Math.min(...arr);
console.log(min);



// 2
function createCounter() {
	let count = 0;
	return {
		increment: () => ++count,
		decrement: () => --count
	};
}

const counter1 = createCounter();
const counter2 = createCounter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter2.decrement());
console.log(counter2.decrement());
console.log(counter2.decrement());

// 3
function findElementByClass(root, className) {
	if (root.classList.contains(className)) {
		return root;
	}
	for (let i = 0; i < root.children.length; i++) {
		const child = root.children[i];
		const found = findElementByClass(child, className);
		if (found) {
			return found;
		}
	}
	return null;
}
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'superclass');
console.log(targetElement);
