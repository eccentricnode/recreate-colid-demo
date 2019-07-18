import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SvgService } from './svg/svg.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    SvgService
  ],
})
export class CoreDataModule {}
