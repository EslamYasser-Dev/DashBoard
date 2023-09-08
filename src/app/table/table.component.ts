import { Component } from '@angular/core';
interface Customer{
  id:number,
  avatar:any,
  userName:string,
  phone:string,
  ticketID: string,
  ticketValue: number,
  cnimas: string,
  numberOfPersons: number,
  buyingTimes: string,
  ticket: string,
  ticketDownload: string
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
    Customers: Array<Customer>;
    constructor(){
        this.Customers = [  {
            id: 1,
            avatar: "../../assets/1.svg",
            userName: "احمد محمود",
            phone:"0123456789",
            ticketID: "C-101",
            ticketValue: 40,
            cnimas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",
            numberOfPersons: 1,
            buyingTimes: "مرة واحدة",
            ticket: "تذكرة رقم 45.pdf",
            ticketDownload:"www.tazkty.com/473847"
          },
          {
            id: 2,
            avatar: "../../assets/2.svg",
            userName: "محمد الغريب",
            phone:"0123456789",
            ticketID: "C-102",
            ticketValue: 30,
            cnimas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",
            numberOfPersons: 1,
            buyingTimes: "مرة واحدة",
            ticket: "تذكرة رقم 45.pdf",
            ticketDownload:""
          },
          {
            id: 3,
            avatar: "../../assets/3.svg",
            userName: "محمد الغريب",
            phone:"0123456789",
            ticketID: "C-102",
            ticketValue: 45,
            cnimas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",
            numberOfPersons: 1,
            buyingTimes: "مرة واحدة",
            ticket: "تذكرة رقم 45.pdf",
            ticketDownload:""
          },
          {
            id: 4,
            avatar: "../../assets/4.svg",
            userName: "محمد الغريب",
            phone:"0123456789",
            ticketID: "C-104",
            ticketValue: 54,
            cnimas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",
            numberOfPersons: 1,
            buyingTimes: "مرة واحدة",
            ticket: "تذكرة رقم 45.pdf",
            ticketDownload:""
        
          }]
    }
    track(index:number, customer:Customer){
      return customer.id;
    }
}

