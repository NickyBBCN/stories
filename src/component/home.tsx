import {useState} from "react";
import {dummyProductsList, IProducts} from "./products.types";
import ProductsList from "./productsList";

const Home = () => {
  const [productsList, setProductsList]= useState(dummyProductsList as IProducts[]);
  return (
    <>
      <article className="text-white bg-green-600 border-solid accent-transparent text-center text-3xl h-[90px] ">
        <header>
          <h1 >Productos crud</h1>
        </header>
         </article>
      <section className="ml-[10%] mr-[10%] mt-6">

        <ProductsList list={productsList}/>
      </section>

    </>

  )

}
export default Home;