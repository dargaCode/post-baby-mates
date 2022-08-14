export type Styles = {
  navigation: string;
  active: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
