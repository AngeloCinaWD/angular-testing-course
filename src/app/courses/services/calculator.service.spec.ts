import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  // dichiaro le properties che mi servono per le specs
  // poi le valorizzo nella callback del beforeEach()
  let calculator: CalculatorService, loggerSpy: any;

  // utilizzo della funzione di jasmine beforeEach() per non ripetere il codice nelle specs
  // Run some shared setup before each of the specs in the describe in which it is called.
  // la funzione viene chiamata prima di ogni spec (2 specs viene chiamata 2 volte)
  // il primo parametro che accetta è una callback
  beforeEach(() => {
    // const logger = jasmine.createSpyObj("LoggerService", ["log"]);

    // const calculator = new CalculatorService(logger);

    console.log("Before each....");

    // valorizzo le properties che ho creato
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    calculator = new CalculatorService(loggerSpy);
  });

  it("should add two numbers", () => {
    console.log("Add numbers..");

    // sposto questo codice nella callback del beforeEach()
    // const logger = jasmine.createSpyObj("LoggerService", ["log"]);

    // const calculator = new CalculatorService(logger);

    // le proprietà definite nello scope della callback del beforeEach() non sono visibili nello scope delle specs
    // per poterle utilizzare devo dichiarare le property prima del beforeEach() e poi in questo valorizzarle
    const result = calculator.add(2, 2);

    expect(result).toBe(
      4,
      "posso aggiungere un messaggio in caso di fail del test"
    );

    // utilizzo la property generale loggerSpy
    // expect(logger.log).toHaveBeenCalledTimes(1);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    console.log("Subtract numbers...");

    // const calculator = new CalculatorService(new LoggerService());

    // passo un mock del LoggerService al CalculatorService
    // in questo modo ho lo stesso codice ripetuto per le 2 specs
    // va evitata la ripetizione dello stesso codice
    // per farlo prima delle specs si utilizza la funzione beforeEach() di jasmine
    // sposto questo codice nella callback del beforeEach()
    // const logger = jasmine.createSpyObj("LoggerService", ["log"]);

    // const calculator = new CalculatorService(logger);

    const result = calculator.subtract(2, 2);

    expect(result).toBe(0);
    expect(result).toBeLessThan(1);
    expect(result).not.toBe(1);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
