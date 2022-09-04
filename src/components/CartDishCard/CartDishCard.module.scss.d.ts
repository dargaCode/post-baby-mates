export type Styles = {
  cartDishCard: string;
  name: string;
  edit: string;
  editIcon: string;
  notesHeader: string;
  notes: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
