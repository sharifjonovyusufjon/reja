// D Task

function dtask(text1, text2) {
  alpha1 = text1.split("").sort().join("");
  alpha2 = text2.split("").sort().join("");
  if (alpha1 === alpha2) {
    return true;
  } else {
    return false;
  }
}
console.log(dtask("mitgroup", "puorgtim"));

//C-TASK

/*const moment = require("moment");
const time = moment().format("HH:mm");

console.log("Bizda non, lagmon, cola bor");

class Shop {
  non;
  cola;
  lagmon;
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    return `Hozir ${time} da sizda ${this.non} ta non va ${this.lagmon} ta lagmon va ${this.cola} ta cola bor`;
  }

  sotish(nomi, soni) {
    if (nomi === "non") {
      if (this.non === 0) {
        return "Non qolmadi";
      } else if (this.non >= soni) {
        this.non -= soni;
        return `Hozir ${time} da  ${soni} non oldingiz!`;
      } else {
        return "Bunday miqdorda non mavjud emas";
      }
    } else if (nomi === "lagmon") {
      if (this.lagmon === 0) {
        return "Lagmon qolmadi";
      } else if (this.lagmon >= soni) {
        this.lagmon -= soni;
        return `Hozir ${time} da  ${soni} lagmon oldingiz!`;
      } else {
        return "Bunday miqdorda lagmon mavjud emas";
      }
    } else if (nomi === "cola") {
      if (this.cola === 0) {
        return "Cola qolmadi";
      } else if (this.cola >= soni) {
        this.cola -= soni;
        return `Hozir ${time} da  ${soni} cola oldingiz!`;
      } else {
        return "Bunday miqdorda cola mavjud emas";
      }
    } else {
      return "Mahsulot mavjud emas";
    }
  }

  qabul(nomi, soni) {
    if (nomi === "non") {
      this.non += soni;
      return `Hozir ${time} da  ${soni} non qabul qildingiz!`;
    } else if (nomi === "lagmon") {
      this.lagmon += soni;
      return `Hozir ${time} da  ${soni} lagmon qabul qildingiz!`;
    } else if (nomi === "cola") {
      this.cola += soni;
      return `Hozir ${time} da  ${soni} cola qabul qildingiz!`;
    } else {
      return "Mahsulot mavjud emas";
    }
  }
}

const story = new Shop(23, 55, 7);
console.log(story.qoldiq());
console.log(story.qabul("lagmon", 10));
console.log(story.qoldiq());*/

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
/*function btask(soz) {
  let count = 0;

  for (let i = 0; i < soz.length; i++) {
    if (!isNaN(soz[i])) {
      console.log("count", count);
      count++;
    }
  }
  // console.log("count", count);
  return count;
}

console.log(btask("333jfjjf2"));*/
