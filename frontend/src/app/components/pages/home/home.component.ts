import { Component, OnInit, ViewChild } from '@angular/core';
import { Vase } from '../../../shared/models/vases';
import { VasesService } from '../../../services/vases.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
//import { HttpClient, HttpParams, HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  vases:Vase[] = [];
  constructor(private vaseService: VasesService, activatedRoute:ActivatedRoute ) {
    let vaseObservable: Observable<Vase[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        vaseObservable =  this.vaseService.getAllBySearchTerm(params.searchTerm);
      else
      vaseObservable = vaseService.getAll();

      vaseObservable.subscribe((serverVases) => {
        this.vases = serverVases;
      })

    })

  }

  ngOnInit(): void {

  }

}
