import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponentComponent } from './demo-component/demo-component.component';

const routes: Routes = [
    { path: '', component: DemoComponentComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExampleRoutingModule { }
