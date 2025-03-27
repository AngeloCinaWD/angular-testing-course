import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: "root",
})
export class CalculatorService {
  // JASMINE: Behavior-Driven JavaScript testing framework
  // in jasmine i file che contengono i test sono .spec.ts
  // creo un nuovo file calculator.service.spec.ts in /services

  constructor(private logger: LoggerService) {}

  add(n1: number, n2: number) {
    this.logger.log("Addition operation called");
    return n1 + n2;
  }

  subtract(n1: number, n2: number) {
    this.logger.log("Subtraction operation called");
    return n1 - n2;
  }
}
