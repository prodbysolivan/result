import { assertEquals } from "@std/assert";
import {
  success,
  failure,
  isSuccess,
  isFailure,
  type Result,
} from "../source/index.ts";

Deno.test("result should identify a Success state correctly", () => {
  const result: Result<string, string> = success("Operation completed");

  if (isSuccess(result)) {
    assertEquals(result.value, "Operation completed");
  } else {
    throw new Error("Expected Success, but got Failure");
  }
});

Deno.test("result should identify a Failure state correctly", () => {
  const result: Result<string, string> = failure("Something went wrong");

  if (isFailure(result)) {
    assertEquals(result.error, "Something went wrong");
  } else {
    throw new Error("Expected Failure, but got Success");
  }
});

Deno.test("result should work with complex types", () => {
  interface User {
    id: number;
    name: string;
  }

  const result: Result<User, Error> = success({ id: 1, name: "Ramses" });

  if (isSuccess(result)) {
    assertEquals(result.value.name, "Ramses");
  }
});

Deno.test("result should handle numeric error codes correctly", () => {
  const result: Result<string, number> = failure(500);

  if (isFailure(result)) {
    assertEquals(result.error, 500);
  }
});
