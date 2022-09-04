export type Styles = {
  cart: string;
  cartHeader: string;
  dishes: string;
  clearCart: string;
  checkout: string;
  checkoutCta: string;
  checkoutNote: string;
  cartTitle: string;
  cartDescription: string;
  deliverBy: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
