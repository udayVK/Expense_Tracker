import { Component, Input, OnInit } from '@angular/core';
import { SpendRender } from '../find-spend/find-spend.component';
import { Category } from '../pojo/category';
import { Spend, defaultSpend } from '../pojo/spend';
import { SpendsService } from '../spends.service';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.css']
})
export class SpendComponent implements OnInit {

  
  // spend:Spend = {purpose:'test',money:20,date:new Date(),toWhom:2};
  @Input()
  spends:SpendRender = {spendMap:new Map};
  constructor(private spnSrv:SpendsService) { }

  ngOnInit(): void {
    setTimeout(()=>{console.log(this.spends)},2000);
  }

  repeatSpend(spendId:number, category:string){
    let spendToRepeat = this.spends.spendMap.get(category)?.filter(sp=>sp.id===spendId)[0];
    if(spendToRepeat){
      let spend = {...spendToRepeat}
      //backend needs the date format to be in the form of yyyy-MM-dd. so converting it before sending
      spend.date = new Date().toLocaleDateString('fr-CA');
      this.spends.spendMap.get(category)?.push(spend);
      spend.id = 0;
      this.spnSrv.postSpend(spend).subscribe({next:(data)=>{console.log(data)},error:(err)=>{console.log(err)}})
      console.log(spend)
    }
  }

}
