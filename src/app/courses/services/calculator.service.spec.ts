import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  it("should add two numbers", () => {
    // la prima cosa da fare per eseguire un test su una classe è istanziarne una
    // il costruttore del CalculatorService si aspetta che gli venga passata una istanza del LoggerService
    const calculator = new CalculatorService(new LoggerService());

    // salvo in una const il risultato della funzione che voglio testare
    const result = calculator.add(2, 2);

    // per controllare che un test sia valido vanno dichiarate delle asserzioni
    // lo faccio tramite metodo expect(variabile da controllare) concatenando il matcher .toBE(risultato che mi aspetto)
    // di matchers come .toBe() ce ne sono diversi a seconda di quello che voglio controllare
    // asserisco che la const result avrà valore 4, se vero il test è superato
    expect(result).toBe(
      4,
      "posso aggiungere un messaggio in caso di fail del test"
    );
  });

  it("should subtract two numbers", () => {
    // implemento il test per il metodo subtract
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.subtract(2, 2);

    // posso mettere più expectations
    expect(result).toBe(0);
    expect(result).toBeLessThan(1);
    // utilizzo il .not prima di un matcher, mi aspetto che il risultato non sia 1
    expect(result).not.toBe(1);
  });
});
