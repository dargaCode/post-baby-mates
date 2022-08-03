export type Styles = {
  recipeCard: string;
  selected: string;

  leftColumn: string;
  name: string;
  description: string;
  note: string;
  rightColumn: string;
  icon: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
