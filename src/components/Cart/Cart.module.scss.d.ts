export type Styles = {
  cart: string;
  dishes: string;
  clearCart: string;
  cartTitle:string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
