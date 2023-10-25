import { NgModule } from "@angular/core";
import { CounterComponent } from "./Components/counter/counter.component";


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
