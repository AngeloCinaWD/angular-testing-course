import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

// una x prima del subscribe non fa eseguire i test della suite
// xdescribe("CalculatorService", () => {
// una f prima dà il focus alla suite e verrà eseguita solo questa se ce ne sono altre
// fdescribe("CalculatorService", () => {
describe("CalculatorService", () => {
  let calculator: CalculatorService, loggerSpy: any;

  // quello che c'è nel beforeEach() viene eseguita ogni volta prima di una spec perchè per eseguire uno Unit Test ogni spec deve essere isolata completamente dall'altra, quindi per ognuna una istanza nuova
  beforeEach(() => {
    console.log("Before each....");

    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    // in questo modo stiamo utilizzando il CalculatorService come istanza reale del service CalculatorService, invece per il LoggerService ne creiamo una mock, fittizia tramite spies di jasmine
    // questo perchè il test che stiamo implemetando è uno Unit Test, cioè un test per una singola unità del codice, in questo caso a noi interessa testare il CalculatorService, se i suoi metodi fanno quello che ci aspettiamo debbano fare
    // quindi isolo il CalculatorService dalle sue dipendenze esterne, non mi interessa cosa fa l'altro service
    // in caso volessi testare più unità insieme, si parla di Integration Test
    // se passassi una reale istanza del LoggerService starei eseguendo un Integration Test
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });

    calculator = TestBed.inject(CalculatorService);
  });

  // una x prima dell'it() disabilita la singola spec
  // xit("should add two numbers", () => {
  // una f prima dell'it() dà il focus alla singola spec, verrà eseguita solo questa
  // fit("should add two numbers", () => {
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
