import {IProducts} from "./products.types";

type Props = {
  list: IProducts[]
}
const ProductsList = (props: Props) => {
  const {list} = props;
  return (
    <div>
      <table className="w-[100%] bg-gray-100 border-solid border-[1px] border-black border-collapse">
        <tr className="border-solid border-[1px] border-black border-collapse">
          <th className="border-solid border-[1px] border-black border-collapse text-left">Nombre</th>
          <th className="border-solid border-[1px] border-black border-collapse text-left">descripcion</th>
          <th className="border-solid border-[1px] border-black border-collapsetext-left">valor</th>
          <th className="border-solid border-[1px] border-black border-collapsetext-left">Acciones</th>
        </tr>
        {list.map((products) => {
          console.log(products);
            return (
              <tr className="border-solid border-[1px] border-black border-collapse"
              key={products.id}>
              <td className="p-[10px] border-solid border-[1px] border-black border-collapse">{`${products.name}`}</td>
              <td className="p-[10px] border-solid border-[1px] border-black border-collapse">{`${products.description}`}</td>
              <td className="p-[10px] border-solid border-[1px] border-black border-collapse">{`${products.account}`}</td>
                <td>
                  <div>
                    <input className="w-[60px] h-[40px]  border-solid border-[1px]  border-collapse rounded-2xl bg-blue-300 mb-2" type="button" value="view"/>
                    <input className="w-[60px] h-[40px]  border-solid border-[1px]  border-collapse rounded-2xl bg-blue-300 mb-2" type="button" value="edit"/>
                    <input className="w-[60px] h-[40px]  border-solid border-[1px]  border-collapse rounded-2xl bg-blue-300 mb-2"  type="button" value="delete"/>
                  </div>
                </td>
            </tr>
            )
          }
        )}
      </table>
    </div>
  )
}
export default ProductsList;