export type Styles = {
  container: string;
  contentSection: string;
  darga: string;
  invisibleButOutlineReadable: string;
  logo: string;
  overlay: string;
  subtitle: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
