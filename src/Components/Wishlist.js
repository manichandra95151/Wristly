import { Heart } from 'lucide-react';
import { useWishlist } from '../utils/Hooks/customHook';
import { useCart } from '../utils/Hooks/cartHook';

export default function Wishlist() {
  const { wishlist, isWishlisted, toggleWishList } = useWishlist();
  const { isAddedToCart, toggleCartItem } = useCart();

  return (
    <section className="bg-background py-12 px-4 sm:px-6 lg:px-8 mt-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-foreground mb-8">Favourites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.length === 0 ? (
            <p>No items in the wishlist.</p>
          ) : (
            wishlist.map((watch) => (
              <div key={watch.id} className="overflow-hidden bg-white shadow rounded-lg relative">
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
                  <button
                    className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                    onClick={(e) => toggleWishList(e, watch)}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted(watch.id) ? 'fill-current text-red-500' : ''}`} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{watch.brand}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{watch.name}</p>
                  <p className="text-primary font-bold">${watch.price.toFixed(2)}</p>
                  <button
                    onClick={(e) => toggleCartItem(e, watch)}
                    className={`mt-2 w-full py-2 px-4 font-semibold rounded-md text-white ${
                      isAddedToCart(watch.id) ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    }`}
                  >
                    {isAddedToCart(watch.id) ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
