import React, { Fragment } from "react";

import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <span style={{ textTransform: "capitalize" }}>
        Total price: <strong>{props.totalPrice.toFixed(2)}</strong>
      </span>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" cliked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" cliked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default orderSummary;
