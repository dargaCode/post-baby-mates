export type Styles = {
  app: string;
  headerWrapper: string;
  aboutAndCartRow: string;
  aboutColumn: string;
  aboutWrapper: string;
  navAndMenuRow: string;
  navWrapper: string;
  menuWrapper: string;
  cartWrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
