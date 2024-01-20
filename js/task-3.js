'use strict';
class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = String(initialValue);
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padEnd(str) {
    this.#value = this.#value + str;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
//Audit
console.log(builder.getValue()); // "."

builder.padStart("^");
//Audit
console.log(builder.getValue()); // "^."

builder.padEnd("^");
//Audit
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
//Audit
console.log(builder.getValue()); // "=^.^="