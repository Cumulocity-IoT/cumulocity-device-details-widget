# *Device Details Chart Widget*


## Overview

This is an Angular widget, which is designed to display the Device Details both from the device-specific managed object and by fetching the information from the master data relating to DeviceDate.


The angular widget has the ability to summarize device-specific information relating to 
Customer Name:
Serial Number:
Model Name:
Manufacturer Name:
Manufactured Date:
Scheduled Maintenance:
Running Percent:
Failure Prediction.

### Please choose Device at Risk Widget release based on Cumulocity/Application builder version:

|APPLICATION BUILDER | CUMULOCITY | DEVICE AT RISK WIDGET |
|--------------------|------------|-----------------------|
| 1.3.x              | >= 1011.x.x| 2.x.x                 |
| 1.2.x              | 1010.x.x   | 1.x.x                 |  

![devicedetails](https://user-images.githubusercontent.com/89508319/158115263-33631dd6-93b6-43be-801b-f9e504a28324.JPG)



![devicedetailback](https://user-images.githubusercontent.com/89508319/158115309-508ce9cf-d2e8-4476-992f-aaa2c0f5b508.JPG)


## Features


### Runtime Widget Deployment?

 - This widget support runtime deployment. Download  [Runtime Binary](https://github.com/SoftwareAG/cumulocity-device-details-widget/releases/download/2.0.0/device-details-runtime-widget-2.0.0.zip)  and follow runtime deployment instructions from  [here](https://github.com/SoftwareAG/cumulocity-runtime-widget-loader).

## Supported Product Versions

-  **App Builder:**  Tested with Cumulocity App Builder version 1.3.0

**Requirements:**
-   Git
    
-   NodeJS (release builds are currently built with  `v14.18.0`)
    
-   NPM (Included with NodeJS)


## Prerequisites

##### Nodejs and npm package Installation

 -  Go through the following link to Install Nodejs and npm package
     [Nodejs and npm package Installtion](https://treehouse.github.io/installation-guides/windows/node-windows.html)

   ##### Angular version 
  - Angular CLI version 7.3.9 (Angular 7).
    
    Installation command:
     ```cmd
    npm install -g  @angular/cli@7.3.9 
    ``` 

   ##### Mandatory Library for Widget
  - Angular CDK version 7.3.7
    Installation command:  ```npm i @angular/cdk@7.3.7 ``` 

  - Angular Material version 7.3.7
     Installation command: ```npm i @angular/material@7.3.7 ``` 

  - Cumulocity Library: 
      Installation command : 

 ```cmd
npm install @c8y/client
npm install @c8y/ngx-components 
npm install @c8y/style
npm install @c8y/ng1-modules
``` 
**Note: This widget can be used as a custom widget in both cockpit and cumulocity-app-builder application**

 ## Device Details widget as a custom widget for Cockpit Application 

  1. Use your existing cockpit application or please refer  [Cumulocity  Guide](https://cumulocity.com/guides/web/how-to/#add-a-custom-widget) to create a new cockpit application.
  2. Make sure to install all pre-specified Mandatory Library under [Prerequisites](https://labcase.softwareag.com/projects/c8y-devices-at-risk/wiki/Wiki#Prerequisites) in your cockpit application.
    So that your application has the following entries in `package.json `.
```
"@angular/cdk": "7.3.7",
"@angular/material": "7.3.7",
"core-js": "^2.6.2",
"@c8y/ngx-components": "^1005.0.3",
"@c8y/ng1-modules": "^1005.0.3",
"@c8y/style": "^1005.0.3",
 ```

**Note: Even if some of the libraries are available please do install, that will only update the library which is already available with the latest changes and also update its dependencies.
**
###  Cumulocity: Custom Fields in MongoDB

As of now, device-specific generic fields are displayed like: likeID, Name, Type, Status, Creation Time, Model and Serial Number

### Installation

1.  Download the Widget source code from the Repository within this project.
2.  Create a Minorbuild binary file from the source code.
      
       Follow the below-specified command to create a Minorbuild binary file

      i) run npm i command to install all library files specified in source code
      ```npm i ```  and  ```npm run build ``` 

      ii) run npm run buildMinor command to create a binary file under dist folder
     ```npm run buildMinor ``` 

      iii) Copy the binary file **gp-order-device-details-0.1.0.tgz** the latest one from the dist folder and Place the binary file under any folder.

3. This could be used in conjunction with the application builder/cockpit.

### Deployment Of Device Details Chart widget In Cockpit Application

##### 1. Install the binary file in cockpit application

To Install the binary file in cockpit application run the following command in cockpit application
```npm i <binary file path> ``` 

Example:
```cmd 
npm i C:\Widgets\gp-device-device-details-project\gp-device-details\dist\gp-device-details-widget-0.10.0.tgz
 ``` 
After installation see that your cockpit application has following entry in `package.json `.

```cmd 
"gp-device-details-widget": "file:../../Widgets/Final/gp-device-details-project\gp-device-details\dist\gp-divice-details-widget-0.10.0.tgz",
 ``` 

##### 2. Import Device Details Module

Import GpDeviceDetailsWidgetModule in app.module.ts and also place the imported Module under `@NgModule`.
```
import { GpDeviceDetailsWidgetModule } from 'gp-device-details';
@NgModule({
  imports: [
    GpDeviceDetailsWidgetModule
      ]
  })
```

##### 3. Add Custom Branding

 - Install the base styles from npm with ```npm install @c8y/style  ``` (please ignore if done as a Prerequisites)
 - Create a LESS file called for instance `branding. less `.
 - Save it inside a new folder, which can have any name you like.
 - In `branding.less ` import following design templates.

```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import '~font-awesome/less/font-awesome.less';
@import '~@c8y/style/main.less';
@import '~@c8y/style/extend.less';
```

- In your application  `package.json ` ->  `c8y` add `brandingEntry`.

`package.json ` ->  `c8y` Snippet
```
"c8y": {
    "application": {
      "name": "custom-cockpit",
      "contextPath": "custom-cockpit",
      "key": "custom-cockpit-application-key",
      "brandingEntry": "./branding/branding.less",
      "tabsHorizontal": true,
      "upgrade": true,
      "rightDrawer": true,
      "sensorAppOneLink": "http://onelink.to/pca6qe",
      "contentSecurityPolicy": "base-uri 'none'; default-src 'self' 'unsafe-inline' http: https: ws: wss:; connect-src 'self' *.billwerk.com http: https: ws: wss:;  script-src 'self' open.mapquestapi.com *.twitter.com *.twimg.com 'unsafe-inline' 'unsafe-eval' data:; style-src * 'unsafe-inline' blob:; img-src * data:; font-src * data:; frame-src *;"
    },
    "cli": {}
  }
```

##### 4. Development server

1. Using `c8ycli`

Run `c8ycli server -u <hhtp://cumulocity_tenant>` for a dev server. Navigate to `http://localhost:9000/apps/<cockpit application name>/`. The app will automatically reload if you change any of the source files.

2. Using `package.json Scripts`
Update package.json start script 

```
"scripts": {
  "start": "c8ycli server  -u <http://cumulocity_tenant>",
  },
```
Run `npm run start ` for a dev server. Navigate to `http://localhost:9000/apps/<cockpit application name>/`. The app will automatically reload if you change any of the source files.


##### 5. Build

1. Using `c8ycli`
Run `c8ycli build` 

2. Using `package.json Scripts`
Update package.json start script 

```
"scripts": {
  "build": "c8ycli build",
  },
```
Run `npm run build ` 

##### 6. Deploy widget to the cockpit

1. Using `c8ycli`
Run `c8ycli deploy -u <http://cumulocity_tenant>` 

2. Using `package.json Scripts`
Update package.json start script 

```
"scripts": {
  "deploy": "c8ycli deploy -u <http://cumulocity_tenant>",
  },
```
Run `npm run deploy ` and provide specific cumulocity tenant URL and basic login credentials.

On successful deployment In cumulocity, you can find your cockpit application under Application switcher.

![](Application_Switcher.PNG)

## Order Device Details widget as a custom widget for cumulocity-app-builder Application 

  1. Use your existing cumulocity-app-builder application or please refer/clone the cumulocity-app-builder from GitHub [Cumulocity  App Builder](https://github.com/SoftwareAG/cumulocity-app-builder) to create a new application.

  2. Make sure to navigate to ` cd <App builder path>.\cumulocity-app-builder\` folder install all pre-specified Mandatory Library under [Prerequisites](https://labcase.softwareag.com/projects/c8y-devices-at-risk/wiki/Wiki#Prerequisites) in your App Builder.
    So that your application has the following entries in `package.json `.
```
"@angular/cdk": "7.3.7",
"@angular/material": "7.3.7",
"chart.js": "^2.9.3",
"core-js": "^2.6.2",
"ng2-charts": "^2.2.3",
 "@c8y/ngx-components": "^1005.0.3",
  "@c8y/ng1-modules": "^1005.0.3",
"@c8y/style": "^1005.0.3",
 ```
**Note: Even if some of the libraries are available please do install, that will only update the library which is already available with latest changes and also update its dependencies.
**

#####  Cumulocity : Custom Fields in MongoDB

As of now, device-specific generic fields are displayed like: likeID, Name, Type, Status, Creation Time, Model and Serial Number

### Installation

1.  Download the Widget source code from the Repository within this project.

2.  Create a Minorbuild binary file from the source code.

    - Follow the below-specified command to create a Minorbuild binary file
      i) run npm i command to install all library files specified in source code
      ```npm i ```  and  ```npm run build``` 

      ii) run npm run buildMinor command to create a binary file under dist folder
     ```npm run buildMinor ``` 

      iii) Copy the binary file **gp-device-details-widget-0.X.X.tgz** the latest one from the dist folder and Place the binary file under any folder.

3. This could be used in conjunction with the application builder/cockpit.

### Deployment Of Device  Details widget In App Builder

##### 1. Install the binary file in App Builder

To Install the binary file in App Builder, run the following command.

```npm i <binary file path> ``` 

Example:
```cmd 
npm i C:\Widgets\gp-device-device-details-project\gp-device-details\dist\gp-device-details-widget-0.10.0.tgz
 ``` 
After installation see that your cockpit application has following entry in `package.json `.

```cmd 
"gp-device-details-widget": "file:../../Widgets/Final/gp-device-details-project\gp-device-details\dist\gp-divice-details-widget-0.10.0.tgz",
 ``` 

##### 2. Import DeviceDetails Module

Import GpDeviceDetailsWidgetModule in cumulocity-app-builder\custom-widgets\custom-widgets.module.ts  and also place the imported Module under `@NgModule`.
```
import { GpDeviceDetailsWidgetModule } from 'gp-device-details';
@NgModule({
  imports: [
    GpDeviceDetailsWidgetModule
      ]
  })
```
##### 2. Add Custom Branding templates

 - Install the base styles from npm with ```npm install @c8y/style  ``` (please ignore if done as a Prerequisites)
 - In App Builder application navigate to `cumulocity-app-builder\ui-assets\index.less `
 - In `index.less ` import following design templates.

```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import '~font-awesome/less/font-awesome.less';
@import '~@c8y/style/main.less';
@import '~@c8y/style/extend.less';
```


##### 3. Development server


1. Using `package.json Scripts`

run ``` npm i ```

Update package.json start script 

```
"scripts": {
  "start": "c8ycli server --env.extraWebpackConfig=./extra-webpack.config.js  -u <http://cumulocity_tenant>",
  },
```
Run `npm run start ` for a dev server. Navigate to `http://localhost:9000/apps/app-builder/`. The app will automatically reload if you change any of the source files.


##### 4. Build

1. Using `package.json Scripts`
Update package.json start script 

```
"scripts": {
  "build": "c8ycli build --env.extraWebpackConfig=./extra-webpack.config.js",
  },
```
Run `npm run build ` 

##### 5. Deploy widget to the cockpit

1. Using `package.json Scripts`
Update package.json start script 

```
"scripts": {
  "deploy": "c8ycli build --env.extraWebpackConfig=./extra-webpack.config.js -u <http://cumulocity_tenant>",
  },
``` 
Run `npm run deploy ` and provide the cumulocity tenant URL and basic login credentials


On the successful deployment of the widget, login to cumulocity tenant URL and basic login credentials
1. Open the Application Builder from the app switcher (Next to your username in the top right)
2. Click Add application
3. Enter the application details and click Save
4. Select Add dashboard
5. Click Blank Dashboard
6. Enter the dashboard details and click Save
7. Select the dashboard from the navigation
8. Check for your widget and test it out.

## User Guide

Click on Add Widget and select Order Device Details as a widget. In the configuration, you only need to select the device group of interest and provide the master data API which is 
https://democenter.gateway.webmethodscloud.com/gateway/DemoCenterAPIs/1.0/ConnectedDemosAPI/restSvc/getDeviceDataById/



## Troubleshooting


**Note: If there are any issues with respect to any Mandatory library, please remove that from package.json and run ``` npm i  ```and then install a specific library

Some times if the library is not installed properly, we might face some issues, so the above step is to uninstall that library and re-install the same
**
