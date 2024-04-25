import { useSearch } from "../contexts/Search";
import SearchProductCard from "../components/cards/SearchProductCard";
import Jumbotron from "../components/cards/Jumbotron";

export default function Search() {
  const [values, setValues] = useSearch();
<<<<<<< HEAD

=======
// values. results gives us all the products searched for
>>>>>>> 75978bbd4d744fe93e8d235a8bd6be353112a46f
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
>>>>>>> 75978bbd4d744fe93e8d235a8bd6be353112a46f
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
