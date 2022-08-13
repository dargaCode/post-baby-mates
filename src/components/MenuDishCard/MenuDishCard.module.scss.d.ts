export type Styles = {
  menuDishCard: string;
  selected: string;
  leftColumn: string;
  name: string;
  description: string;
  note: string;
  rightColumn: string;
  addEdit: string;
  addButton: string;
  editButton: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
