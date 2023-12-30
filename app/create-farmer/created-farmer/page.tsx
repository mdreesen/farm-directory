import Link from "next/link";

export default function Page() {

  return (
    <div>
      <span>Farmer has been created!</span>
      <span>Thank You!</span>

      <Link href="/create-farmer">Back To Creating</Link>
    </div>
  )
}