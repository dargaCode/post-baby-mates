export type Styles = {
  container: string;
  contentSection: string;
  count: string;
  invisibleButOutlineReadable: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
