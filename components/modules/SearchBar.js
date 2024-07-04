import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/SearchBar.module.scss";

function SearchBar() {
    const router = useRouter();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const searchHandler = () => {
    if (min && max) {
        router.push(`/filter/${min}/${max}`)
    } else {
      alert("Please Enter max and min Price.");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Enter min-Price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="Enter Max-Price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
