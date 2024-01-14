import Link from "next/link";
import styles from "@/app/styles/CreateFarmer.module.css";

export default function Page() {

  return (
    <div className={styles['created']}>
      <span>Farmer has been created!</span>
      <span>Thank You!</span>

      <Link href="/farmer/create-farmer/2c65d499cc0fe715a460d0c16eb9f65be7972c35">Click to Create A Farmer</Link>
    </div>
  )
}