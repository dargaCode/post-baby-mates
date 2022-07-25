export type Styles = {
  menuSection: string;
  name: string;
  description: string;
  recipes: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
