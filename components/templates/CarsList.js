import { useRouter } from "next/router";
import styles from "../../styles/CarsList.module.scss";
import Back from "../icons/Back";
import Card from "../modules/Card";

function CarsList({ data }) {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {
            data.map(item => <Card key={item.id} {...item}  />)
        }
      </div>
    </div>
  );
}

export default CarsList;
