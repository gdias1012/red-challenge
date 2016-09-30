import { Component, OnInit } from "@angular/core";
import { UserService } from "./service/user.service";
import { WidgetService } from "./service/widget.service";
import { User } from "./model/user";
import { Widget } from "./model/widget";

@Component({
    selector: "red-app",
    templateUrl: "views/dashboard.html",
    providers: [UserService, WidgetService]
})
export class DashboardComponent implements OnInit {
    filterUser: string;
    filterWidget: string;
    users: Array<User> = new Array<User>();
    filteredUsers: Array<User>;
    widgets: Array<Widget> = new Array<Widget>();
    filteredWidgets: Array<Widget>;

    constructor(private userService: UserService, private widgetService: WidgetService) { }

    ngOnInit(): void {
        this.loadUsers();
        this.loadWidgets();
    }

    loadUsers(): void {
        this.userService.listUsers()
            .subscribe(u => {
                this.users = u;
                this.filteredUsers = this.users;
            },
            e => console.log(e)
            );
    }

    loadWidgets(): void {
        this.widgetService.listWidgets()
            .subscribe(w => {
                this.widgets = w;
                this.filteredWidgets = this.widgets;
            },
            e => console.log(e)
            );
    }

    userFilter() {
        if (this.filterUser !== "") {
            this.filteredUsers = this.users.filter(user => user.name.toUpperCase().indexOf(this.filterUser.toUpperCase()) > -1);
        } else {
            this.filteredUsers = this.users;
        }
    }

    widgetFilter() {
        if (this.filterWidget !== "") {
            this.filteredWidgets = this.widgets.filter(widget => widget.name.toUpperCase().indexOf(this.filterWidget.toUpperCase()) > -1);
        } else {
            this.filteredWidgets = this.widgets;
        }
    }

}
