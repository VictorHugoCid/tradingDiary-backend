export type ApplicationError = {
  name: string;
  message: string;
};

export type TradeData = {
  buyOrSell: string
  userId: number
  time: string
  stock: string
  amount: number
  strategy: string
  entryPrice: number
  exitPrice: number
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