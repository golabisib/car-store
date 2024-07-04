import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";


function Sport() {
    const SportCars = carsData.filter((car) => car.category === "sport");

    return <CarsList data={SportCars} />;
}

export default Sport
