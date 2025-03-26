import React, { useState, useRef, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";

const SmartSearchBar = ({ products }) => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const [debouncedValue, setDebouncedValue] = useState(query);
  const timerRef = useRef(null);

  const results = useMemo(() => {
    if (!debouncedValue.trim()) return [];
    return products?.filter((product) =>
      product.title.toLowerCase().includes(debouncedValue.toLowerCase())
    );
  }, [debouncedValue, products]);

  const handleQueryChange = useCallback(
    (e) => {
      const searchQuery = e.target.value;
      setDebouncedValue(searchQuery);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        dispatch(setSearchQuery(searchQuery));
      }, 300);
    },
    [dispatch]
  );

  return (
    <div className="relative w-80">
      <input
        type="text"
        placeholder="Search Products"
        value={debouncedValue}
        onChange={handleQueryChange}
        className="w-full p-2 border rounded-md focus:ring focus-ring-blue-400"
      />
      {results.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border rounded-md mt-1 shadow-lg">
          {results.map((product) => (
            <li key={product.id} className="p-2 hover:bg-gray-200">
              <Link to={`/products/${product.id}`}>
                <span className="font-semibold">
                  {product.title
                    .split(new RegExp(`(${query})`))
                    .map((part, i) =>
                      part.toLowerCase() === query.toLowerCase() ? (
                        <span key={i} className="bg-yellow-300">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SmartSearchBar;
