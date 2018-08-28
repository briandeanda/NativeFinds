import { Component } from "@angular/core";
import { TextField } from "ui/text-field";
import * as dialogs from 'ui/dialogs';

import { YelpService } from '../../core/services/yelp.service';
import { IBusiness } from '../../core/models/yelp.interface';

@Component({
    selector: "Home",
    moduleId: module.id,
    styleUrls: ['./home.component.css'],
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
        this.results = null;

        this.yelpService.getBusinessByName(textField.text)
        .subscribe(resp => {
            this.isLoading = false;
            this.results = resp.businesses;
        })
    }

    onItemTap(args) {
        let options = {
            title: "Ooops",
            message: "Feature Coming Soon!",
            okButtonText: "OK"
        };
        
        dialogs.alert(options).then(() => {
            console.log("Okay");
        });
    }
}
