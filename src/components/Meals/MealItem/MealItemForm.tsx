import React from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../UI/Button";

import styles from "../styles/MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        id={uuidv4()}
        type="number"
        min={1}
        max={5}
        step={1}
        defaultValue={1}
      />
      <Button className={styles.button}>+ Add</Button>
    </form>
  );
};

export default MealItemForm;
