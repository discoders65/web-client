import { FaScissors } from "react-icons/fa6";
import { FaTooth } from "react-icons/fa6";
import { FaShower } from "react-icons/fa6";
import { MdExpandCircleDown } from "react-icons/md";
import DogImage from "../assets/images/dog.png";
import CatImage from "../assets/images/cat.png";
import RabbitImage from "../assets/images/rabbit.png";

const GroomingServiceCategories = [
  {
    label: "Psy",
    image: DogImage,
    header: "Najczęściej wybierane usługi dla psów",
    popularServices: [
      {
        name: "Kąpiel",
        price: "150",
        time: "0.5h",
        description: "Dokładna i delikatna kąpiel, aby utrzymać sierść psa czystą i zdrową.",
      },
      {
        name: "Strzyżenie",
        price: "100",
        time: "0.5h",
        description: "Profesjonalne strzyżenie, aby Twój pies wyglądał schludnie i stylowo.",
      },
      {
        name: "Obcinanie Pazurów",
        price: "50",
        time: "0.25h",
        description: "Bezpieczne i precyzyjne obcinanie pazurów, aby zapobiec dyskomfortowi i urazom.",
      },
      {
        name: "Czyszczenie Zębów",
        price: "80",
        time: "0.25h",
        description: "Skuteczne czyszczenie zębów, aby utrzymać zdrowie jamy ustnej psa.",
      },
    ],
  },
  {
    label: "Koty",
    image: CatImage,
    header: "Najczęściej wybierane usługi dla kotów",
    popularServices: [
      {
        name: "Kąpiel",
        price: "120",
        time: "0.5h",
        description: "Delikatna kąpiel, aby utrzymać sierść kota czystą i lśniącą.",
      },
      {
        name: "Szczotkowanie Sierści",
        price: "80",
        time: "0.25h",
        description: "Regularne szczotkowanie sierści, aby zapobiegać splątaniu i zmniejszać linienie.",
      },
      {
        name: "Czyszczenie Uszu",
        price: "60",
        time: "0.25h",
        description: "Dokładne czyszczenie uszu, aby usunąć brud i zapobiegać infekcjom.",
      },
      {
        name: "Obcinanie Pazurów",
        price: "70",
        time: "0.25h",
        description: "Bezpieczne obcinanie pazurów, aby utrzymać pazury kota w dobrym stanie.",
      },
    ],
  },
  {
    label: "Króliki",
    image: RabbitImage,
    header: "Najczęściej wybierane usługi dla królików",
    popularServices: [
      {
        name: "Kąpiel",
        price: "100",
        time: "0.5h",
        description: "Ostrożna kąpiel, aby utrzymać królika czystym bez powodowania stresu.",
      },
      {
        name: "Strzyżenie Sierści",
        price: "80",
        time: "0.5h",
        description: "Profesjonalne strzyżenie, aby zarządzać sierścią królika i zapobiegać splątaniu.",
      },
      {
        name: "Piłowanie Zębów",
        price: "70",
        time: "0.25h",
        description: "Delikatne piłowanie zębów, aby zapewnić, że zęby królika są w dobrym stanie.",
      },
      {
        name: "Szczotkowanie Sierści",
        price: "60",
        time: "0.25h",
        description: "Regularne szczotkowanie sierści, aby utrzymać sierść królika gładką i bez kołtunów.",
      },
    ],
  },
];

export default GroomingServiceCategories;
