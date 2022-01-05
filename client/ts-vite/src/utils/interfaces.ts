export interface IList {
  title: string;
  description: string;
  id: number;
  show: boolean;
}

export interface INavbar {
  themeHandler: Function;
  status: string | undefined;
}

export interface IListsListProps {}

export interface IListsListState {
  lists: Array<IList>;
  fetchedData: boolean;
}
