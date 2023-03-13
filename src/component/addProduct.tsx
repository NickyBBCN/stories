import {useState} from "react";
import {IProducts} from "./products.types";

type Props = {
  onBackBtnClick: () => void
  onSubmitClick: (data: IProducts) => void
}
const AddProduct = (props: Props) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [acount, setCount] = useState("")
  const {onBackBtnClick, onSubmitClick} = props;

  const onNameChange = (e: any) => {
    setName(e.target.value)
  }
  const onDescriptionChange = (e: any) => {
    setDescription(e.target.value)
  }
  const onCountChange = (e: any) => {
    setCount(e.target.value)
  }
  const onSubmitBtnClick = (e: any) => {
    e.preventDefault()
    const data: IProducts = {
      id: new Date().toJSON().toString(),
      name: name,
      description: description,
      account: acount
    }
    onSubmitClick(data);
    onBackBtnClick();
  }
  return (
    <>
      <form className="text-center" onSubmit={onSubmitBtnClick}>
        <div className="mt-2">
          <label>Nombre Producto:</label>
          <input className="h-[20px] pl-[15px] m-[5px] p-[5px] border-[1px]" value={name} onChange={onNameChange}
                 type="text"/>
        </div>
        <div className="mt-2">
          <label>Descripcion:</label>
          <input className="h-[20px] pl-[15px] m-[5px] p-[5px]  border-[1px]" onChange={onDescriptionChange}
                 type="text"/>
        </div>
        <div className="mt-2">
          <label>Valor:</label>
          <input className="h-[20px] pl-[15px] m-[5px] p-[5px]  border-[1px]" onChange={onCountChange} type="text"/>
        </div>
        <div>
          <input
            className="flex p-[10px]  mt-2 border-[1px] text-[16px] font-semibold border-collapse rounded-2xl bg-blue-400 w-[120px]"
            type="button" value="Back" onClick={onBackBtnClick}/>
          <input
            className="p-[10px] mt-2 border-solid border-[1px] text-[16px] font-semibold border-collapse rounded-2xl bg-blue-400 w-[180px]"
            type="submit" value="Add products"/>
        </div>
      </form>
    </>
  )
}
export default AddProduct;