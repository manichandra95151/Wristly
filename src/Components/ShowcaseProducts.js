import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { watches } from '../Data/watchData'; // Assume this contains the watches data
import { Heart } from 'lucide-react';
import { useWishlist } from '../utils/Hooks/customHook';
import './watch.css';

export default function WatchShowcase({ searchText }) {
  const navigate = useNavigate();
  const { isWishlisted, toggleWishList } = useWishlist(); 
  
  const [sortOrder, setSortOrder] = useState('asc');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showFilter, setShowFilter] = useState(false); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true); 
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 500); 
    return () => clearTimeout(timer); 
  }, [searchText, sortOrder, priceRange, selectedBrands]); 

  const handleWatch = (id) => {
    navigate(`/watch/${id}`);
  };

  // Filtering and sorting watches
  const filteredWatches = watches
    .filter(watch =>
      watch.name.toLowerCase().includes(searchText.toLowerCase()) ||
      watch.brand.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter(watch =>
      watch.price >= priceRange[0] && 
      watch.price <= priceRange[1] && 
      (selectedBrands.length === 0 || selectedBrands.includes(watch.brand))
    )
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  // Toggle brand selection
  const toggleBrandSelection = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <section className="bg-background py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-foreground">Featured Watches</h2>
          <div className="flex space-x-4">
            <div className="relative">
              <button className="border px-4 py-2 rounded" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                Sort by Price: {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
              </button>
            </div>
            <div className="relative">
              <button className="border px-4 py-2 rounded" onClick={() => setShowFilter(!showFilter)}>
                Filter
              </button>
              {showFilter && ( // Conditionally render filter options:
                <div className="absolute right-0 z-10 mt-2 w-48 bg-white border rounded shadow-lg p-4">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Price Range</h3>
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full mb-4"
                    />
                    <div className="flex justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Brands</h3>
                    {['Versace', 'Fitbit', 'August Berg', 'Fossil', 'Diesel', 'Emporio Armani', 'Rosefield', 'Armani Exchange', 'Puma'].map(brand => (
                      <div key={brand} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrandSelection(brand)}
                          className="mr-2"
                        />
                        <label>{brand}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {loading ? ( // Show loading while filtering/sorting:
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">Loading watches...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredWatches.length > 0 ? (
              filteredWatches.map((watch) => (
                <div
                  key={watch.id}
                  className={'overflow-hidden bg-white shadow rounded-lg relative watch-card'} 
                >
                  <div className="relative h-64 bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 bg-background rounded-full flex items-center justify-center">
                        <img
                          src={watch.imageUrl}
                          alt={watch.name}
                          className="object-cover w-48 h-48 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{watch.brand}</h3>
                    <p className="text-muted-foreground">{watch.name}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-primary font-bold">${watch.price.toFixed(2)}</p>
                      <button
                        onClick={() => handleWatch(watch.id)}
                        className="px-4 py-2 bg-[#F4F4F5] text-black rounded hover:bg-black hover:text-white"
                      >
                        View
                      </button>
                    </div>
                    <button
                    aria-label={isWishlisted(watch.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                      className={`absolute top-2 right-2 p-1 rounded-md ${isWishlisted(watch.id) ? "bg-red-500" : "bg-gray-200"}`}
                      onClick={(e) => toggleWishList(e, watch)}
                    >
                      <Heart className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center">
                {searchText === "" ? (
                  <p className="text-lg text-gray-500">No watch found for the selected filter</p>
                ) : (
                  <p className="text-lg text-gray-500">No watches found for <strong>"{searchText}"</strong>. Please try a different search.</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
