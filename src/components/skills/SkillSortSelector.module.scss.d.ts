export type Styles = {
  container: string;
  contentSection: string;
  invisibleButOutlineReadable: string;
  sort: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
