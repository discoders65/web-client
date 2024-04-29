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
    image: DogImage,
    popularServices: [
      {
        name: "Bathing",
        price: "150$",
        time: "0.5h",
      },
      {
        name: "Hair Trimming",
        price: "100$",
        time: "0.5h",
      },
      {
        name: "Nail Clipping",
        price: "50$",
        time: "0.25h",
      },
      {
        name: "Teeth Cleaning",
        price: "80$",
        time: "0.25h",
      },
    ],
  },
  {
    label: "Cats",
    image: CatImage,
    popularServices: [
      {
        name: "Bathing",
        price: "120$",
        time: "0.5h",
      },
      {
        name: "Hair Brushing",
        price: "80$",
        time: "0.25h",
      },
      {
        name: "Ear Cleaning",
        price: "60$",
        time: "0.25h",
      },
      {
        name: "Nail Trimming",
        price: "70$",
        time: "0.25h",
      },
    ],
  },
  {
    label: "Rabbits",
    image: RabbitImage,
    popularServices: [
      {
        name: "Bathing",
        price: "100$",
        time: "0.5h",
      },
      {
        name: "Hair Trimming",
        price: "80$",
        time: "0.5h",
      },
      {
        name: "Teeth Filing",
        price: "70$",
        time: "0.25h",
      },
      {
        name: "Fur Brushing",
        price: "60$",
        time: "0.25h",
      },
    ],
  },
];

export default GroomingServiceCategories;
