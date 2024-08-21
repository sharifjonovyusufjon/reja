/*console.log("Jasma maslahatlari!");

list = [
  "20 yoshgacha",
  "20 va 30 yoshgacha",
  "30 va 40 yoshgacha",
  "40 va 50 yoshgacha",
  "50 va 60 yoshgacha",
  "60 yoshdan yuqori",
];*/

/* function MaslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a >= 20 && a <= 30) callback(null, list[1]);
  else if (a >= 30 && a <= 40) callback(null, list[2]);
  else if (a >= 40 && a <= 50) callback(null, list[3]);
  else if (a >= 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

console.log("===== 0 =====");

MaslahatBering(60, (err, data) => {
  if (err) {
    console.log("Err:", err);
  } else {
    console.log("Javob:", data);
  }
});

console.log("===== 1 ====="); */

/*async function MaslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert number");
  else if (a <= 20) return list[0];
  else if (a >= 20 && a <= 30) return list[1];
  else if (a >= 30 && a <= 40) return list[2];
  else if (a >= 40 && a <= 50) return list[3];
  else if (a >= 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(list[5]);
      }, 1000);
    });
  }
}*/

/*console.log("===== 0 =====");*/

/* MaslahatBering(60)
  .then((data) => {
    console.log("Javob:", data);
  })
  .catch((err) => {
    console.log("Err:", err);
  }); */

/*async function run() {
  let javob = await MaslahatBering(65);
  console.log("Javob:", javob);
  javob = await MaslahatBering(20);
  console.log("Javob:", javob);
  javob = await MaslahatBering(31);
  console.log("Javob:", javob);
}
run();
console.log("===== 1 =====");*/

// A-TASK

/*function atask(e, soz) {
  let count = 0;

  for (let i = 0; i < soz.length; i++) {
    if (soz[i] === e) {
      console.log("count", count);
      count++;
    }
  }
 // console.log("count", count);
  return count;
}

console.log(atask("e", "nigerie"));*/

// typeof a !== "number"
function btask(soz) {
  let count = 0;
  const list = [];
  for (let i = 0; i < soz.length; i++) {
    list.push(soz[i]);
  }
  console.log(list);
  list.filter((ele, index) => {
    return typeof ele === "number" ? ele : null;
  });
}

console.log(btask("e", "nigerie11"));
