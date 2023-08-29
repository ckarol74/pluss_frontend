import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TrayComponent } from './tray/tray.component';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './shops/shop/shop.component';
import { ShopsComponent } from './shops/shops.component';

@NgModule({
  declarations: [
    DialogComponent,
    SnackbarComponent,
    TrayComponent,
    ShopComponent,
    ShopsComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [TrayComponent, DialogComponent],
  entryComponents: [SnackbarComponent],
})
export class CommonComponentsModule {}
