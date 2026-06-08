/**
 * Represents a successful operation containing a value of a specific type.
 */
type Success<ValueType> = {
  readonly type: "Success";
  readonly value: ValueType;
};

/**
 * Represents a failed operation containing an error of a specific type.
 */
type Failure<ErrorType> = {
  readonly type: "Failure";
  readonly error: ErrorType;
};

/**
 * Result type representing the outcome of a fallible operation.
 * It is either a Success containing a value or a Failure containing an error.
 */
export type Result<ValueType, ErrorType> =
  | Success<ValueType>
  | Failure<ErrorType>;

/**
 * Creates a Success result containing the provided value.
 * @param value The value to wrap in a Success result.
 */
export const success = <ValueType>(value: ValueType): Success<ValueType> => ({
  type: "Success",
  value,
});

/**
 * Creates a Failure result containing the provided error.
 * @param error The error to wrap in a Failure result.
 */
export const failure = <ErrorType>(error: ErrorType): Failure<ErrorType> => ({
  type: "Failure",
  error,
});

/**
 * Type guard that checks if a Result is a Success.
 * @param result The Result to check.
 * @returns True if the result is a Success, false otherwise.
 */
export const isSuccess = <ValueType, ErrorType>(
  result: Result<ValueType, ErrorType>,
): result is Success<ValueType> => result.type === "Success";

/**
 * Type guard that checks if a Result is a Failure.
 * @param result The Result to check.
 * @returns True if the result is a Failure, false otherwise.
 */
export const isFailure = <ValueType, ErrorType>(
  result: Result<ValueType, ErrorType>,
): result is Failure<ErrorType> => result.type === "Failure";
