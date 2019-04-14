import { Component, OnInit, ViewChild, AfterViewInit, Injectable } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SaesHttp } from '../../common/service/saes-http.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  operation: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', operation: ""},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', operation: ""},
];

export interface Question {
  id: number;
  title: string;
  description: string;
  difficulty: number;
  selections: string;
  analysis: string;
  type: number;
  accuracy: string;
};

export interface QuestionDto {
  items: Question[];
  totalCount: number;
}

const URL_QUERY_QUESTION = "question/query"

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
// implement AfterViewInit is for ngAfterViewInit
export class QuestionComponent implements OnInit, AfterViewInit {

  displayedColumns = ['name', 'weight', 'symbol', 'position', 'operation'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  expandedElement: PeriodicElement | null;

  //MatPaginator's property
  pageSize: number;
  pageIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private httpClient: SaesHttp
  ) 
  {}

  ngOnInit() {
    this.queryQuestion(5, 0);
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // or use setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public loadTable(event) {
    this.queryQuestion(event.pageSize, event.pageIndex * event.pageSize);
  }

  public queryQuestion(queryCount: number, skipCount: number) {
    const param = {"id": 1};
    this.httpClient.get(URL_QUERY_QUESTION, param, function(res){
      console.log(res);
    });
  }
}
