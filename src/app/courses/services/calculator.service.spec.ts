import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
// ho importato a mano la classe TestBed perchè non me la vedeva
import { TestBed } from "@angular/core/testing";

describe("CalculatorService", () => {
  // la classe TestBed di Angular ci aiuta nel creare ambienti per lo Unit Testing
  // questa classe è nel modulo @angular/core/testing
  // mette a disposizione metodi per creare componenti e services in unit tests
  // metodo configureTestingModule({TestModuleMetadata})
  // accetta un oggetto con le proprietà di configurazione

  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    console.log("Before each....");

    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    // utilizzo il metodo .configureTestingModule()
    // voglio fornire a questa suite alcune dependencies in modo da poterle iniettare nelle specs
    TestBed.configureTestingModule({
      providers: [
        // dico che voglio che sia disponibile qui il CalculatorService
        CalculatorService,
        // inoltre non voglio utilizzare un LoggerService vero ma il mock che ho creato io
        // quindi devo dire di fornire una certa dipendenza indicandola tramite injectToken, cioè un valore unico che identifica la dependency da iniettare e che cosa è da iniettare, in questo caso il mock loggerSpy
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });
    // calculator = new CalculatorService(loggerSpy);
    // quindi ora creo un'istanza reale del CalculatorService che riceverà un mock del LoggerService (perchè le dipendenze che vengono iniettate qui nel file .spec.ts le ho definite nella proprietà providers del metodo .configureTestingModule() della classe TestBed)
    // lo faccio utilizzando il metodo statico .inject() della classe TestBed
    // .inject() Allows injecting dependencies in beforeEach() and it(). Note: this function (imported from the @angular/core/testing package) can only be used to inject dependencies in tests. To inject dependencies in your application code, use the inject function from the @angular/core package instead.
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
