# Result

![Deno](https://img.shields.io/badge/deno-1.40%2B-black?logo=deno) [![JSR](https://jsr.io/badges/@prodbysolivan/result)](https://jsr.io/@prodbysolivan/result) ![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

> Nano-sized type-safe result utility for fallible operations.

## Description

A lightweight, zero-dependency utility designed for high-performance applications. It provides a robust, type-safe, and functional way to handle operations that can either succeed or fail, replacing the need for risky `try/catch` blocks. It is ideal for I/O operations, data parsing, or any scenario where you need explicit and predictable error handling without the overhead of heavy external libraries.

## Features

* **Zero-Dependency**: Extremely lightweight design for minimal footprint.
* **Type-Safe**: Uses TypeScript generics and type guards to force explicit error handling, preventing unhandled exceptions.
* **Functional Approach**: Promotes a declarative style that makes application logic predictable and easier to test.

## Getting Started

### Prerequisites

* [Deno 1.40 or higher](https://deno.land/)

### Installation

```bash
deno add @prodbysolivan/result

```

## Quick Usage

```typescript
import { failure, isSuccess, Result, success } from "@prodbysolivan/result";

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) return failure("Cannot divide by zero");
  return success(a / b);
}

const result = divide(10, 0);

if (isSuccess(result)) {
  console.log(`Result: ${result.value}`);
} else {
  console.error(`Error: ${result.error}`);
}

```

## Documentation & Help

### Troubleshooting

* **Type Errors**: If you encounter type errors, ensure your `ValueType` and `ErrorType` are correctly defined in your function signatures. This utility relies on type guards (`isSuccess`, `isFailure`) to narrow down types, ensuring you always handle the failure case safely before accessing the successful value.

---

## Authors

* **Solivan** ([@solivan](https://github.com/prodbysolivan))

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Acknowledgments

* [Deno Documentation](https://docs.deno.com/)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/)
