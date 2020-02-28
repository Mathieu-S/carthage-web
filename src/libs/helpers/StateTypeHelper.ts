type StateResponse<T> = T;
type ActionEmitter =
  | (() => void)
  | ((arg0: object | [] | string | number | boolean) => void);
type GetterResponse<T> = () => T;

export { StateResponse, ActionEmitter, GetterResponse };
