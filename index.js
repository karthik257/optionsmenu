// Taking standard input and output
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Initial Books in array
let booksArray = ["Learn C", "DBMS"];

function books() {
  readline.question(`Select options 1 or 2 or 3: `, (option) => {
    if (option === "1") {
      console.log(booksArray);
      books();
    } else if (option === "2") {
      readline.question(`Add any book which you like `, (answer) => {
        booksArray.push(answer);
        console.log(booksArray);
        console.log(`Added ${answer} successfully!`);
        books();
      });
    } else if (option === "3") {
      readline.question(
        `Are you sure you want to quit - press Y to quit `,
        (answer) => {
          if (answer === "Y" || answer === "y") {
            console.log("Bye Bye..!");
            readline.close();
            return;
          }
        }
      );
    } else if (option <= 0 || option >= 4) {
      console.log(
        "You have selected an invalid entry so please press 1, 2 or 3"
      );
      books();
    }
  });
}

books();
