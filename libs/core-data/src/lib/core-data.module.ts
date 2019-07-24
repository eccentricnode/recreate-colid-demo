import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SvgService } from './svg/svg.service';
import { HoldDeleteDirective } from './delete/hold-delete.directive';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    SvgService
  ],
  declarations: [HoldDeleteDirective],
})
export class CoreDataModule {}
