import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";

function Sedan() {
  const SedanCars = carsData.filter((car) => car.category === "sedan");

  return <CarsList data={SedanCars} />;
}

export default Sedan;
