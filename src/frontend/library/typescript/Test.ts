/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
import StringValidator = Validation.StringValidator;
import ZipCodeValidator = Validation.ZipCodeValidator
let validators: { [s: string]: StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
}

