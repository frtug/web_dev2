import { useParams } from "react-router"

export default function Contact() {
    const {key} = useParams();

  return (
    <div>Contact Project Page with id {key}</div>

  )
}
