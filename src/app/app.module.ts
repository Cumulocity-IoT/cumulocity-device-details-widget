/*
* Copyright (c) 2020 Software AG, Darmstadt, Germany and/or its licensors
*
* SPDX-License-Identifier: Apache-2.0
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/import { NgModule } from '@angular/core';
  import { AppComponent } from './app.component';
  import { NoopAnimationsModule } from '@angular/platform-browser/animations';
  import { GpDeviceDetailsWidgetModule } from './../../projects/gp-device-details-widget/src/lib/gp-device-details-widget.module';
  import {
  BasicAuth,
  Client,
  InventoryService,
  IdentityService
} from '@c8y/client';
  import { CoreModule, OptionsService, } from '@c8y/ngx-components';
  const auth = new BasicAuth({
  user: '',
  password: '',
  tenant: ''
});
  const client = new Client(auth, '');
  client.setAuth(auth);
  const fetchClient = client.core;
  @NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NoopAnimationsModule,
    GpDeviceDetailsWidgetModule,
    CoreModule.forRoot()
  ],
  providers: [
    , {
      provide: InventoryService,
      useFactory: () => {
        return new InventoryService(fetchClient);
      }
    },
    {
      provide: IdentityService,
      useFactory: () => {
        return new IdentityService(fetchClient);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
