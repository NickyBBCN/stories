export interface IProducts {
  id: string,
  name: string,
  description: string,
  account: string
}

export const dummyProductsList: IProducts[] = [
  {
    id: new Date().toJSON().toString(),
    name: "platos",
    description: "Plato 2oZ",
    account: "heheh"
  }];
