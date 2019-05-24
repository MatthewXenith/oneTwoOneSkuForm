import { Component, OnInit } from '@angular/core';
import { SkuServiceService } from './sku-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-click-me',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})

export class ClickMeComponent implements OnInit{
  public skuForm: FormGroup;
  constructor(private skuService: SkuServiceService) {
    
  }

  ngOnInit(){
    this.skuForm = new FormGroup({
      oldSku: new FormControl(''),
      newSku: new FormControl(''),
      newDesc: new FormControl(''),
      orderType: new FormControl('')
    });
  }

  updateSku(skuForm: Object) {
    this.skuService.getSku(skuForm).subscribe((data) => this.clickMessage = JSON.stringify({ ...data }));
    
  }

  clickMessage = '';

  onSubmit(skuForm) {
    this.updateSku(this.skuForm.value);
  }
}