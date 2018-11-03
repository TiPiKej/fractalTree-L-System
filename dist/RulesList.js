class RulesList {
  constructor() {
    this.rules = document.querySelector("#c-rules");
  }
  addLi(a, b) {
    const line = (title, value = "") => {
      const titleSpan = document.createElement("span");
      titleSpan.className = `c-rules--rule-wrapper--line-wrapper--${title}-rule--title`;
      titleSpan.innerText = `${title}: `;
      const contentSpan = document.createElement("input");
      contentSpan.className = `c-rules--rule-wrapper--line-wrapper--${title}-rule--content`;
      contentSpan.type = "text";
      contentSpan.value = value;
      const lineWrapper = document.createElement("div");
      lineWrapper.className = "c-rules--rule-wrapper--line-wrapper";
      lineWrapper.appendChild(titleSpan);
      lineWrapper.appendChild(contentSpan);
      return lineWrapper;
    };
    const wrapper = document.createElement("li");
    wrapper.style.marginTop = "10px";
    wrapper.className = "c-rules--rule-wrapper";
    wrapper.appendChild(line("A", a));
    wrapper.appendChild(line("B", b));
    this.rules.appendChild(wrapper);
  }
  remLi() {
    const { childElementCount, childNodes } = this.rules;
    if (childElementCount > 1) {
      childNodes[childElementCount - 1].remove();
    }
  }
  add(data = { a: "", b: "" }) {
    this.addLi(data.a, data.b);
  }
  remove() {
    this.remLi();
  }
}
