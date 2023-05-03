import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VasesService } from 'src/app/services/vases.service';
import { Vase } from 'src/app/shared/models/vases';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  //show product details
  vase!: Vase;
  constructor(activatedRoute:ActivatedRoute, vasesService:VasesService){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      vasesService.getVaseById(params.id).subscribe(serverVases => {
        this.vase = serverVases;
      })
    })

  }

  ngOnInit(): void {

  }
}
