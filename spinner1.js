process.stdout.write('hello from spinner1.js... \rheyyy\n');

process.stdout.write("I want to say Hi to my Mimi");
setTimeout(() => {
  process.stdout.write("\rI want to say I love him\n");
}, 1000);