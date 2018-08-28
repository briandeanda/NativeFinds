import { Component } from "@angular/core";
import { TextField } from "ui/text-field";

import { YelpService } from '../../core/services/yelp.service';
import { IBusiness } from '../../core/models/yelp.interface';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    public name: string;
    public results: [IBusiness];
    public isLoading = false;

    constructor(private yelpService: YelpService) {
        // Use the component constructor to inject providers.
    }

    search(args) {
        let textField = <TextField>args.object;
        this.isLoading = true;

        this.yelpService.getBusinessByName(textField.text)
        .subscribe(resp => {
            console.log(resp)
            this.isLoading = false;
            this.results = resp.businesses;
        })
    }
}
