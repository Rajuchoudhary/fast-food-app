export const totalItems = (items) => {
  return items?.length > 0
    ? items
        ?.map((item) => item.qty)
        .reduce(function (acc, cur) {
          return acc + cur;
        })
    : 0;
};

export const subTotal = (items) => {
  return items?.length > 0
    ? items
        ?.map((item) => item.qty * item.price)
        .reduce(function (acc, cur) {
          return acc + cur;
        })
    : 0;
};

export const deliveryCost = (subTotal) => {
  if (subTotal > 0 && subTotal <= 100) {
    return 20;
  }
  if (subTotal > 100 && subTotal <= 200) {
    return 15;
  }
  if (subTotal > 200) {
    return 0;
  }
  if (!subTotal) {
    return 0;
  }
};
