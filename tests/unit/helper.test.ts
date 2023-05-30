import { expect } from "chai";
import { exampleHelper } from "@/helper/helper";

describe("Unit test for helper functions", () => {
  it("should check example helper", function () {
    // Expect
    const methodResponseMustBe = 4;
    // Given
    const methodResponse = exampleHelper();
    // When
    // Then
    expect(
      methodResponse,
      "Not correct value from helper function"
    ).to.be.equal(methodResponseMustBe);
  });
});
