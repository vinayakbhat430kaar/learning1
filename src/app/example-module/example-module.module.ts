import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { FormsModule } from '@angular/forms';
import { ExampleRoutingModule } from './example-module-routing.module';
import { ExampleStoreModule } from '../example-store/example-store.module';
import { NgZorroAntdModule } from '../ant-design/ant-design.module';



@NgModule({
  declarations: [
    DemoComponentComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ExampleRoutingModule,
    ExampleStoreModule
  ]
})
export class ExampleModuleModule { }
