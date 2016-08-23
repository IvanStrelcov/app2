import { NgModule,
         ModuleWithProviders } from '@angular/core';
import { CommonModule }        from '@angular/common';

import { UserComponent }       from '../user';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ UserComponent ],
  exports:      [ UserComponent,
                  CommonModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
