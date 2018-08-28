import { NgModule, Optional, SkipSelf } from '@angular/core';

import { YelpService } from './services/yelp.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ YelpService ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    }
 }
