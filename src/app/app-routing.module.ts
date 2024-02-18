import { NgModule } from "@angular/core";
import { Route, RouterModule} from "@angular/router";

const routes :Route[]=[
    {
        path:'',
        loadChildren:()=>import('../app/home/home.module').then(module=>module.HomeModule)
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}