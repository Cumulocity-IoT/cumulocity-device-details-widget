
# Cumulocity Devices Details Widget[<img width="35" src="https://user-images.githubusercontent.com/67993842/97668428-f360cc80-1aa7-11eb-8801-da578bda4334.png"/>](https://github.com/SoftwareAG/cumulocity-device-details-widget/releases/download/2.0.0/device-device-details-runtime-widget-2.0.0.zip)
## Overview

This is an Angular widget, which is designed to display the Device Details can fetch the details from the Api call  and can display data according to the fields provided.
The angular widget has the ability to summarize  information relating to the names from the Api call.

### Please choose Device Details Widget release based on Cumulocity/Application builder version:

|APPLICATION BUILDER | CUMULOCITY | DEVICE DETAIL WIDGET |
|--------------------|------------|-----------------------|
| 1.3.x              | >= 1011.x.x| 2.x.x                 |   |  

![devicedetails](https://user-images.githubusercontent.com/89508319/158115263-33631dd6-93b6-43be-801b-f9e504a28324.JPG)



![devicedetailback](https://user-images.githubusercontent.com/89508319/158115309-508ce9cf-d2e8-4476-992f-aaa2c0f5b508.JPG)


## Features

## Installation

### Runtime Widget Deployment?

 - This widget support runtime deployment. Download  [Runtime Binary](https://github.com/SoftwareAG/cumulocity-device-details-widget/releases/download/2.0.0/device-details-runtime-widget-2.0.0.zip)  and follow runtime deployment instructions from  [here](https://github.com/SoftwareAG/cumulocity-runtime-widget-loader).

## Supported Product Versions

-  **App Builder:**  Tested with Cumulocity App Builder version 1.3.0

**Requirements:**
-   Git
    
-   NodeJS (release builds are currently built with  `v14.18.0`)
    
-   NPM (Included with NodeJS)
- 
**External dependencies:**

```
"@angular/cdk: "^11.2.13",

```

**Installation Steps For App Builder:**

**Note:**  If you are new to App Builder or not yet downloaded/clone app builder code then please follow  [App builder documentation(Build Instructions)](https://github.com/SoftwareAG/cumulocity-app-builder)  before proceeding further.

1.  Open Your existing App Builder project and install external dependencies by executing below command or install it manually.
    
    ```
    
    npm i @angular/cdk: "^11.2.13"
    
    ```
    
2. Grab the Device  detail widget [Latest Release Binary](https://github.com/SoftwareAG/cumulocity-device-detail-widget/releases/download/2.0.0/device-details-runtime-widget-2.0.0.tgz)
3. Install the Binary file in app builder.
    
    ```
    
    npm i <binary file path>/device-details-runtime-widget.tgz
    
    ```
    
4.  Import Device detail Module

Import GpDeviceDetailsWidgetModule in app.module.ts and also place the imported Module under  `@NgModule`.

```
import { GpDeviceDetailsWidgetModule } from 'gp-device-details';
@NgModule({
  imports: [
    GpDeviceDetailsWidgetModule
      ]
  })
```

5.  Congratulation! Installation is now completed. Now you can run app builder locally or build and deploy it into your tenant.
    
    ```
    //Start App Builder
    
    npm run start
    
    // Build App
    
    
    npm run build
    
    
    // Deploy App
    
    
    npm run deploy


  ## Build Instructions

**Note:**  It is only necessary to follow these instructions if you are modifying/extending this widget, otherwise see the  [Installation Guide](https://github.com/SoftwareAG/cumulocity-device-details-widget#Installation).

**Requirements:**

-   Git
    
-   NodeJS (release builds are currently built with  `v14.18.0`)
    
-   NPM (Included with NodeJS)
    

**Instructions**

1.  Clone the repository:
    
    ```
    
    git clone https://github.com/SoftwareAG/cumulocity-device-details-widget.git

    
    
    ```
    
2.  Change directory:
    
    ```
    
    cd cumulocity-device-details-widget
    
    
    ```
    
3.  (Optional) Checkout a specific version:
    
    ```
    
    git checkout <your version>
    
    
    ```
    
4.  Install the dependencies:
    
    ```
    
    npm install
    
    
    ```
    
5.  (Optional) Local development server:
    
    ```
    
    ng serve
    
    
    ```
    
6.  Build the app:
    
    ```
    
    npm run buildPatch
    
    
    ```
    
7.  Deploy the app: Follow the  [Installation instructions](https://github.com/SoftwareAG/cumulocity-device-details-widget#Installation).


## QuickStart

This guide will teach you how to add widget in your existing or new dashboard.

**NOTE:**  This guide assumes you have followed the  [Installation instructions](https://github.com/SoftwareAG/cumulocity-device-details-widget#Installation)

1.  Open you application from App Switcher
    
2.  Add new dashboard or navigate to existing dashboard
    
3.  Click  `Add Widget`
    
4.  Search for  `Device detail 
    
5.  Select  `Target Assets or Devices`

6.In the config add the URL,Document list from url,add the coulmn headings and column names of the api
    
6.  Click  `Save`

Congratulations! Device Details Widget is configured.

## User Guide

Click on Add Widget and Select Device Detail as a widget.In the configuration,you have to select the device group of your interest.

- **Target assets or devices:** User can select a device/asset or device/asset group.If group is selected,list of devices/assets will be display.
- **Device Detail URL:** User can add the URL that needs to display for the columns
- **Name of the Main document List from API:** User can add the document list from api.
- **Table Column heading:** User can add the columns for your device details widget.
- **Name of the Column names from API:** User can add the corresponding columns from api to display the device detail widget.

    
----------
This widget is provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________

For more information you can Ask a Question in the  [TECHcommunity Forums](https://tech.forums.softwareag.com/tag/Cumulocity-IoT).




