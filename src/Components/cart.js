import { useSelector, useDispatch } from "react-redux";
import { userSelector, userActions } from "../redux/reducer";
import { Minus, Plus, Trash2 } from "lucide-react";
import Card from "../utils/Elements/card"; 
import CardContent from "../utils/Elements/cardcontent"; 
import Button from '../utils/Elements/button'; 

export default function Cart() {
  const { cartItems } = useSelector(userSelector);
  const dispatch = useDispatch();

  const updateQuantity = (id, change) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        dispatch(userActions.updateCartItemQuantity({ id, quantity: newQuantity }));
      }
    }
  };

  const removeItemFromCart = (id) => {
    dispatch(userActions.removeFromCart(id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = Number(item.price) || 0;
      const itemQuantity = Number(item.quantity) || 0;
      return total + itemPrice * itemQuantity;
    }, 0);
  };

  return (
    <section className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-muted-foreground">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <Card key={item.id} className="mb-4">
                <CardContent>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-md mr-4"
                  />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <p className="text-lg font-bold mt-2">${item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2 text-lg font-semibold">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-2 text-destructive"
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="mt-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Total:</h2>
              <p className="text-2xl font-bold">${calculateTotal().toFixed(2)}</p>
            </div>
            <button className="w-full mt-4 text-white p-2 rounded-lg bg-green-500 hover:bg-green-600">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </section>
  );
}
