function hello(name) {
  debugger;

  if (typeof name === 'undefined') {
    return 'Hello!';
    
  } else {
    return `Hello, ${name}!`;
  }

}

function add(number, num) {
  return number + num;
}

hello();