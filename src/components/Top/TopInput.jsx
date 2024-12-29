import { useState } from "react";

function TopInput() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");

  const handleNameChange = (e) => {
    const nameValue = e.target.value;

    //validating the names in input
    if (/\d/.test(nameValue)) {
      // \d in reg exp means integers from 0-9
      setNameError("wrong format, letters only");
    } else if (nameValue.startsWith(" ")) {
      setNameError("Name cannot start or end with a space");
    } else if (nameValue.trim() === "") {
      setNameError("wrong format, cannot be empty");
      setName(nameValue);
    } else {
      setNameError("");
      setName(nameValue);
    }
  };

  const handleNumberChange = (e) => {
    const numberValue = e.target.value;
    setNumber(numberValue);

    //validating the number in input
    const cardNumberPattern = /^(?:\d{4} ?){3}\d{4}$/;
    //     ^:
    // Asserts the start of the string.
    // (?: ... ):
    // This is a non-capturing group, which allows you to group parts of the regex without capturing them for back-references.
    // \d{4}:
    // Matches exactly four digits (0-9).
    //  ?:
    // Matches zero or one space character. This means that there can be a space after each group of four digits, but it is not required for the last group.
    // {3}:
    // Specifies that the preceding group (\d{4} ?) must occur exactly three times. This effectively allows for three sets of four digits, each optionally followed by a space.
    // \d{4}:
    // Matches the final group of exactly four digits without a following space.
    // $:
    // Asserts the end of the string.

    // if (!cardNumberPattern.test(numberValue)) {
    //   setNumberError(
    //     "Invalid format. Must be 16 digits in groups of 4 separated by spaces and shouldn't contain an alphabet."
    //   );
    // } else {
    //   setNumberError("");
    // }
    //  or
    if (numberValue.length === 0) {
      setNumberError("Card number cannot be empty.");
    } else if (numberValue.startsWith(" ")) {
      setNumberError("Card number cannot start with a space.");
    } else if (numberValue.includes("  ")) {
      setNumberError("Card number cannot have consecutive spaces.");
    } else if (!cardNumberPattern.test(numberValue)) {
      setNumberError(
        "Invalid format. Must be 16 digits in groups of 4 separated by spaces."
      );
    } else {
      setNumberError(""); // Clear error if all validations pass
    }
  };
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col gap-2 text-dark-grayish-violet">
        <label className="uppercase text-sm font-medium ">
          Cardholder Name
        </label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="John Doe"
          className={`border py-2 px-3 rounded-lg ${
            nameError ? "border-error" : "border-ligth-purple"
          }`}
        />
        {nameError && <p className="text-error text-sm">{nameError}</p>}
      </div>
      <div className="flex flex-col gap-2 text-dark-grayish-violet">
        <label className="uppercase text-sm font-medium ">
          Cardholder Nunmber
        </label>
        <input
          type="text"
          value={number}
          onChange={handleNumberChange}
          placeholder="1234 5678 9012 3456"
          className={`border py-2 px-3 rounded-lg ${
            numberError ? "border-error" : "border-ligth-purple"
          }`}
        />
        {numberError && <p className="text-error text-sm">{numberError}</p>}
      </div>
    </div>
  );
}
export default TopInput;
