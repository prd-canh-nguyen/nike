const moneyConvert = (pay) => {
  if (pay.toString().length >= 8) {
    return (
      pay.toString().slice(0, 2) +
      "." +
      pay.toString().slice(2, 5) +
      "." +
      pay.toString().slice(5)
    );
  }
  if (pay.toString().length === 7) {
    return (
      pay.toString().slice(0, 1) +
      "." +
      pay.toString().slice(1, 4) +
      "." +
      pay.toString().slice(4)
    );
  }
  if (pay.toString().length === 6) {
    return pay.toString().slice(0, 3) + "." + pay.toString().slice(3);
  }
  if (pay.toString().length === 5) {
    return pay.toString().slice(0, 2) + "." + pay.toString().slice(2);
  }
  if (pay.toString().length === 4) {
    return pay.toString().slice(0, 1) + "." + pay.toString().slice(1);
  }
  if (pay.toString().length <= 3) {
    return pay.toString();
  }
};


export default moneyConvert