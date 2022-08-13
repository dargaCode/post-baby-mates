export type Styles = {
  addEditDishModal: string;
  modalCard: string;
  header: string;
  closeButton: string;
  closeIcon: string;
  details: string;
  name: string;
  description: string;
  notesHeader: string;
  note: string;
  inputWrapper: string;
  notes: string;
  footer: string;
  saveButton: string;
  removeButton: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
