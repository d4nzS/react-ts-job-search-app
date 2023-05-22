interface IPayment {
  from: number;
  to: number;
}

const formatPayment = ({ from, to }: IPayment): string => {
  if (from && to) {
    return `${from} - ${to}`;
  }

  if (from) {
    return `от ${from}`;
  }

  if (to) {
    return `до ${to}`;
  }

  return 'Договорная в ';
};

export default formatPayment;