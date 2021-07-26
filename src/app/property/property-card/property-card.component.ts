import { Component } from "@angular/core";

@Component({
  selector: "app-property-card",
  // template:"<h1>i am a card<h1>"
  templateUrl: "./property-card.component.html",
  styleUrls: ["./property-card.component.css"],
})
export class PropertyCardComponent {
  property:any={
    "Id":1,
    "Type":"House",
    "price":12000

  }
}
