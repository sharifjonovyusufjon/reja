console.log("FrontEnnd javascript start");

function rejaTemplate(ele) {
  return `<li class="btnli">
              <div class="litext">${ele.reja}</div>
              <div class="btns">
                <button class="edit" data_id="${ele._id}">O'zgartirish</button
                ><button class="delete" data_id="${ele._id}">
                  O'chirish
                </button>
              </div>
            </li>`;
}
let new_reja = document.getElementById("new_reja");

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/reja", { reja: new_reja.value })
    .then((response) => {
      document
        .getElementById("ul")
        .insertAdjacentHTML("beforeend", rejaTemplate(response.data));
      new_reja.value = "";
      new_reja.focus();
    })
    .catch((err) => {
      console.log("xatolik");
    });
});
/* Delete button */
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      console.log("A frontend backend sorov");
      axios
        .post("/reja-delete", { id: e.target.getAttribute("data_id") })
        .then((response) => {
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Xatolik");
        });
    }
  }

  /* Edit button*/
  if (e.target.classList.contains("edit")) {
    let rejaInput = prompt(
      "O'zgartirishni kiriting!",
      e.target.parentElement.parentElement.querySelector(".litext").innerHTML
    );
    if (rejaInput) {
      axios
        .post("/reja-edit", {
          id: e.target.getAttribute("data_id"),
          new_input: rejaInput,
        })
        .then((response) => {
          e.target.parentElement.parentElement.querySelector(
            ".litext"
          ).innerHTML = rejaInput;
        })
        .catch((err) => {
          console.log("xatolik");
        });
    }
  }
});

document.getElementById("delete_all").addEventListener("click", function () {
  axios
    .post("/reja-all-delete", { all_delete: true })
    .then((response) => {
      alert(response.data.state);
      document.location.reload();
    })
    .catch((err) => {
      console.log("maxsus xatolik");
    });
});
