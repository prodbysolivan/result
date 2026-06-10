# Result

Nano-sized type-safe result utility for fallible operations.

## Description

A lightweight, zero-dependency utility designed for high-performance
applications. It provides a robust, type-safe, and functional way to handle
operations that can either succeed or fail, replacing the need for risky
`try/catch` blocks. It is ideal for I/O operations, data parsing, or any
scenario where you need explicit and predictable error handling without the
overhead of heavy external libraries.

### Dependencies

- Deno 1.40 or higher

### Installing

Add the package to your project directly via JSR:

```bash
deno add @prodbysolivan/result
```

### Quick Usage
Import the functions into your project:


```typescript
import { failure, isSuccess, Result, success } from "@prodbysolivan/result";

// Function returning a Result: success containing the quotient, or failure containing an error message
function divide(a: number, b: number): Result<number, string> {
  if (b === 0) return failure("Cannot divide by zero"); // Return a failure state
  return success(a / b);                               // Return a success state wrapping the value
}

const result = divide(10, 0);

// Check if the operation was successful before accessing the value
if (isSuccess(result)) {
  // Safe to access the result value
  console.log(`Result: ${result.value}`);
} else {
  // Handle the error case safely
  console.error(`Error: ${result.error}`);
}
```

## Help

If you encounter type errors, ensure your `ValueType` and `ErrorType` are
correctly defined in your function signatures. This utility relies on type
guards (`isSuccess`, `isFailure`) to narrow down types, ensuring you always
handle the failure case safely before accessing the successful value.

## Authors

Solivan (prodbysolivan)

[@solivan](https://github.com/prodbysolivan)

## License

This project is licensed under the MIT License - see the LICENSE file for
details.

## Acknowledgments

- [Deno Documentation](https://docs.deno.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
