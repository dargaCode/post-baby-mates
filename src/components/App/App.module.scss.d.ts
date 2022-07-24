export type Styles = {
  about: string;
  mainWrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;