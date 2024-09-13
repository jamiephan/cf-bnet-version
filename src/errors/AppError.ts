import ERROR_TYPE from "./AppErrorType";

class BNetError extends Error {
  type: ERROR_TYPE = ERROR_TYPE.NORMAL;
  constructor(
    message = "",
    type: ERROR_TYPE = ERROR_TYPE.NORMAL,
    ...args: any
  ) {
    super(message, ...args);
    this.type = type;
  }
}

export default BNetError;
