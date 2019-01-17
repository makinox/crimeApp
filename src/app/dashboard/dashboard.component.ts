import { Component, OnInit } from '@angular/core';

import {getCounters, getCrimeData, getMalwData, getBotsData, getCardData, getCredData} from '../api.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public nav: number = 0
  public title: string = 'Crime servers'
  public titleCounter: Array<Number> = [...getCounters()]
  public lineChartData: Array<any> = [{ data: getCrimeData()[0], label: '' }];
  public lineChartLabels: Array<any> = getCrimeData()[1];
  public lineChartOptions: any = {responsive: true};
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartType: string = 'line';

  constructor() { }

  async ngOnInit() {

    // console.log(crimeData)
    // console.log(crimeData.map(e => e.id))
    // console.log(crimeData.map(e => e.attributes.count))

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

    // console.log(getCrimeData())
  }

  handleNavigation(e) {

    if (e === 0) {
      this.nav = 0
      this.title = 'Crime servers'
      this.lineChartData = [{ data: getCrimeData()[0], label: '' }];
      this.lineChartLabels = getCrimeData()[1];
    } else if (e === 1) {
      this.nav = 1
      this.title = 'Malware'
      this.lineChartData = [{ data: getMalwData()[0], label: '' }];
      this.lineChartLabels = getMalwData()[1];
    } else if (e === 2) {
      this.nav = 2
      this.title = 'Bots'
      this.lineChartData = [{ data: getBotsData()[0], label: '' }];
      this.lineChartLabels = getBotsData()[1];
    } else if (e === 3) {
      this.nav = 3
      this.title = 'Credentials'
      this.lineChartData = [{ data: getCredData()[0], label: '' }];
      this.lineChartLabels = getCredData()[1];
    } else if (e === 4) {
      this.nav = 4
      this.title = 'Cards'
      this.lineChartData = [{ data: getCardData()[0], label: '' }];
      this.lineChartLabels = getCardData()[1];
    }

  }

  route(link) {
    window.location.href = `/list?${link.split(' ')[0]}`
  }
}
