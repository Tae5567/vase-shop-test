import { Component , OnInit, Output, Input} from '@angular/core';
import { VasesService } from 'src/app/services/vases.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { VaseInterface } from 'src/app/shared/interface/Vase';
import { ActivatedRoute, Router } from '@angular/router';
import { Vase } from 'src/app/shared/models/vases';
import { VASES_URL } from 'src/app/shared/constants/urls';




@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit{

  addProductForm!: FormGroup;
  isSubmited = false;

  constructor(private fb: FormBuilder,
    private vaseService: VasesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      //set form controls
      Name: ['', Validators.required],
      Price: [0, Validators.required],
      Description: ['', Validators.required, Validators.minLength(50)],
      ImageURL: ['', Validators.required] // Ideally would want to be able to upload img from user device to db/homepage
      //ImageURL guide when running locally: add images to assets folder and add url: assets/image.jpg
    });

  }

  //get form controls
  get fc(){
    return this.addProductForm.controls;
  }

  //onsubmit/ onadd
  //submit form to parent (home-page) component
  //Idea: changes (add or edit) made will reflect on homepage and in database
  onSubmit(){
    this.isSubmited = true;
    if(this.addProductForm.invalid) return;

    const addValue = this.addProductForm.value;
    const vase: VaseInterface = {
      id: '',
      name: addValue.Name,
      price: addValue.Price,
      description: addValue.Description,
      imageUrl: addValue.ImageURL
    };

    this.vaseService.addVase(vase).subscribe(_ =>{
      this.router.navigate(['/']);
    })

    //console.log(this.addProductForm.value);
    //this.vaseService.addVase(this.addProductForm.value).subscribe((data:any) =>{
      //console.log(data);
      //this.router.navigate(['/']);
   // })
  }





}
