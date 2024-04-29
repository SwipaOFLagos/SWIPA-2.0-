import React, { useEffect, useState } from "react"
import DetailCard from "../components/DetailCard";
import Accordions from "../components/AccordionG";
import RelatedProd from "../components/RelatedProd";
import YouTube from "../components/YouTube";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/DetailPage.css";
import Footer from "../components/Footer";
import Menu from "../components/NavBar";
import SideNav from "../components/SideNav";

const DetailPage = () => {
  const { productId } = useParams();
  const [productG, setProductG] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/product/${productId}`);
        console.log("Fetched data:", response.data);
        setProductG(response.data.product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [productId]);


  return (
    <>
    <Menu />
    <SideNav />
    <div className="all-details d-flex flex-column justify-content-center ">
      {productG && (
        <>
          <div className="mb-4 detail-card ">
            <DetailCard product={productG} />
            {/* <p>{productG._id}</p>
            <p>{productG.name}</p> */}

          </div>

          <div className="gaccrel d-flex  justify-content-between flex-column flex-lg-row ">
            <div className="row d-flex  justify-content-between accordion-detailG ">
              <Accordions className="" product={productG} />

              <div className="d-lg-block d-none youtube-g ">
                <YouTube />
              </div>
            </div>

            <div className="d-flex justify-content-center relate-p">
              <RelatedProd />
            </div>

            <div className="d-lg-none youtube-g">
              <YouTube />
            </div>
          </div>
        </>
      )}
    </div>
    <Footer />
    </>
  );
};
export default DetailPage;

// import React, { useEffect, useState } from "react";
// import DetailCard from "../components/DetailCard";
// import Accordions from "../components/AccordionG";
// import RelatedProd from "../components/RelatedProd";
// import YouTube from "../components/YouTube";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../css/DetailPage.css";
// import Footer from "../components/Footer";
// import Menu from "../components/NavBar";
// import SideNav from "../components/SideNav";

// const DetailPage = () => {
//   const { productId } = useParams();
//   const [productG, setProductG] = useState(null);
//   const [loading, setLoading] = useState(true); // State to manage loading

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/product/${productId}`);
//         console.log("Fetched data:", response.data);
//         setProductG(response.data.product);
//         setLoading(false); // Set loading to false after data is fetched
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false); // Set loading to false if there's an error
//       }
//     };
//     fetchData();
//   }, [productId]);

//   return (
//     <>
//       <Menu />
//       <SideNav />
//       <div className="all-details d-flex flex-column justify-content-center ">
//         {loading ? ( // Check if loading is true
//           // Skeleton loader while data is loading
//           <div className="skeleton-loader">
//           <div className="skeleton-detail-card "></div>
//           <div className="skeleton-gaccrel  d-flex justify-content-between flex-column flex-lg-row">
//             <div className="skeleton-accordion-detailG "></div>
//             <div className="skeleton-related-prod "></div>
//           </div>
//           <div className="skeleton-youtube "></div>
//         </div>
//         ) : (
//           // Render actual content when loading is false
//           <>
//             <div className="mb-4 detail-card ">
//               <DetailCard product={productG} />
//             </div>

//             <div className="gaccrel d-flex  justify-content-between flex-column flex-lg-row ">
//               <div className="row d-flex  justify-content-between accordion-detailG ">
//                 <Accordions className="" product={productG} />

//                 <div className="d-lg-block d-none youtube-g ">
//                   <YouTube />
//                 </div>
//               </div>

//               <div className="d-flex justify-content-center relate-p">
//                 <RelatedProd />
//               </div>

//               <div className="d-lg-none youtube-g">
//                 <YouTube />
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default DetailPage;

