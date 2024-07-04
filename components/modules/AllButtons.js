import Link from "next/link"
import styles from "../../styles/AllButton.module.scss"

function AllButtons() {
  return (
    <div className={styles.container}>
        <Link href="/cars">See All</Link>
    </div>
  )
}

export default AllButtons
