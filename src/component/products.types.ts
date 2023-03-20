export interface IProducts {
  id: string,
  name: string,
  description: string,
  account: string
}

export enum PageEnum{
  list,
  add,
  edit
}