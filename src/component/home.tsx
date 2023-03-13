import {useState} from "react";
import {dummyProductsList, IProducts, PageEnum} from "./products.types";
import ProductsList from "./productsList";
import AddProduct from "./addProduct";

const Home = () => {
  const [productsList, setProductsList] = useState(dummyProductsList as IProducts[]);
  const [showPage, setShowPage] = useState(PageEnum.list)

  const onAddProductsClick = () => {
    setShowPage(PageEnum.add)
  }
  const showListPage =() =>{
    setShowPage(PageEnum.list)
  }
  const addProduct=(data:IProducts)=>{
    setProductsList([...productsList,data])
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
              className="p-[10px] border-solid border-[1px] border-black border-collapse rounded-2xl bg-blue-500 mb-2"
              type="button"
                   value="Add Products"
                   onClick={onAddProductsClick}/>
            <ProductsList list={productsList}/>
          </>
        )}
        {showPage === PageEnum.add && <AddProduct onBackBtnClick={showListPage} onSubmitClick={addProduct}/>}
      </section>

    </>

  )

}
export default Home;