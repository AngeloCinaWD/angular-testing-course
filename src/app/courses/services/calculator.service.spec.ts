import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

// quello implementato qui è uno unit test, cioè viene testa una singola unità dell'app, isolandola dal resto
// quindi se uno di questi test fallisce il problema è solo all'interno della singola unità, in questo caso nel CalculatorService
describe("CalculatorService", () => {
  it("should add two numbers", () => {
    // il metodo .add() chiama al suo interno un altro servive
    // vogliamo per esempio vedere quante volte viene chiamato questo service durante l'esecuzione del metodo, ad esempio perchè so che è un service che consuma molta memoria e voglio monitorarlo
    // per fare questo utilizzo le spies di jasmine
    // salvo l'istanza del LoggerService in una const
    // const calculator = new CalculatorService(new LoggerService());
    // in questo modo stiamo pèassando una vera istanza del LoggerService al CalculatorService che testiamo
    // const logger = new LoggerService();

    // potremmo passare una fake istance del LoggerService creandola con jasmine tramite metodo statico createSpyObj()
    // il primo argomento è il nome dell'oggetto che creo ed l secondo un array con i metodi che questo oggetto deve contenere
    // creo un oggetto che si chiama LoggerService ed ha un metodo chiamato log e lo passo al costrutore del CalculatorService
    // creando uno spyObj non ho bisogno del metodo spyOn
    const logger = jasmine.createSpyObj("LoggerService", ["log"]);
    // voglio "spiare" questo oggetto logger
    // lo faccio col metodo spyOn() che accetta 2 parametri: l'oggetto da spiare e la lista dei metodi che vogliamo spiare
    // l'oggetto logger ha un solo metodo che si chiama log, questo metodo (se non lo definiamo noi) non ritorna niente
    // spyOn(logger, "log");

    const calculator = new CalculatorService(logger);

    const result = calculator.add(2, 2);

    expect(result).toBe(
      4,
      "posso aggiungere un messaggio in caso di fail del test"
    );

    // il metodo log dell'oggetto logger lo utilizziamo per le nostre asserzioni
    // utilizzo il matcher toHaveBeenCalledTimes() ed indico quante volte mi aspetto che il metoso venga chiamato
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.subtract(2, 2);

    expect(result).toBe(0);
    expect(result).toBeLessThan(1);
    expect(result).not.toBe(1);
  });
});
