import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';
import { Category } from '../pojo/category';
import { Spend } from "../pojo/spend";
import { SpendsService } from '../spends.service';

@Component({
  selector: 'app-add',
  template: `
  <div class="full-h-list">
    <button class="full-h" routerLink="/add/exp">Expense</button>
    <button class="full-h" routerLink="/add/loan">Loan</button>
    <button class="full-h" routerLink="/add/goal">Goal</button>
  </div>
  `
})
export class AddComponent implements OnInit {
  constructor(private spnSrv: SpendsService) { }
  ngOnInit(): void {
  }

}
