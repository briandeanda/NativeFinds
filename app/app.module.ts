import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { RestangularModule, Restangular } from 'ngx-restangular';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeModule } from "./components/home/home.module"

// Function for setting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
    RestangularProvider.setBaseUrl('https://api.yelp.com/v3');
    RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer LzVzeZ19FYa0AYQK0OXbU5c_hWC39MI_xpldo8SmXO79pSJ3FbeQf8ySpNXFKE2jdMBtngcU0SwGviHtv75Whf3B7Xm4uk486tMppkK211T7ovzG2bktbPeo736FW3Yx'});
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HomeModule,
        RestangularModule.forRoot(RestangularConfigFactory),
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
