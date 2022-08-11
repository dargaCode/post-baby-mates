export type Styles = {
  addEditDishModal: string;
  closeButton: string;
  details: string;
  name: string;
  description: string;
  note: string;
  inputWrapper: string;
  notes: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
