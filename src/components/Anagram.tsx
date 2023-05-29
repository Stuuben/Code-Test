import { ChangeEvent, FormEvent, useState } from "react";
import { checkAnagram } from "./CheckAnagram";

export const Anagram = () => {
  const [userInput1, setUserInput1] = useState("");
  const [userInput2, setUserInput2] = useState("");
  const [isAnagram, setIsAnagram] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = checkAnagram(userInput1, userInput2);
    setIsAnagram(result);
    setShowResult(true);
  };

  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput1(e.target.value);
  };

  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput2(e.target.value);
  };

  const handleReset = () => {
    setShowResult(false);
    setIsAnagram(null);
    setUserInput1("");
    setUserInput2("");
  };

  return (
    <>
      <h3>Anagram evaluator</h3>
      <p>Please enter two words</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange1} value={userInput1} />
        <input type="text" onChange={handleChange2} value={userInput2} />
        <button>Check</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {showResult && isAnagram !== null && (
        <p>
          {isAnagram
            ? `${userInput1} and ${userInput2} are anagrams!`
            : `${userInput1} and ${userInput2} are not anagrams!`}
        </p>
      )}
    </>
  );
};
