import { FaScissors } from "react-icons/fa6";
import { FaTooth } from "react-icons/fa6";
import { FaShower } from "react-icons/fa6";
import { MdExpandCircleDown } from "react-icons/md";
import DogImage from "../assets/images/dog.png";
import CatImage from "../assets/images/cat.png";
import RabbitImage from "../assets/images/rabbit.png";

const GroomingServiceCategories = [
  {
    label: "Dogs",
    icon: DogImage,
    textContent:
      "Choose Groomit Arizona for exceptional pet grooming services. Our expert groomers are trained and updated on the latest techniques to provide the best care for your pets.",
  },
  {
    label: "Cats",
    icon: CatImage,
    textContent:
      "Trust Groomit Arizona, a reliable and professional pet grooming service. Our experienced groomers genuinely love animals and prioritize their care and safety.",
  },
  {
    label: "Rabbits",
    icon: RabbitImage,
    textContent:
      "Our grooming services are customized to meet your pets' unique needs. From baths and haircuts to nail trims and ear cleaning, we cater to all breeds and sizes.",
  },
];

export default GroomingServiceCategories;
