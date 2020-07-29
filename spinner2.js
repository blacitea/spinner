let frames = ["|", "/", "-", "\\"];

for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${frames[i % 4]}     ${i === 8 ? "\n" : ""}`);
  }, 200 * i);
}


// let loop = 0;
// let time = 100;
// while (loop < 2) {
//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, time);
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, time + 200);
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, time + 400);
//   setTimeout(() => {
//     process.stdout.write('\r\\   ');
//   }, time + 600);
//   loop++;
//   time += 700;
// }





// // Looping HELL
let loop = 0;
let time = 100;
// let anime = setInterval(() => {
for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${frames[i % 4]}     `);
  }, time * i);
}
// }, time);

// for (let j = 0; j <= 1; j++) {
//   for (let i = 0; i < frames.length; i++) {
//     console.log((200 * i) + (j * frames.length * 200));
//     setTimeout(() => process.stdout.write(`\r ${frames[i]}     `), ((200 * i) + (j * frames.length * 200)));
//     // if (j ==== 1 && i ==== 3) {
//     //   process.stdout.write(`\r |     `)
//     // }
//   }
// }

// make a loop that runs twice
//   in each loop, loop through frame
// inside frame loop, each do a timeout call of char (with time incremented)

// let anime = setInterval(() => {
//   for (let each of frame) {
//     setTimeout(() => {
//       process.stdout.write(`\r ${each}     `);
//       loop++;
//       if (loop > 8) {
//         process.stdout.write(`\r  |     \n`);
//         clearInterval(anime);
//       }
//     }, time);
//     time += 200;
//   }
//   clearInterval(anime);
// }, time);
