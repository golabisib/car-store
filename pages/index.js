import AllButtons from "@/components/modules/AllButtons";
import Categories from "@/components/modules/Categories";
import SearchBar from "@/components/modules/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
import Link from "next/link";

export default function Home() {
    const cars = carsData.slice(0, 3)
  return (
    <div>
        <SearchBar />
        <Categories />
        <AllButtons />
        <CarsPage data={cars} />
    </div>
  );
}
