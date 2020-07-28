// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// process.stdout.write("I want to say Hi to my Mimi");
// setTimeout(() => {
//   process.stdout.write("\rI want to say I love him\n");
// }, 1000);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);