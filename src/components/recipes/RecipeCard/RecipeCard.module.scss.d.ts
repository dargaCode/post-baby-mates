export type Styles = {
  recipeCard: string;
  recipeName: string;
  recipeDescription: string;
  recipeNote:string
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
