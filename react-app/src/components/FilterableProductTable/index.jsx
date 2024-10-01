import { useEffect, useMemo, useState, useDebounce } from "react";
import "./FilterableProductTable.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const products = [
	{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
	{ category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
	{ category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
	{ category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
	{ category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
	{ category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
	{ category: "Health", price: "$199.99", stocked: true, name: "Lotion" },
	{ category: "Household Supplies", price: "$199.99", stocked: true, name: "Frying Pan" },
];

const productsTransformed = [
	{
		categoryName: "Sporting Goods",
		products: [
			{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
			{ category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
			{ category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
		],
	},
	{
		categoryName: "Electronics",
		products: [
			{ category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
			{ category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
			{ category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
		],
	},
];

function transformProducts(products) {
	const transformed = [];
	const categories = {};

	for (const product of products) {
		if (product.category in categories) {
			categories[product.category].push(product);
		} else {
			categories[product.category] = [product];
		}
	}

	for (const category in categories) {
		transformed.push({
			categoryName: category,
			products: categories[category],
		});
	}
	// console.log(transformed);
	return transformed;
}

function filter(categories, filterText, checkInStock) {
	console.log("filter is running");
	if (filterText === "" && !checkInStock) return categories;

	filterText = filterText.toLowerCase();
	return categories?.map((category) => {
		return {
			...category,
			products: category.products.filter((product) => {
				const matchedFilteredText = product.name.toLowerCase().includes(filterText);
				
				return checkInStock ? matchedFilteredText && product.stocked : matchedFilteredText;
			}),
		};
	});
}


export default function FilterableProductTable() {
	const [categories, setCategories] = useState([]);

	const [search, setSearch] = useState("");
	const delayedSearch = useDebounce(search, 2000);

	const [inStock, setInStock] = useState(false);

	useEffect(() => {
		const transformed = transformProducts(products);
		setCategories(transformed);
	}, []);

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const handleCheckInStockChange = (event) => {
		setInStock(event.target.checked);
	};

	const filteredCategories = useMemo(() => {
	         return filter(categories,delayedSearch, inStock);
	}, [categories,delayedSearch, inStock]); //search
	
	// const filteredCategories =  filter(categories, search, inStock);

	return (
		<div className="filterable-product-table">
			<SearchBar search={search} inStock={inStock} handleSearchChange={handleSearchChange}
			 handleCheckInStockChange={handleCheckInStockChange} />
			<ProductTable filteredProducts={filteredCategories} />

		</div>
	);
}

// derived state is dependent state so we should never assign new state to it