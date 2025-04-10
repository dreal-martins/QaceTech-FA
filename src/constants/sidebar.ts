import { SidebarProps } from "@/types/sidebarTypes";
import nintendoIcon from "@/assets/icons/nintendo.svg";
import ibmIcon from "@/assets/icons/ibm.svg";
import theWaltDisneyCompanyIcon from "@/assets/icons/the-walt-disney-company.svg";
import louisVuittonIcon from "@/assets/icons/louis-vuitton.svg";
import masterCardIcon from "@/assets/icons/master-card.svg";
import pizzaHutIcon from "@/assets/icons/pizza-hut.svg";
import bankOfAmericaIcon from "@/assets/icons/bank-of-america.svg";

export const sidebar: SidebarProps[] = [
  {
    title: "Nintendo",
    icon: nintendoIcon,
    link: "/",
  },
  {
    title: "IBM",
    icon: ibmIcon,
  },
  {
    title: "The Walt Disney Company",
    icon: theWaltDisneyCompanyIcon,
  },
  {
    title: "Louis Vuitton",
    icon: louisVuittonIcon,
  },
  {
    title: "MasterCard",
    icon: masterCardIcon,
  },
  {
    title: "Pizza Hut",
    icon: pizzaHutIcon,
  },
  {
    title: "MasterCard",
    icon: masterCardIcon,
  },
  {
    title: "Bank of America",
    icon: bankOfAmericaIcon,
  },
];
