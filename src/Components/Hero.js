import { Clock, Watch } from "lucide-react"
import { brands } from "../Data/brands";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="relative bg-background py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="lg:grid lg:grid-cols-12 lg:gap-8 mb-2">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Timeless Elegance</span>{' '}
              <span className="block text-primary xl:inline">Wrist Perfection</span>
            </h1>
            <p className="mt-3 text-base text-[#F4F4F5]-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Discover our curated collection of premium watches. From classic designs to modern marvels, find the perfect timepiece to complement your style.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <button className="rounded-md shadow bg-black text-white py-2 px-4 hover:bg-gray-800 transition duration-200 ease-in-out" size="xl">
                Shop Now
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://m.media-amazon.com/images/I/812c5uCW9EL._AC_UY900_.jpg"
                alt="Luxury watch"
                width={400}
                height={400}
              />
            </div>
          </div>
        </header>

        <div className="bg-[#F4F4F5]">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p className="text-center text-base font-semibold uppercase text-[#F4F4F5]-foreground tracking-wider mb-8">
              Trusted by the world's most prestigious brands
            </p>
            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-5">
              {brands.map((brand) => (
                <div key={brand.id} className="col-span-1 flex justify-center py-8 px-8 bg-white">
                  <img
                    className="max-h-12 object-contain"
                    src={brand.logo}
                    alt={brand.name}
                    width={140}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-background">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                  Discover Our Collections
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-[#F4F4F5]-foreground">
                  From classic timepieces to cutting-edge designs, our collections cater to every style and occasion. Explore our range and find the perfect watch that speaks to you.
                </p>
                <div className="mt-8 sm:flex">
                  <div className="rounded-md shadow">
                    <Link to='/shop'>
                    <button className="rounded-md shadow bg-black text-white py-2 px-4 hover:bg-gray-800 transition duration-200 ease-in-out" size="xl">Shop Our Collection</button></Link>
                    
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                <div className="col-span-1 flex justify-center py-8 px-8 bg-[#F4F4F5]">
                  <Clock className="h-12 w-12 text-primary" />
                  <p className="ml-4 text-lg font-medium text-foreground">Classic Collection</p>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-[#F4F4F5]">
                  <Watch className="h-12 w-12 text-primary" />
                  <p className="ml-4 text-lg font-medium text-foreground">Sport Collection</p>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-[#F4F4F5]">
                  <Clock className="h-12 w-12 text-primary" />
                  <p className="ml-4 text-lg font-medium text-foreground">Luxury Collection</p>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-[#F4F4F5]">
                  <Watch className="h-12 w-12 text-primary" />
                  <p className="ml-4 text-lg font-medium text-foreground">Smart Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}