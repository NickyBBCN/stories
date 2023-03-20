import {IProducts} from "./products.types";
import ProductsModal from "./productsModal";
import {useState} from "react";

type Props = {
  list: IProducts[];
  onDelecteClick: (data: IProducts) => void;
  onEdit: (data: IProducts) => void;

}
const ProductsList = (props: Props) => {
  const {list, onDelecteClick, onEdit} = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IProducts | null);
  const viewProducts = (data: IProducts) => {
    setShowModal(true);
    setDataToShow(data);
  }
  const onCloseModal = () => setShowModal(false);

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
                <td
                  className="p-[10px] border-solid border-[1px] border-black border-collapse">{`${products.description}`}</td>
                <td
                  className="p-[10px] border-solid border-[1px] border-black border-collapse">{`${products.account}`}</td>
                <td>
                  <div>
                    <input
                      className="w-[60px] h-[40px]  border-solid border-[1px]  border-collapse rounded-2xl bg-blue-300 mb-2"
                      type="button" value="view" onClick={() => viewProducts(products)}/>
                    <input
                      className="w-[60px] h-[40px]  border-solid border-[1px]  border-collapse rounded-2xl bg-blue-300 mb-2"
                      type="button"
                      value="edit"
                    onClick={()=>onEdit(products)}/>
                    <input
                      className="w-[60px] h-[40px]  border-solid border-[1px]  border-collapse rounded-2xl bg-blue-300 mb-2"
                      type="button"
                      value="delete"
                      onClick={() => onDelecteClick(products)}/>
                  </div>
                </td>
              </tr>
            )
          }
        )}
      </table>
      {showModal && dataToShow !== null && <ProductsModal onClose={onCloseModal} data={dataToShow}/>}

    </div>
  )
}
export default ProductsList;