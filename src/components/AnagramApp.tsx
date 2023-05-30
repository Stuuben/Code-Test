import { ChangeEvent, FormEvent, useState } from "react";
import { checkAnagram } from "./CheckAnagram";

const initialUserInput = { first: "", second: "" };

export const AnagramApp = () => {
  const [userInput, setUserInput] = useState(initialUserInput);
  const [isAnagram, setIsAnagram] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = checkAnagram(userInput.first, userInput.second);
    setIsAnagram(result);
    setShowResult(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setShowResult(false);
    setIsAnagram(null);
    setUserInput(initialUserInput);
  };

  return (
    <>
      <h2>Anagram evaluator</h2>
      <p>Please enter two words</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={userInput.first}
          name="first"
        />
        <input
          type="text"
          onChange={handleChange}
          value={userInput.second}
          name="second"
        />
        <button>Check</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {showResult && isAnagram !== null && (
        <p>
          {isAnagram
            ? `${userInput.first} and ${userInput.second} are anagrams!`
            : `${userInput.first} and ${userInput.second} are not anagrams!`}
        </p>
      )}
    </>
  );
};
