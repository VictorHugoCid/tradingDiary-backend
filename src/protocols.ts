export type ApplicationError = {
  name: string;
  message: string;
};

export type TradeData = {
  buyOrSell: string
  userId: number
  day: string
  stock: string
  amount: number
  strategy: string
  entryPrice: number
  exitPrice: number
  entryTime: string
  exitTime: string
}

export type dateRange = {
  startDate: Date
  endDate: Date
}

export type newStrategyData = {
  name: string
  description: string
}

export type strategyData = {
  id: number
  name: string
  description: string
}
// //Regra de Negócio
// export type AddressEnrollment = {
//   logradouro: string,
//   complemento: string,
//   bairro: string,
//   cidade: string,
//   uf: string,
//   error?: string

// }

export type RequestError = {
  status: number,
  data: object | null,
  statusText: string,
  name: string,
  message: string,
};
