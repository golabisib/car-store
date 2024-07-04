import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";


function SUV() {
    const SUVCars = carsData.filter((car) => car.category === "suv");

    return <CarsList data={SUVCars} />;
}

export default SUV
