import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditivesService } from 'src/app/services/additives.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private _api:AdditivesService) { }


  ngOnInit(): void {
    this.items = this._api.getAll();
  }

}
