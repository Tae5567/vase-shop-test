import { Component , OnInit, Output, Input} from '@angular/core';
import { VasesService } from 'src/app/services/vases.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { VaseInterface } from 'src/app/shared/interface/Vase';
import { ActivatedRoute, Router } from '@angular/router';
import { Vase } from 'src/app/shared/models/vases';
import { VASES_URL } from 'src/app/shared/constants/urls';


@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit{

  VaseId = '';

  constructor(private fb: FormBuilder,
    private vaseService: VasesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {

  }



  //onsubmit/ onadd
  //submit form to parent (home-page) component
  //Idea: changes (add or edit) made will reflect on homepage and in database
  edit(editId:string){
    this.vaseService.editVase(editId).subscribe(vase =>{
      this.router.navigate(['/']);
    })
  }

}
