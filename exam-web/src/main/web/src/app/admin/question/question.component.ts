import { Component, OnInit, ViewChild, AfterViewInit, Injectable } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SaesHttp } from '../../common/service/saes-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  operation: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', operation: ''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', operation: ''},
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
}

export interface QuestionDto {
  items: Question[];
  totalCounts: number;
}

const URL_QUERY_QUESTION = 'question/query';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
// implement AfterViewInit is for ngAfterViewInit
export class QuestionComponent implements OnInit, AfterViewInit {

  questionData: QuestionDto;
  displayedColumns = ['title', 'description', 'difficulty', 'accuracy', 'operation'];
  dataSource = new MatTableDataSource<Question>();

  // MatPaginator's property
  pageSize: number;
  pageIndex: number;

  // Select with multiple selection
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private httpClient: SaesHttp
  ) {}

  ngOnInit() {
    this.queryQuestion(5, 0); // Init page. Display 5 items
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
    const param = {'count': queryCount, 'skipCount': skipCount};
    this.httpClient.get(URL_QUERY_QUESTION, param, function(res: Array<Question>) {
      this.questionData.items = res;
      this.questionData.totalCounts = res.length;
      this.dataSource.ad
    });
  }
}
