import { Component, OnInit } from '@angular/core';

import {data as crimeCount} from '../../db/crime_servers_count.json';
import {data as crimeData} from '../../db/crime_servers_graph.json';

import {data as malwCount} from '../../db/malware_count.json';
import {data as malwData} from '../../db/malware_graph.json';

import {data as botsCount} from '../../db/bots_count.json';
import {data as botsData} from '../../db/bots_graph.json';

import {data as credCount} from '../../db/credentials_count.json';
import {data as credData} from '../../db/credentials_graph.json';

import {data as cardCount} from '../../db/credit_cards_count.json';
import {data as cardData} from '../../db/credit_cards_graph.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public nav: number = 0
  public title: string = 'Crime servers'
  public titleCounter: Array<Number> = [
    crimeCount[0]['attributes']['count'],
    malwCount[0]['attributes']['count'],
    botsCount[0]['attributes']['count'],
    credCount[0]['attributes']['count'],
    cardCount[0]['attributes']['count']
  ]

  constructor() { }

  async ngOnInit() {
    // const headers = new Headers({
    //   "Authorization": "Token 1b52bedb-e675-41ee-aca1-9e5972182748",
    //   "Content-Type": "application/json"
    // })

    // const data = await fetch(`https://community.blueliv.com/api/v1/sparks/timeline?since_id=${0}&limit=${10}`, {
    //   method: 'GET',
    //   headers,
    //   mode: 'no-cors',
    //   cache: 'no-cache'
    // })
    // console.log(data)
  }

  handleNavigation(e) {

    if (e === 0) {
      this.nav = 0
      this.title = 'Crime servers'
      console.log(crimeCount[0])
      console.log(crimeData)
    } else if (e === 1) {
      this.nav = 1
      this.title = 'Malware'
      console.log(malwCount[0])
      console.log(malwData)
    } else if (e === 2) {
      this.nav = 2
      this.title = 'Bots'
      console.log(botsCount[0])
      console.log(botsData)
    } else if (e === 3) {
      this.nav = 3
      this.title = 'Credentials'
      console.log(credCount[0])
      console.log(credData)
    } else if (e === 4) {
      this.nav = 4
      this.title = 'Cards'
      console.log(cardCount[0])
      console.log(cardData)
    }

  }

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Crime' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
