import { Component, OnInit } from '@angular/core';
import { SkuServiceService } from './sku-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material';

@Component({
  selector: 'app-click-me',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})

export class ClickMeComponent implements OnInit{
  public skuForm: FormGroup;
  constructor(private skuService: SkuServiceService, private toastr: ToastrService) {
  }

  ngOnInit(){
    this.skuForm = new FormGroup({
      oldSku: new FormControl(''),
      newSku: new FormControl(''),
      newDesc: new FormControl(''),
      updateSTDOrRC: new FormControl('')
    });
  }

  updateSku(skuForm: Object) {
    this.skuService.getSku(skuForm).subscribe(
      (data) => this.onSuccess(data),
      (error) => this.onError(error));
  }

  onSuccess(data) {
    if (!data.affectedRows) {
      this.toastr.warning(`Successfully called salespad DB, but 0 rows were updated. (Check SKUs)`);
    } else {
    this.toastr.success(`Succesfully updated salespad DB. ${data.affectedRows} rows updated`);
    }
  }
  onError(error){
    this.toastr.error('Failed to call salespad DB');
  }

  onSubmit(skuForm) {
    if (!this.skuForm.value.oldSku || !this.skuForm.value.newSku) {
      this.toastr.error('Please Enter Values for both Old SKU and New SKU');
    } else {
    this.skuForm.value.oldSku = JSON.stringify(this.skuForm.value.oldSku).replace(/\s/g, "");
    this.skuForm.value.newSku = JSON.stringify(this.skuForm.value.newSku).replace(/\s/g, "");
    // console.log(JSON.stringify(this.skuForm.value));
    // this.toastr.success('Test');
    this.updateSku(this.skuForm.value);
    this.skuForm.reset();
    }
  }
}
