export type Styles = {
  app: string;
  outerFlexRow: string;
  innerFlexRow: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
