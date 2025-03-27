// metodo describe() di jasmine
// Create a group of specs (often called a suite).
// accetta 2 argomenti, il primo è il nome della suite di test, il secondo una callback che contiene una serie di specifiche (il codice da eseguire)
// dò alla suite di test lo stesso nome del file che voglio testare, in questo caso CalculatorService
// test suite è un group of specifications, una specification è un functional test
// specification o spec
describe("CalculatorService", () => {
  // per definire una spec utilizzo il metodo di jasmine it()
  // primo argomento nome della spec
  // una spec viene nominata con una stringa che definisce quello che deve fare il functional test
  // ad esempio nel calculator.service voglio testare il metodo add(), quindi mi aspetto che faccia la somma di 2 numeri
  // secondo argomento una callback con il body della spec
  it("should add two numbers", () => {
    // se una spec, un test, non è stato ancora implementato, si utilizza il metodo di jasmine pending() che in caso vengano runnati i tests non terrà conto delle specs contrassegnate da questo metodo, in modo da non avere errori
    pending();
  });

  // una suite di specs può contenere più specs, le definisco una per una tramite metodo it()
  // ne aggiungo un'altra per il metodo subtract()
  it("should subtract two numbers", () => {
    // pending();
    // voglio simulare un failing test
    // lo faccio tramite fail() method di jasmine
    fail();
    // il risultato del fail lo visualizzo nella pagina del server aperto da karma
  });

  // per eseguire i test si runna il comando ng test
  // questo comando builda l'intera app compresa di test
  // il package karma esegue e ci mostra i risultati dei test nel browser, lanciando un server che resta in ascolto
  // eseguendo ng test vengono eseguiti i test in live hot reload mode, cioè viene aperto un server che rimane in ascolto
  // per eseguire i test ed avere solo i risultati in console ho bisogno di eseguire ng test con il flag --no-watch
});
