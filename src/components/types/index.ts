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


export type CardItem = Item & {
  id: number,
  amount: number,
}

export type Operator = "+" | "-"