import { Component, OnInit } from "@angular/core";
import { styleA, styleB, styleC } from "./app.component.styles";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public styleA: object;
  public styleB: object;
  public styleC: object;

  public ngOnInit(): void {
    this.styleA = styleA;
    this.styleB = styleB;
    this.styleC = styleC;
  }
}
