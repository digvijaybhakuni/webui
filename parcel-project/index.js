
import './style.sass';
import { data } from './data'
console.log('This is test console log');
console.log('data', data);
console.log = (args) => { };
console.log('Oops!');

const content = `My Name is ${data.name} and a ${data.designation}, I love ${data.hobby}.`;
document.getElementById('content').innerHTML = content;
