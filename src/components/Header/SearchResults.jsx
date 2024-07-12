import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

function SearchResults() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setProducts(data.products);
            });
    }, []);

    const filteredResults = products.filter(product => product.category.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className='grid grid-cols-4'>
                {filteredResults.map(product => (
                    <div key={product.id}>
                        <Card
                            title={product.title}
                            image={product.images}
                            price={product.price}
                        />
                    </div>
                ))}
        </div>
    );
}

export default SearchResults;