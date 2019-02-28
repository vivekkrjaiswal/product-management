import { NgModule } from '@angular/core';

import { ProductmanagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ProductmanagementSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ProductmanagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProductmanagementSharedCommonModule {}
