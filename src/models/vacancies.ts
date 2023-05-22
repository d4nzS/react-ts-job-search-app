interface ITown {
  title: string;
}

interface IWork {
  title: string;
}

interface IVacancy {
  id: number;
  profession: string;
  town: ITown;
  type_of_work: IWork;
  payment_from: number;
  payment_to: number;
  currency: string;
}

type IVacancies = IVacancy[];

export default IVacancies;
