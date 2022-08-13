export type Styles = {
  cartDishCard: string;
  name: string;
  edit: string;
  editIcon: string;
  notes: string;
  notesLabel: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
