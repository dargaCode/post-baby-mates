export type Styles = {
  header: string;
  logo: string;
  cartButton: string;
  cartIcon: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
