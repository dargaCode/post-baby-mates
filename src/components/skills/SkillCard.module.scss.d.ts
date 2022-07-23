export type Styles = {
  card: string;
  container: string;
  contentSection: string;
  invisibleButOutlineReadable: string;
  name: string;
  repoCount: string;
  timeSinceCommit: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
