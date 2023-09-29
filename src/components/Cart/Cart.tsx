import React from "react";

import Button from "../UI/Button";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => <li key={item.id}>{item.name}</li>
  );

  return (
    <Modal>
      <ul className={styles.cartItems}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>

      <div className={styles.actions}>
        <Button className={styles["button--alt"]}>Close</Button>
        <Button className={styles.button}>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
