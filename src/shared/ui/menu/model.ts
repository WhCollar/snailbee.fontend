export interface Item {
  label: string;
  routeName: string;
  hash?: string;
  asButton?: boolean;
  vertical?: boolean;
}

export interface Props {
  items: Item[];
  vertical?: boolean;
}
