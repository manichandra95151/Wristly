import React from 'react';
import { useParams } from "react-router-dom";
import { watches } from '../Data/watchData';
import { Heart } from 'lucide-react';
import { useWishlist } from '../utils/Hooks/customHook';
import { useCart } from '../utils/Hooks/cartHook';
import './watch.css'; // Import the new cart hook

export default function SingleWatchShowcase() {
  const { id } = useParams();
  const { isWishlisted, toggleWishList } = useWishlist(); // Use wishlist hook
  const { isAddedToCart, toggleCartItem } = useCart(); // Use cart hook

  const watch = watches.find((watch) => watch.id === Number(id));

  if (!watch) {
    return <div>Watch not found</div>;
  }

  return (
    <section className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border rounded-lg overflow-hidden">
          <div className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className="relative h-96 md:h-full bg-muted ">
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div className="w-80 h-80 bg-background rounded-full flex items-center justify-center ">
                    <img
                      src={watch.imageUrl}
                      alt={watch.name}
                      width={300}
                      height={300}
                      className="object-cover watch-card"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block bg-gray-200 text-gray-700 py-1 px-2 rounded">
                      {watch.brand}
                    </span>
                    <button
                      className="text-muted-foreground hover:text-foreground"
                      onClick={(e) => toggleWishList(e, watch)}
                    >
                      <Heart className={`h-5 w-5 ${isWishlisted(watch.id) ? 'fill-current text-red-500' : ''}`} />
                    </button>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{watch.name}</h2>
                  <p className="text-[#aeafb3] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-4">${watch.price.toFixed(2)}</p>
                  <button
                    onClick={(e) => toggleCartItem(e, watch)} // Toggle cart functionality
                    className={`w-full py-2 px-4 font-semibold rounded-md text-white ${
                      isAddedToCart(watch.id) ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    }`}
                  >
                    {isAddedToCart(watch.id) ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
