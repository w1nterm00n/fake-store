export type Item = {
    title: string,
    category: string,
    description: string,
    image: string
  }

export type ApiProduct = {
    title: string;
    category: string;
    description: string;
    image: string;
  };


export type CartItem = Item & {
  id: number,
  amount?: number,
  price: number
}

export type CartOutletContext = [
  CartItem[],
  React.Dispatch<React.SetStateAction<CartItem[]>>,
  ChangeAmountFn: (id: number, operator: Operator) => void,
  DeleteItemFn: (id: number) => void
];


export type Operator = "+" | "-"