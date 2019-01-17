import { Component, OnInit } from '@angular/core';
import {getFullData} from '../api.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  public listData: Array<Object> = [{}]

  ngOnInit() {

    console.log(getFullData(window.location.search.substring(1, window.location.search.length - 1)))

  }

}
