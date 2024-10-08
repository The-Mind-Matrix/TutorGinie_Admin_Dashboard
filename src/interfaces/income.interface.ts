interface incomeProps {
  name: string;
  id: number;
  price: number;
  Icon: React.ElementType;
  percentage: number;
  iconBgColor: {
    light: string;
    dark: string;
  };
}

export type { incomeProps };
