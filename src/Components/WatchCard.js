import React from 'react';
import { Heart } from 'lucide-react';

const WatchCard = React.memo(({ watch, isWishlisted, toggleWishList, handleWatch }) => {
  return (
    <div className="overflow-hidden bg-white shadow rounded-lg relative watch-card">
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
  );
});

export default WatchCard;
