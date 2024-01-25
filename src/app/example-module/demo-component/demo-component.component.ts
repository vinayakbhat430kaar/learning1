import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ExampleActions from '../../example-store/example-store.action';
import * as ExampleSelectors from '../../example-store/example-store.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.less']
})
export class DemoComponentComponent implements OnInit {
  storeData$: Observable<string[]>;
  
  constructor(private store:Store){
    this.storeData$ = this.store.select(ExampleSelectors.selectData);
  }
  ngOnInit(): void {
    this.store.dispatch(ExampleActions.addData({payload:'Vinayaka'}));
  }

}
