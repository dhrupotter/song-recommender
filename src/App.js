import "./styles.css";
import { data } from "./data";
import { useState } from "react";
import { SongItem } from "./components/SongItem";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  function getUpdatedData(genre) {
    if (genre === "All") {
      return data;
    } else {
      const filteredData = data.filter((item) => item.genre === genre);
      return filteredData;
    }
  }

  function handleSelectGenre(genre) {
    setSelectedGenre(genre);
  }

  const updatedData = getUpdatedData(selectedGenre);

  return (
    <div className="App">
      <Navbar />

      <ul className="list-non-bullet nav-pills">
        <li
          className={`list-item-inline ${
            selectedGenre === "All" ? "list-item-active" : ""
          }`}
          onClick={() => handleSelectGenre("All")}
        >
          All
        </li>
        <li
          className={`list-item-inline ${
            selectedGenre === "Sad" ? "list-item-active" : ""
          }`}
          onClick={() => handleSelectGenre("Sad")}
        >
          Sad
        </li>
        <li
          className={`list-item-inline ${
            selectedGenre === "Romance" ? "list-item-active" : ""
          }`}
          onClick={() => handleSelectGenre("Romance")}
        >
          Romance
        </li>
        <li
          className={`list-item-inline ${
            selectedGenre === "Rock" ? "list-item-active" : ""
          }`}
          onClick={() => handleSelectGenre("Rock")}
        >
          Rock
        </li>
      </ul>
      {updatedData.map((song, index) => {
        return (
          <SongItem
            key={index}
            index={index}
            title={song.title}
            movie={song.movie}
            singer={song.singer}
            imgSrc={song.imgSrc}
            link={song.link}
          />
        );
      })}

      <Footer />
    </div>
  );
}
