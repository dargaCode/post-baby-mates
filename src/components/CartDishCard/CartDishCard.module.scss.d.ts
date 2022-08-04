export type Styles = {
  cartDishCard: string;
  name: string;
  remove: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
