process.stdout.write('hello from spinner1.js... \rheyyy\n');


setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 400);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 600);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 800);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

// Use setTimeout to print the newline after all the characters are written out
setTimeout(() => {
  process.stdout.write('\n');
}, 1000);