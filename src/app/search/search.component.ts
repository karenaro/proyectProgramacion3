import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    constructor(private routerExtensions:RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    salir(){
        this.routerExtensions.navigate(["/browse"],{clearHistory: true});
      }
}
