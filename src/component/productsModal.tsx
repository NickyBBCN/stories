import {IProducts} from "./products.types";

type Props = {
  onClose: () => void
  data: IProducts
};

const productsModal = (props: Props) => {
  const {onClose , data} = props
  return (
    <div id="myModal"
         className="fixed z-[1px] pt-[100px] left-0 top-0 w-[100%] h-[100%] overflow-auto bg-black bg-opacity-40 	">
      <div className="m-auto p-[20px] w-[80%] border-solid rounded-sm border-zinc-400 bg-white">
        <div className="container">
          <span
            className="bg-[#aaaaaa] float-right text-[28px] font-bold cursor-pointer no-underline bg-opacity-0"
            onClick={onClose}>&times;</span>
          <h3>
            <div>
              <div>
                <label>Nombre de Producto : {data.name}</label>
              </div>
              <div>
                <label>Descripcion de Producto : {data.description}</label>
              </div>

              <div>
                <label>Cuanto vale el Producto : {data.account}</label>
              </div>

            </div>
          </h3>
          </div>
      </div>
    </div>)

};
export default productsModal;