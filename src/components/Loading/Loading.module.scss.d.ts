export type Styles = {
  container: string;
  contentSection: string;
  invisibleButOutlineReadable: string;
  loadingMessage: string;
  loadingOverlay: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
