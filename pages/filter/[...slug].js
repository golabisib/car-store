import { useRouter } from "next/router";
import styles from "../../styles/SearchBar.module.scss";
import carsData from "@/data/carsData";
import CarsList from "@/components/templates/CarsList";

function filterCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filteredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );
  if(!filteredData.length) return <h3>Not Found</h3>
  return <CarsList data={filteredData}  />;
}

export default filterCars;
