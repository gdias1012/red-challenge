import { Component, OnInit } from "@angular/core";
import { WidgetService } from "./service/widget.service";
import { Widget } from "./model/widget";
import { DataTableDirectives } from "../node_modules/angular2-datatable/datatable";
import { Router } from "@angular/router";

@Component({
    selector: "red-app",
    templateUrl: "./views/widget.html",
    providers: [WidgetService]
})
export class WidgetComponent implements OnInit {
    widget: Widget = new Widget();
    filterWidget: string;
    widgets: Array<Widget> = new Array<Widget>();
    filteredWidgets: Array<Widget>;

    constructor(private widgetService: WidgetService, private router: Router) { }

    ngOnInit(): void {
        this.loadWidgets();
    }

    loadWidgets(): void {
        this.widgetService.listWidgets().subscribe(w => {
                this.widgets = w;
                this.filteredWidgets = this.widgets;
            },
            e => console.log(e)
        );
    }

    widgetFilter(): void {
        if (this.filterWidget !== "") {
            this.filteredWidgets = this.widgets.filter(widget =>
                widget.name.toUpperCase().indexOf(
                    this.filterWidget.toUpperCase()) > -1);
        } else {
            this.filteredWidgets = this.widgets;
        }
    }

    save(): void {
        if (!this.widget.melts) {
            this.widget.melts = false;
        }
        this.widgetService
            .save(this.widget)
            .subscribe(
                () => this.router.navigate(["/widget"]),
                e => console.log(e)
            );
    }

    itemSelected(w: Widget): void {
        this.widget = w;
    }

}
