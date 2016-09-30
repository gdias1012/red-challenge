import { Component, OnInit } from "@angular/core";
import { UserService } from "./service/user.service";
import { User } from "./model/user";

@Component({
  selector: "red-app",
  templateUrl: "views/user.html",
  providers: [UserService]
})
export class UserComponent implements OnInit {
  filterUser: string;
  users: Array<User> = new Array<User>();
  filteredUsers: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.listUsers().subscribe(
      u => {
        this.users = u;
        this.filteredUsers = this.users;
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

}
