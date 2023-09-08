import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';
import { TicketComponent } from './ticket/ticket.component';
import { TableComponent } from './table/table.component';

@NgModule({
    declarations:[AppComponent, NavbarComponent, ChartComponent, TicketComponent, TableComponent],
    imports:[BrowserModule,
        ],

    bootstrap:[AppComponent]
})
export class AppModule{
    public chart: any;


}
