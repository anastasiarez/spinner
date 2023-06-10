const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;

for (const char of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);

  delay += 100;
}

// Use setTimeout to print the newline after all the characters are written out
setTimeout(() => {
  process.stdout.write('\n');
}, delay);
