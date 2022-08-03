export type Styles = {
  recipeCard: string;
  name: string;
  description: string;
  note: string
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
