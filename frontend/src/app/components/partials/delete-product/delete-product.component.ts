import { Component, OnInit } from '@angular/core';
import { VasesService } from 'src/app/services/vases.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vase } from 'src/app/shared/models/vases';
import { VASES_URL } from 'src/app/shared/constants/urls';



@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  VaseId = '';
  vase!: Vase;
//deleting: any;

  constructor(private vaseService: VasesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      ///activatedRoute.params.subscribe((params) => {
      //  if(params.id)
       /// vaseService.deleteVaseById(params.id).subscribe(serverVases => {
       //  this.vase = serverVases;
       // })
     // })
    }

  ngOnInit(): void {

  }

  delete(deleteId:string){
    this.vaseService.deleteVaseById(deleteId).subscribe(vase =>{
      this.router.navigate(['/']);
    })
  }
}
