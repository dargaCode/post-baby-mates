export type Styles = {
  addEditDishModal: string;
  modalCard: string;
  header: string;
  closeButton: string;
  details: string;
  name: string;
  description: string;
  notesHeader: string;
  note: string;
  inputWrapper: string;
  notes: string;
  footer: string;
  
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
