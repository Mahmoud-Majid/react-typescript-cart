import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { CartItem } from "../components/CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import items from "../data/items.json";
export function ShoppingCart({ isOpen }: boolean) {
  const { closeCart, cartItems } = useCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
        <div className="ms-auto fw-bold fs-5">
          Total:{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = items.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
