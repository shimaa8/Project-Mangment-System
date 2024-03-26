import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { UsersService } from './services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBlockUserComponent } from './components/confirm-block-user/confirm-block-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersTable: any;
  users: any[] = [];
  constructor(private _UsersService: UsersService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    let paramData = {
      pageSize: 10,
      pageNumber: 1,
      // userName: "",
      // email: '',
      // country: ''
    }
    this._UsersService.getUsers(paramData).subscribe({
      next: (res) => {
        console.log(res);

        this.usersTable = res;
        this.users = res.data

      }
    })
  }



  openDialog(dataItem: any) {
    const dialogRef = this.dialog.open(ConfirmBlockUserComponent, {
      data: dataItem
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.onToggleBlockUser(result)
      }
    });
  }


  onToggleBlockUser(id: number) {
    this._UsersService.onToggleActivateUser(id).subscribe({
      next: (res) => {
        console.log(res);

      },error(err) {
        
      },complete:()=>{
        this.getAllUsers()
      }
    })
  }

}
