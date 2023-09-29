import React from "react";
import Heading from "../../UI/Heading";
import Container from "../../UI/Container";
import MealItemForm from "./MealItemForm";

import styles from "../styles/MealItem.module.css";

type MealItemTypes = {
  title: string;
  description: string;
  price: number;
};

const MealItem = ({ title, description, price }: MealItemTypes) => {
  const priceInRupees = `₹ ${price.toFixed(2)}`;

  return (
    <li className={`${styles.m}`}>
      <Container>
        <Heading className={`text-lg`}>{title}</Heading>
        <div className={`${styles.description}`}>{description}</div>
        <div className={`${styles.price}`}>{priceInRupees}</div>
      </Container>
      <Container>
        <MealItemForm />
      </Container>
    </li>
  );
};

export default MealItem;
