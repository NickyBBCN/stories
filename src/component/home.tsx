import {useEffect, useState} from "react";
import { IProducts, PageEnum} from "./products.types";
import ProductsList from "./productsList";
import AddProduct from "./addProduct";
import EditProducts from "./editProducts";

const Home = () => {
  const [productsList, setProductsList] = useState( [] as IProducts[]);
  const [showPage, setShowPage] = useState(PageEnum.list)
  const [dataToEdit, setDataToEdit] = useState({} as IProducts)
 useEffect(()=>{
  const listInString = window.localStorage.getItem("ProductsList")
    if(listInString){
      _setProductsList(JSON.parse(listInString))
    }
 },[]);
  const onAddProductsClick = () => {
    setShowPage(PageEnum.add)
  }
  const showListPage = () => {
    setShowPage(PageEnum.list)
  }
  const _setProductsList = (list: IProducts[])=>{
    setProductsList(list)
    window.localStorage.setItem("ProductsList", JSON.stringify(list))
  }
  const addProduct = (data: IProducts) => {
    _setProductsList([...productsList, data])
  }
  const deleteProducts = (data: IProducts) => {
    //el índice de la matriz
    //empalmar eso
    //actualizar nuevo registro
    const indexToDelete = productsList.indexOf(data);
    const tempList = [...productsList]
    tempList.splice(indexToDelete, 1);
    _setProductsList(tempList);
  }
  const editProductsData = (data: IProducts) => {
    setShowPage(PageEnum.edit);
    setDataToEdit(data);
  }
  const updateData = (data: IProducts) => {
    const filteredData = productsList.filter(x => x.id === data.id)[0];
    const indexOfRecord = productsList.indexOf(filteredData);
    const tempData = [...productsList]
    tempData[indexOfRecord] = data;
    _setProductsList(tempData)
  }


  return (
    <>
      <article className="text-white bg-green-600 border-solid accent-transparent text-center text-3xl h-[90px] ">
        <header>
          <h1>Productos crud</h1>
        </header>
      </article>
      <section className="ml-[10%] mr-[10%] mt-6">
        {showPage === PageEnum.list && (
          <>
            <input
              className="p-[10px] float-right border-solid border-[1px] border-black border-collapse rounded-2xl bg-blue-500 mb-2"
              type="button"
              value="Add Products"
              onClick={onAddProductsClick}/>
            <ProductsList
              list={productsList}
              onDelecteClick={deleteProducts}
              onEdit={editProductsData}
            />
          </>
        )}
        {showPage === PageEnum.add && <AddProduct onBackBtnClick={showListPage} onSubmitClick={addProduct}/>}
        {showPage === PageEnum.edit &&
          <EditProducts data={dataToEdit} onBackBtnClick={showListPage} onUpdateClick={updateData}/>}
      </section>

    </>

  )

}
export default Home;