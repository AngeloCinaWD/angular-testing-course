import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe("CalculatorService", () => {
  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    console.log("Before each....");

    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });

    calculator = TestBed.inject(CalculatorService);
  });

  it("should add two numbers", () => {
    console.log("Add numbers..");

    const result = calculator.add(2, 2);

    expect(result).toBe(
      4,
      "posso aggiungere un messaggio in caso di fail del test"
    );

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    console.log("Subtract numbers...");

    const result = calculator.subtract(2, 2);

    expect(result).toBe(0);
    expect(result).toBeLessThan(1);
    expect(result).not.toBe(1);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
