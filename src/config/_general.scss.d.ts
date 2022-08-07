export type Styles = {
  contentSection: string;
  invisibleButOutlineReadable: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
