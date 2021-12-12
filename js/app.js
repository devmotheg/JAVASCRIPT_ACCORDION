/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

const ACCORDION_HEADINGS_EL = document.querySelectorAll(".accordion__heading");

for (const ELE of ACCORDION_HEADINGS_EL) {
  ["click", "keypress"].forEach(cE => {
    ELE.addEventListener(cE, function () {
      if (this.nextElementSibling.style.height) {
        this.lastElementChild.innerHTML = "&plus;";
        toggleAccordion(this, "remove", null);
      } else {
        this.lastElementChild.innerHTML = "&minus;";
        toggleAccordion(
          this,
          "add",
          this.nextElementSibling.scrollHeight / 16 + "rem"
        );
      }
    });
  });
}

function toggleAccordion(node, action, height) {
  node.nextElementSibling.style.height = height;
  node.classList[action]("--active");
}
