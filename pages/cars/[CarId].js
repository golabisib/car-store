import DetailOfCar from "@/components/templates/DetailOfCar";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function CarDetail() {
  const router = useRouter();
  const { CarId } = router.query;
  const carDetails = carsData[CarId - 1];
  return <DetailOfCar {...carDetails} />;
}

export default CarDetail;
