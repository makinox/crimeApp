import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nav: number = 0
  title: string = 'Crime servers'

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
    } else if (e === 1) {
      this.nav = 1
      this.title = 'Malware'
    } else if (e === 2) {
      this.nav = 2
      this.title = 'Bots'
    } else if (e === 3) {
      this.nav = 3
      this.title = 'Credentials'
    } else if (e === 4) {
      this.nav = 4
      this.title = 'Cards'
    }
    
  }

}
