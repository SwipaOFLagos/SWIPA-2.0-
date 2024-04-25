import { useSearch } from "../contexts/Search";
import ProductCard from "../components/ProductCardM";
import SearchProductCard from "../components/cards/SearchProductCard";
import Jumbotron from "../components/cards/Jumbotron";

export default function Search() {
  const [values, setValues] = useSearch();

  // console.log(values);

  return (
    <>
      <Jumbotron
        title="Search results"
        subTitle={
          values?.results?.length < 1
            ? "No products found"
<<<<<<< HEAD
            : `Found ${values?.results?.length} ${values?.results?.length  > 1 ? "products" : "product"}`
=======
            : `Found ${values?.results?.length} ${values?.results?.length > 1 ? "products" : "product"}`
>>>>>>> 619648dc1708497d2154148eec97228f5fa33cfb
        }
      />

      <div className="container mt-3">
        <div className="row">
          {values?.results?.map((p) => (
            <div key={p._id} className="col-md-4">
              <SearchProductCard product={p}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
