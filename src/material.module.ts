import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [MatSidenavModule, MatInputModule],
  exports: [MatSidenavModule, MatInputModule]
})
export class MaterialModule {}
