import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import SmartSearchBar from "../components/SmartSearchBar";
import { setSearchQuery } from "../redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductSort from "../components/ProductSort";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState();
  const [sortOption, setSortOption] = useState("default");
  const itemsPerPage = 6;
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch {
      setError("Products are not loading, please try again.", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
    return () => {
      dispatch(setSearchQuery(""));
    };
  }, [dispatch]);

  const sortedProducts = useMemo(() => {
    let sorted = [...products];

    switch (sortOption) {
      default:
        break;
      case "price-low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;

      case "price-high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "name-alpha-a-z":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "name-alpha-z-a":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    return sorted;
  }, [products, sortOption]);

  const filteredProducts = useMemo(() => {
    return sortedProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery)
    );
  }, [sortedProducts, searchQuery]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (loading)
    return <div className="text-center text-lg">Loading products...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-emphasis mb-8">
        All Products
      </h1>
      {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
      <div className="mb-4 flex justify-between gap-3">
        <SmartSearchBar products={products} />
        <ProductSort sortOption={sortOption} setSortOption={setSortOption} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 ">
        {paginatedProducts.length === 0 ? (
          <p className="col-span-4 text-center flex flex-col justify-between items-center">
            No products found
          </p>
        ) : (
          paginatedProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white p-4 shadow-lg rounded-lg flex flex-col justify-between items-center"
              >
                <div>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn-primary mt-4"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-40 mx-auto object-contain"
                    />
                  </Link>

                  <h3 className="mt-4 text-lg font-semibold">
                    {product.title}
                  </h3>
                  <p className="text-blue-600 font-bold">${product.price}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-2 text-sm font-medium rounded-lg ${
                  pageNumber === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

// import { useEffect, useState, useMemo } from "react";
// import { Link } from "react-router";
// import axios from "axios";
// import SearchBar from "../components/SearchBar";
// import { useSelector } from "react-redux";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const searchQuery = useSelector((state) => state.search.query.toLowerCase());

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         setProducts(response.data);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   const filteredProducts = useMemo(() => {
//     return products.filter((product) =>
//       product.title.toLowerCase().includes(searchQuery)
//     );
//   }, [products, searchQuery]);

//   if (loading)
//     return <div className="text-center text-lg">Loading products...</div>;

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-4xl font-bold text-center text-emphasis mb-8">
//         All Products
//       </h1>
//       <SearchBar />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
//             <img
//               //missing tag required to show images
//               src={product.image}
//               alt={product.title}
//               className="h-40 mx-auto object-contain"
//             />
//             <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
//             <p className="text-blue-500 font-bold">${product.price}</p>
//             <Link
//               to={`/products/${product.id}`}
//               className="btn-primary block mt-4 text-center"
//             >
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
