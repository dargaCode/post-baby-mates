export type Styles = {
  bar: string;
  button: string;
  container: string;
  contentSection: string;
  invisibleButOutlineReadable: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
