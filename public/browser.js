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
    .catch((err) => {});
});
