import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    album: { bandName: string, albumName: string, year: string, owned: boolean, myRating: string} = {
        bandName: "Ed Sheeran",
        albumName: "X",
        year: "2017",
        owned: true,
        myRating: "9.5"
    }


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
    tiquete(){
        this.routerExtensions.navigate(["/search"],{clearHistory: true});
      }

      salir(){
        this.routerExtensions.navigate(["/home"],{clearHistory: true});
      }

}
