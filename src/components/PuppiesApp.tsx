import { useEffect, useState } from "react";
import { IPuppies } from "../modles/IPuppies";
import axios from "axios";
import "../css/PuppiesApp.css";

export interface ISortPuppiesProps {
  puppies: IPuppies[];
}

const ACCESS_KEY = import.meta.env.VITE_REACT_APP_ACCESS_KEY;

export const PuppiesApp = () => {
  const query = "puppies";

  const [puppies, setPuppies] = useState<IPuppies[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=20`,
        {
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        }
      )
      .then((response) => {
        setPuppies(response.data.results);
      });
  }, []);

  const [selectedColor, setSelectedColor] = useState("");

  const filteredPuppies = puppies.filter((puppy) => {
    if (selectedColor === "") {
      return true;
    }
    return puppy.color === selectedColor;
  });

  const handleColors = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div>
        <h4>Sort by Color</h4>
        <span>
          <input
            type="radio"
            defaultChecked
            name="color"
            onChange={() => handleColors("")}
          />
          All
        </span>
        <span>
          <input
            type="radio"
            name="color"
            onChange={() => handleColors("#262626")}
          />
          White
        </span>
        <span>
          <input
            type="radio"
            name="color"
            onChange={() => handleColors("#d9c0c0")}
          />
          Brown
        </span>
        <span>
          <input
            type="radio"
            name="color"
            onChange={() => handleColors("#8c730c")}
          />
          Black
        </span>
      </div>
      <div className="puppy-wrapper">
        {filteredPuppies.map((puppy) => (
          <div className="puppy" key={puppy.id}>
            <img src={puppy.urls.small} alt={puppy.alt_description} />

            <p>{puppy.alt_description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
