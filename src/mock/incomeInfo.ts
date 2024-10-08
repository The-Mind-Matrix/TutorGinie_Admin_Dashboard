import ColumnUpIcon from "../assets/icons/outline/ColumnUp";
import MoneyIcon from "../assets/icons/outline/Money";

export const incomeInfo = () => {
  return [
    {
      id: 1,
      price: 949,
      percentage: 75,
      Icon: ColumnUpIcon,
      iconBgColor: {
        light: "#CCFFCD",
        dark: "#004C01",
      },
    },
    {
      id: 2,
      price: 633,
      percentage: 50,
      Icon: MoneyIcon,
      iconBgColor: {
        light: "#FFEBDD",
        dark: "#3B1900",
      },
    },
  ];
};
