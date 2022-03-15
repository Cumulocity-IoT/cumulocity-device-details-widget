(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@c8y/client'), require('@angular/common/http'), require('@angular/common'), require('@c8y/ngx-components')) :
    typeof define === 'function' && define.amd ? define('device-details-runtime-widget', ['exports', '@angular/core', '@c8y/client', '@angular/common/http', '@angular/common', '@c8y/ngx-components'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['device-details-runtime-widget'] = {}, global.ng.core, global.client, global.ng.common.http, global.ng.common, global['@c8y/ngx-components']));
}(this, (function (exports, core, client, http, common, ngxComponents) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var GpDeviceDetailsWidgetService = /** @class */ (function () {
        function GpDeviceDetailsWidgetService(inventory, http, identity) {
            this.inventory = inventory;
            this.http = http;
            this.identity = identity;
            // tslint:disable-next-line: max-line-length
            this.restItemsUrl = 'http://democenter.gateway.webmethodscloud.com/gateway/DemoCenterAPIs/1.0/ConnectedDemosAPI/restSvc/getServiceRequestsForADevice/00001239';
        }
        GpDeviceDetailsWidgetService.prototype.getAllDevices = function (id, pageToGet, allDevices) {
            var _this = this;
            var inventoryFilter = {
                pageSize: 50,
                withTotalPages: true,
                currentPage: pageToGet
            };
            if (!allDevices) {
                allDevices = { data: [], res: null };
            }
            return new Promise(function (resolve, reject) {
                _this.inventory.childAssetsList(id, inventoryFilter)
                    .then(function (resp) {
                    if (resp.res.status === 200) {
                        if (resp.data && resp.data.length >= 0) {
                            allDevices.data.push.apply(allDevices.data, resp.data);
                            if (resp.data.length < inventoryFilter.pageSize) {
                                resolve(allDevices);
                            }
                            else {
                                _this.getAllDevices(id, resp.paging.nextPage, allDevices)
                                    .then(function (np) {
                                    resolve(allDevices);
                                })
                                    .catch(function (err) { return reject(err); });
                            }
                        }
                    }
                    else {
                        reject(resp);
                    }
                });
            });
        };
        GpDeviceDetailsWidgetService.prototype.getDeviceData = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var inventory, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.inventory.detail(config.device.id)];
                        case 1:
                            inventory = _b.sent();
                            this.response = inventory.data;
                            // tslint:disable-next-line: no-unused-expression
                            (this.response);
                            if (!this.response.hasOwnProperty('c8y_IsDevice')) return [3 /*break*/, 3];
                            _a = this;
                            return [4 /*yield*/, this.getExternalId(config.device.id)];
                        case 2:
                            _a.deviceExternalId = _b.sent();
                            // tslint:disable-next-line: no-unused-expression
                            ('Child Device = ' + config.device.id);
                            // tslint:disable-next-line: no-unused-expression
                            ('External ID = ' + this.deviceExternalId);
                            return [3 /*break*/, 4];
                        case 3:
                            alert('Please select a device for this widget to fuction correctly');
                            _b.label = 4;
                        case 4: return [2 /*return*/, this.deviceExternalId];
                    }
                });
            });
        };
        GpDeviceDetailsWidgetService.prototype.getExternalId = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, res, paging;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.identity.list(id)];
                        case 1:
                            _a = _b.sent(), data = _a.data, res = _a.res, paging = _a.paging;
                            return [2 /*return*/, data[0].externalId];
                    }
                });
            });
        };
        GpDeviceDetailsWidgetService.prototype.getRestItems = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.http.get(url).toPromise()];
                        case 1:
                            _a.restItems = _b.sent();
                            return [2 /*return*/, this.restItems];
                    }
                });
            });
        };
        GpDeviceDetailsWidgetService.prototype.getExternalIdForDevice = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var inventory, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.inventory.detail(config.device.id)];
                        case 1:
                            inventory = _b.sent();
                            this.response = inventory.data;
                            if (!this.response.hasOwnProperty('c8y_IsDevice')) return [3 /*break*/, 3];
                            _a = this;
                            return [4 /*yield*/, this.getExternalId(config.device.id)];
                        case 2:
                            _a.deviceExternalId = _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            alert('Please select a device for this widget to fuction correctly');
                            _b.label = 4;
                        case 4: return [2 /*return*/, this.deviceExternalId];
                    }
                });
            });
        };
        return GpDeviceDetailsWidgetService;
    }());
    GpDeviceDetailsWidgetService.decorators = [
        { type: core.Injectable }
    ];
    GpDeviceDetailsWidgetService.ctorParameters = function () { return [
        { type: client.InventoryService },
        { type: http.HttpClient },
        { type: client.IdentityService }
    ]; };

    var GpDeviceDetailsWidgetComponent = /** @class */ (function () {
        function GpDeviceDetailsWidgetComponent(http, datePipe, device, inventory, identity) {
            this.http = http;
            this.datePipe = datePipe;
            this.device = device;
            this.inventory = inventory;
            this.identity = identity;
            this.URL = '';
            this.deviceUrl = '';
        }
        GpDeviceDetailsWidgetComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // tslint:disable-next-line: no-unused-expression
                            (this.config);
                            _a = this;
                            return [4 /*yield*/, this.device.getDeviceData(this.config)];
                        case 1:
                            _a.deviceExtId = _b.sent();
                            this.URL = this.config.deviceDetailsUrl;
                            this.deviceUrl = this.URL + this.deviceExtId;
                            this.getDeviceDetails().subscribe(function (devData) {
                                // tslint:disable-next-line: no-unused-expression
                                (devData);
                                if (devData[_this.mainList][0]) {
                                    _this.deviceDetails = devData[_this.mainList][0];
                                }
                                else {
                                    _this.deviceDetails = devData[_this.mainList];
                                }
                            });
                            if (this.config) {
                                this.mainList = this.config.mainListName;
                                this.deviceDataColumnName = this.config.tableColumnNames.split(',');
                                // tslint:disable-next-line: no-unused-expression
                                (this.deviceDataColumnName);
                                this.deviceDataColumnvalues = this.config.tableColumnValues.split(',');
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        GpDeviceDetailsWidgetComponent.prototype.getDeviceDetails = function () {
            return this.http.get(this.deviceUrl);
        };
        return GpDeviceDetailsWidgetComponent;
    }());
    GpDeviceDetailsWidgetComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-gp-device-details-widget',
                    template: "\r\n<div class=\"example-card\">\r\n  <div>\r\n    <div class=\"card-content\">\r\n      <div class=\"card-content-item\">\r\n        <div *ngFor=\"let col of deviceDataColumnName\">\r\n          <span class=\"text-truncate\"><small class=\"text-muted\">{{col}}:</small></span>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"this.deviceDetails\">\r\n        <div class=\"card-content-item card-text-value\">\r\n          <div *ngFor=\"let col of deviceDataColumnvalues\">\r\n            <span style=\"overflow:visible;\" title=\"{{this.deviceDetails[col]}}\"><small\r\n                class=\"text-muted\">{{this.deviceDetails[col]}}</small></span>\r\n                \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".example-card{padding:0 0 0 9px;box-shadow:none}.card-content{display:flex;font-size:14px}.card-content-item{padding:5px}.card-content-item span{padding:3px;display:block;max-width:150px;font-size:14px}.card-text-value span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:block;width:100px;font-size:14px}"]
                },] }
    ];
    GpDeviceDetailsWidgetComponent.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: common.DatePipe },
        { type: GpDeviceDetailsWidgetService },
        { type: client.InventoryService },
        { type: client.IdentityService }
    ]; };
    GpDeviceDetailsWidgetComponent.propDecorators = {
        config: [{ type: core.Input }]
    };

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
    */
    // tslint:disable-next-line: max-line-length
    var previewImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4RD4RXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAE7AAIAAAALAAAIVodpAAQAAAABAAAIYpydAAEAAAAWAAAQ2uocAAcAAAgMAAAASgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE0sIFNhbmRoeWEAAAAFkAMAAgAAABQAABCwkAQAAgAAABQAABDEkpEAAgAAAAM3MAAAkpIAAgAAAAM3MAAA6hwABwAACAwAAAikAAAAABzqAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAyMjowMzoxMSAxNjozMDowNAAyMDIyOjAzOjExIDE2OjMwOjA0AAAATQAsACAAUwBhAG4AZABoAHkAYQAAAP/hCx1odHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPjx4bXA6Q3JlYXRlRGF0ZT4yMDIyLTAzLTExVDE2OjMwOjA0LjcwMjwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT5NLCBTYW5kaHlhPC9yZGY6bGk+PC9yZGY6U2VxPg0KCQkJPC9kYzpjcmVhdG9yPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAWkB+gMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APDf+Den/g3p+C//AAVl/Yv8T/Eb4jeJ/ihout6L41uvDcEHhvUbG2tXt4rGwuFdlns5nMhe6kBIcDAX5QQSfvD/AIgqf2Wf+h+/aA/8Hmkf/Kyj/gyp/wCUWXj7/squo/8Apo0ev1+oA/IH/iCp/ZZ/6H79oD/weaR/8rKP+IKn9ln/AKH79oD/AMHmkf8Aysr9V/GPxc8LfDqaCHxF4m8P+H5rrJhTUdRhtXn/ANwSOM/hU/ib4jeH/B/h1dY1bXdJ0nS59my9vLxILd9/3MO5280AflD/AMQVP7LP/Q/ftAf+DzSP/lZR/wAQVP7LP/Q/ftAf+DzSP/lZX6neHfjd4O8ZTRx6P4s8M6o806wIlnqcFzvk2u+wbHOH+Rz/AMAPpW1qvifTdCuo4r2+tbWSZZJI1mmRN6Jhnf8A4B+n60Afkv8A8QVP7LP/AEP37QH/AIPNI/8AlZR/xBU/ss/9D9+0B/4PNI/+Vlfq94i+Ivh/wv4ci1jU9d0nTdKuNnl3t1eJDbvv+5h3O3mo9f8Ain4Z8LeG49Y1PxHoem6TdD9zfXOoQw28/wDuO77DQB+Uv/EFT+yz/wBD9+0B/wCDzSP/AJWUf8QVP7LP/Q/ftAf+DzSP/lZX6ueB/ij4b+JNvPJ4e1/RNeS3by5n069juwh/2th4qtYfGfwfqfil9BtfFXhy41yJmjfTo9Uge8R/7vl79+fwoA/Kz/iCp/ZZ/wCh+/aA/wDB5pH/AMrKP+IKn9ln/ofv2gP/AAeaR/8AKyv1R8XfG/wb8PtV+w+IPF/hfQ78x+Z9nv8AVILWTZ/f2O+ce9UtT/aO+HuiNbfbPHXg61+2QpdW5n1q2j+0Qt9yRPnG9D2I4NAH5d/8QVP7LP8A0P37QH/g80j/AOVlH/EFT+yz/wBD9+0B/wCDzSP/AJWV+q2k/Fjwvr3hq61qw8SaDfaLabvtN9b6jDJb2/8AvyB9i/jWpq2v2Gi2kdxeXlrbW87oiSzTIiSO5CIuT139qAPyV/4gqf2Wf+h+/aA/8Hmkf/Kyj/iCp/ZZ/wCh+/aA/wDB5pH/AMrK/WzT9cs9Znuo7W8triSzmMFwkUwkMLj+BwD8je1Z+t/E3w74a8S2mj33iDRbPWL7i2sLi+jjuJ/9yMne/wCFAH5R/wDEFT+yz/0P37QH/g80j/5WUf8AEFT+yz/0P37QH/g80j/5WV+v1FAH5A/8QVP7LP8A0P37QH/g80j/AOVlH/EFT+yz/wBD9+0B/wCDzSP/AJWV+v1FAH5A/wDEFT+yz/0P37QH/g80j/5WUf8AEFT+yz/0P37QH/g80j/5WV+v1FAH5A/8QVP7LP8A0P37QH/g80j/AOVlH/EFT+yz/wBD9+0B/wCDzSP/AJWV+v1FAH5A/wDEFT+yz/0P37QH/g80j/5WUf8AEFT+yz/0P37QH/g80j/5WV+v1FAH5A/8QVP7LP8A0P37QH/g80j/AOVlH/EFT+yz/wBD9+0B/wCDzSP/AJWV+v1FAH5A/wDEFT+yz/0P37QH/g80j/5WUf8AEFT+yz/0P37QH/g80j/5WV+v1FAH5A/8QVP7LP8A0P37QH/g80j/AOVlH/EFT+yz/wBD9+0B/wCDzSP/AJWV+v1FAH5A/wDEFT+yz/0P37QH/g80j/5WUf8AEFT+yz/0P37QH/g80j/5WV+v1FAH5A/8QVP7LP8A0P37QH/g80j/AOVlH/EFT+yz/wBD9+0B/wCDzSP/AJWV+v1FAH5A/wDEFT+yz/0P37QH/g80j/5WUf8AEFT+yz/0P37QH/g80j/5WV+v1FAH5A/8QVP7LP8A0P37QH/g80j/AOVlH/EFT+yz/wBD9+0B/wCDzSP/AJWV+v1FAH5A/wDEFT+yz/0P37QH/g80j/5WUf8AEFT+yz/0P37QH/g80j/5WV+v1FAH5A/8QVP7LP8A0P37QH/g80j/AOVlH/EFT+yz/wBD9+0B/wCDzSP/AJWV+v1FAH5A/wDEFT+yz/0P37QH/g80j/5WUf8AEFT+yz/0P37QH/g80j/5WV+v1FAH5A/8QVP7LP8A0P37QH/g80j/AOVlH/EFT+yz/wBD9+0B/wCDzSP/AJWV+v1FAH5A/wDEFT+yz/0P37QH/g80j/5WUf8AEFT+yz/0P37QH/g80j/5WV+v1FAH5A/8QVP7LP8A0P37QH/g80j/AOVlH/EFT+yz/wBD9+0B/wCDzSP/AJWV+v1FAH5A/wDEFT+yz/0P37QH/g80j/5WUf8AEFT+yz/0P37QH/g80j/5WV+v1FAH5A/8QVP7LP8A0P37QH/g80j/AOVlH/EFT+yz/wBD9+0B/wCDzSP/AJWV+v1FAH5A/wDEFT+yz/0P37QH/g80j/5WUf8AEFT+yz/0P37QH/g80j/5WV+v1NaVYx8zUAfkH/xBU/ss/wDQ/ftAf+DzSP8A5WUf8QVP7LP/AEP37QH/AIPNI/8AlZX6YfB79qjwz8bPFWsaPoo1BbvQ/wDX/aYVjjf59nyHec816ZncPloA/IP/AIgqf2Wf+h+/aA/8Hmkf/Kyj/iCp/ZZ/6H79oD/weaR/8rK/X6igD+TX/g4t/wCCMvwv/wCCRU/wjX4ba94+1sePpNcTUP8AhJb20ufJFkbAReV9ntoNuftUm7duzhcbcHP9EH/BK7/lGF+zh/2S7wz/AOmm1r8l/wDg98/4/P2a/wDrt4t/9C0ev1o/4JXf8owv2cP+yXeGf/TTa1S3JZ8V/wDBlT/yiy8ff9lV1H/00aPX6/V+QP8AwZU/8osvH3/ZVdR/9NGj1+v1SUeX6zGtx+13oqukbr/wil797/r7t68n8Ti80+8msNBs7G60/TfiXax6RZzz/ZrT/j1Ekyb0jfy0895P4H/w9y8d/BTQPiHr9nqmpQ6ompWcElrDPY6vdWDFHYO8f7iRN/KD79JrPwJ8M694NsdCk02W00vTbhbu1jsb6exkt5xn94JIHRw/zt/H3oA5z4kaL4n8ZfCDUJtQ0XR9J1/Q5k1XS49M1R78SSwfOg3vDB/rPnTp/HXPvr9r8Z7nxt4utJBNpekeGJNK05j3eeDz7iT/ANEJ/wBs3r1TwR8NtN+H6XiafNr032hst/aOuX2pf98faZJNn0So/DPwj0Dwf4LuvD+mafHZaPeeeZreNmw/nb/M/PfQB5f8C7ZNa+JnhuPUI45l0vwFps+mLKM+W7u6Tun1EcA/Gqnxb0zT/DE/hmHwXDp+o3Ufj/fNYz3TwWkF09pPI6b0jfy/7/8Aq3/ePXqWvfBPw74j0nTLOazuI10OAW+ny2l9PZ3VnGECbEmhdJBwv9+oNU+AHhTWPB1hosmn3EOnabcjULb7HqE9ncRXGH/fCaF0k3ne/wA2/vQBs+A7jXbvSmfXtJ0bSLvdhYdN1F76J09d7wQH/wAcrxrRNK0zUf2d/iU2qLb/AGe11rW7hJmP/HvIk8jo6t/A6SfqK9g8DfDHT/h7Z3Eenza0yXDeY32/WLvUiD/sfaZH2fhWDF+zZ4PXX575tNvZnur1tRktpdWu5rB5y/meZ9meTyA+/wCf7nWgDzfwTq/jKT446lNpug6Dq2oXHhLRJNS/tXV5LHy5CbvP+rtZ95z/ALld9+0WGm+BkzXUEEN39p0/fGH3Ij/a4Pk3VpeLPgF4Z8b+LZNavBrkOqXFvHazTabr19pvmRpv2IywTJn/AFj1rXfw70q/8HR6DcR3V3psPl/Lc3s08jbHDpvmdzI5DqOr+lAHnv7UfiPS3Ph3wjqVvqF5pevXP2nVIbDTZ7+T7FB85zHAjvseXyY84rjX8Zf8JX+zXotq0l5JdeHfFulaTMLy1kt7h0gvoPJkkjkRHTzIPLk+cf8ALSvfofCdhD4xbXPs+NUntEsWm3ucwoxcJt+6vzsfes3WfhD4f1zUby6u9P8AMuL65tbudvOdDLNavvgf7/8AAfT0oA539nz/AJGb4m/9jZN/6S29cl4t0Kbwjb+OryPStB8eeC9cuprrW4YrnydSsykeydOmyby/LxsLxun1rurv9nHwrdeI73VD/wAJJaXupXP2u6+w+JNSs4p5uPnMUM6R5+T+5zU/ib9nvwj4n1K4vLvTbgyXb+ZeQw6hdQW2oP8A9N4I5BHP/wBtEegDp/DVza33hnT5tPaRrKa2R4Gb75jKZT73t61q1HFAsESqq7Uj+6q1JQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFfGX/BUKOzm8UeD/ADfEUlvP+8jfTf8AnhA/37r/ANkr7Nrgfi/+zf4R+OlxYzeJtL/tKTT0dIWE8kON/X7hFAHyT+2J+zP8P/gz8HdH1jwrqUq6jdSJHHm+Fx/asDp88nH/ALJ8lfWn7MiW0fwJ8MpZ603iG1jskRL58fvB02f8A+5+FeCfBr/gmjZ6H4v1ubxtFpusaPcb00yGzvJ45Lb5/vv9wZ2cfx19S+EvCdh4F8L2Oj6XCLXT9PhWCCFP+WaCgDWooooA/nt/4PfP+Pz9mv8A67eLf/QtHr9aP+CV3/KML9nD/sl3hn/002tfkv8A8Hvn/H5+zX/128W/+haPX60f8Erv+UYX7OH/AGS7wz/6abWqW5HQ+K/+DKn/AJRZePv+yq6j/wCmjR6/X6vyB/4Mqf8AlFl4+/7KrqP/AKaNHr9fqksKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/nt/4PfP+Pz9mv/rt4t/9C0ev1o/4JXf8owv2cP8Asl3hn/002tfkv/we+f8AH5+zX/128W/+haPX60f8Erv+UYX7OH/ZLvDP/pptapbkdD4r/wCDKn/lFl4+/wCyq6j/AOmjR6/X6vyB/wCDKn/lFl4+/wCyq6j/AOmjR6/X6pLCiiigAoozRmgAooooAKKKKACiiigAoozRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/Pb/we+f8AH5+zX/128W/+haPX60f8Erv+UYX7OH/ZLvDP/ppta/Jf/g98/wCPz9mv/rt4t/8AQtHr9aP+CV3/ACjC/Zw/7Jd4Z/8ATTa1S3I6HxX/AMGVP/KLLx9/2VXUf/TRo9fp149/aZ8GfDDxFc6XrGqXK3tnAt1eR2um3V8NPhY48yd4Y3WBD6yFBX5i/wDBlT/yiy8ff9lV1H/00aPX39+z74p0vwd4h+NUPia+sbK9s/Fd1qV+buRE/wCJfJaweRId/wDyz8tNn/bOpLPbtK1e113Tre8tJ4bq1uo0mhmifzElR/uurdORWgGG2vmn4V/ELSNN+KC22j3F54f8Dn4bWGpaTpt7M9vHZp9quwZPLd/kfy/Iy57bOa4fSte8RePfhf8AC1/+Ek1jWJJPBCalqOk23i2fQdXu5HEf+nJdf8vWzEibJJET95v9KqS/r7/8jP2n9f8AgP8AmfXP/CR2A8Qf2X9stf7U8j7V9i81ftHk7tnmbPveXv8A48YzWko5r448Lanb6x8Z9F8b6HqHibX9UuvhZNq9h/aWpTwyahco8aIJLWOQW4/20RPL8z5+Th63vh1r1xoFx8GNe0nxxr/ijVPiG/l67aXmrvd297A9lLPNPHa/6u18idI0/cRx48zY9E/dV/66/wCRPPr/AF2j/mfVm7aPpShhXw94K07XJvhV8Ddbbx58QZNR8eX8ek66za/cSLc2r29xLsRGykMn7lI/OjCSdf3hkO+tLx34+8V+ApNX8F6Xrep3Wkr8RYNGF5qviKe0uLe1m01Lv7L/AGhsnnQPOdkb/f8A3mzzKUY3lyr+vh/zD2n9f+Bf5H2Z0rmfiv8AFLQ/g14BvvEniW+/szRdP8v7TcmF5PK3yJGnypl/vug4HevmXVdP8Z2+meHfDmoeL59PtdQ+IMVjHHofiy41XUbC0k064kktJ7ySNJXzJ+8TzP3iJJH8/wAkdeift1eHINK/Y01TSWa4vLWC60i1JvJmmkmU6laJ+8d/vk55zS9nr/29/l/mae0PVPEnxN0Pwx/YK3WoRr/wlN2lhpTxq8iXczxPIgDrnqkbHd0966hOS1fF/iVbz4NfHP4U/C2/W4uNH0/xgmq+Ertv3gbTha3cclq7/wB+1kdE/wCuckdO8I/F3Wbv4rfD7xJp+r6t/ZHjHxbdac39oeL5Ly5v7by7jKPpMcP2W2SN0j+eN/Mj+Tf/AKw4qMOZ+7/WxnOfLrL+tz7QB2rQDxiviVbLWpvhH4L8Vf8ACcePE1jxB4+k0C6kOuTyQGym1K6tfJSF/wB2PkA8t9nmJj7/ABV/4reOfE3wgm8deF9E1vWJtJt/EHh62S71fXrjztKtr1H87OoSCaSFHkjRBIQ/l+fmp+L+v8P/AMkV7T3rf11/yPstfvU5hkV89/BbwdrVpqetab4p8UQafp9lqenXWl6fZ+OLvV7+zm/54T3U6RzPBP5afuZN+/8AeV9CMcCgqIUUUUFBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/Pb/wAHvn/H5+zX/wBdvFv/AKFo9frR/wAErv8AlGF+zh/2S7wz/wCmm1r8l/8Ag98/4/P2a/8Art4t/wDQtHr9aP8Agld/yjC/Zw/7Jd4Z/wDTTa1S3I6HxX/wZU/8osvH3/ZVdR/9NGj1+qnjD4P+E/iBqtpfeIfCvhvW76wybW4v9Mhu5bb/AHHdCU/Cvyr/AODKn/lFl4+/7KrqP/po0ev1+qSzmfGHwo8MfEa4s5vEHhvQddm0x99lJf6fDdSWbesZdDsPuKr6z8EPBnizw/p+l6r4R8MalpWk/wDHlZ3mlwzwWf8A1zR0wn4V12aKAOfvvh9oOs6rpN/caNpM95oe7+zLh7RGk0/cmz9w5H7vKcHZ2qHQfhN4W8HeI73WNI8MaBpesalze31np0MFxe/9dJETe/4102aKAObt/h14esLHSbWPQ9HjttClM+mQpYxiOwkwV3wpj93w7D5Oz07UPhz4e1ay1a1u9D0m6tfED79Thms0kjv22ImZgRh/kRB8/ZB7V0VFAHLaR8JvCvhvTNP0/TvDug6fY6Vdfa7G1ttOhjis5+f30aKmEk+d/nGD859a0fEfhjTfF+lyafq2n2mpWcsiSPbXUKSxyFH3plW4OHQOM+lbGaKAMfWvCel+JL/Tbq/06wvbrSZvPs5rm2SWS0k+7vjYj5H9xWLF8DfBdr4ok1yPwf4Zj1m4uUu5L9dLh+0POh+SQybd+8f3+tdlRQBzv/CufD66daWI0PSPsdjeC/t4BZR+Xb3PmGTzo0x8knmNv3Dnn3zUl14I0O8bVPtGj6Zcf20qw6gZLVJPt6INiJNn/WYBIG/PXFb1FAHH6N8F/B/hjRYdN07wn4d0/S7a8S+gs7bS4YoIrpPuzqiJxIP7/UV2FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfz2/8Hvn/AB+fs1/9dvFv/oWj1+tH/BK7/lGF+zh/2S7wz/6abWvyX/4PfP8Aj8/Zr/67eLf/AELR6/Wj/gld/wAowv2cP+yXeGf/AE02tUtyOh8V/wDBlT/yiy8ff9lV1H/00aPX6pa/8ZfB/g/xNaaHqvirw5petahtFrY3epww3dzu+7sjd97n6Cvyt/4Mqf8AlFl4+/7KrqP/AKaNHr7W8ceD5vBUPxS1a20Twr8UfAfiS+nu/EdtHe+RremPHGiTwI/zxzeXGm9Iy8Dxk+uKks+pSu7FV7m8j0+2kmmkjhhhXc7u21UWvlDXvjj448deMNW0n4a2ni7+x/Cmk6fJpJ0630ueO/ee08+N719RmScxlPLT9x8/3zvzV6/8cfEHxmnxgudW1iPTdN8JaKuPDJ020urbz59EjnkSed0kMiJPITsxzjkuh2US0jIzjU5pxifUkFxHcQJJGyyJIu5GU/frPj8TWEniOTSvt1u2pxwJePZiVftEcLuUSTZ12FkcbvUYr5r8c/FnxV/wjmi2HhXUvEUd9o/gy11i5sPDejaXss3kj/dyXT3ronk/JJsgt0jkxHIf7grf/Z/8a3XxF/aI0/xDeLCl1rfwv0S+mSI5jSSW6vHcL7ZP8qrl97l/rr/kT7ZcvN/X2f8A5I9zsvGGk6n4ivNKt9S0+41TTVR7u0iuUae0D/c8xPvpv7ZHanaJ4l07xNFcf2ffWeoJZXL2c7W86SeRMhG+N9n3ZE7r1r5P8T6brHg79sL4q/Erw/HcX194OGjx6ppsJz/aelPaf6VGif8APePZHPH/ANc9n8dSfs5fFqUxaPd+H9SSTQ/GPxe1uCZo1SRL+1eC8nT7/wBz95HG/wC7/rSjr/Xp/mOdTlPsJsAUob5q+XPFvxe8cax8TrvQLDxNJo6TfEr/AIR5ZotPtpnhsf7CS78tA6ff8z95vkz/ANtE+SsXX/iT8TPDfgv4uasfiFcXU3whvXjtUbRbJP7bQQQXey9+T/nnJ5ebfyP79TH3v6/w/wDyQ/ae9y/11/yPqjT/ABJp+q6rfWNtfWtxdaZIkd5BHOryWjsgdVdf4coQ4z1961dgr5Ov4vFVt8Rvj74i8O+Mp/DZ8PyWOopb/YLeaG+kj0e3fbO8yO/l/Jt/d+W/+3VfU/2kfiZ8YPEmqr4P0/xVa/2Jo2l3lvBpFto89vcXV3afasXT3s8chg+dE/cbPuSfvK05GHtD64CU6vnn4R6/4++J3xk8apqniebQbHw6tjB/YNpZWsv2a5udLgkkDzuju3lzuXj/AFLp8le2eHNNvNP8P2MF/fSape28EaT3rwpG924X55NifIm/rhOBmlyjpz5jaoooqSwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP57f+D3z/j8/Zr/AOu3i3/0LR6/Wj/gld/yjC/Zw/7Jd4Z/9NNrX5L/APB75/x+fs1/9dvFv/oWj1+tH/BK7/lGF+zh/wBku8M/+mm1qluR0Piv/gyp/wCUWXj7/squo/8Apo0ev0w8W/so+BvHWu32oajotwbjVmSTUIrbVLu0tNUdOhuoIZEhn/7aI9fmf/wZU/8AKLLx9/2VXUf/AE0aPX6/VJZ5741/Zo8G/EbVkvtU0eaO7jtvsDyWWo3Nh9ptf+eE/kPH50f/AEzk3p7Vei+CPhe3tfE1vHpcccPi6FINWjjmkRLmNIBaogG/93iFQn7vb09a7JjgUKfloDrc818Tfso+A/G1xZyajokrNY6emlIIdRurfz7JPuW8/lyJ58f+xNvGc1reCvgp4b+HN5Zz6Rp5tJ7PSIPD0L/apn8uxgLvDD87nOze/wA/3+TzXafLR8tHOR7OJz3h/wCHWleHfF+ua5a2rQap4i8j+0JzO7/aPJTy4/kJ2LhOPkArkov2SPh/a+A/+Ebg8P8A2HQxqh1uOK2vbi3ktLzf5nnwyo4eE5/55umOfU16hRQWea+Ef2ZfBXgw2rafoTxva6sdcV31C6nY3pt/sr3DvJIfMfy+Pnzz8+N/NaWpfAHwprGl+MrG40xprXx4/ma7Gbqb/Tn8lIP7/wC7/dog/d7Og967jNGaAPKvFP7IvgHxtr+ratqOhTT32uPCdU2apdQJqKQoiRxzokojmjCog8uQFPUZrT8b/s2+D/iZrq6lqmk3C3i2v2CSax1G6sDeW3/PCfyJI/Pj/wCmcm9K9A8ujZ70EezicrpXwm0Dw3LrjWOm/Y/+EiMa3/k3Ekfm7IEgTZ8/yYjRE+TZ0HfmtTwx4ctfB/hyw0uzjkjtNLgS1hV5XmeONF2KC75d+O5NbFFBYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/Pb/wAHvn/H5+zX/wBdvFv/AKFo9frR/wAErv8AlGF+zh/2S7wz/wCmm1r8l/8Ag98/4/P2a/8Art4t/wDQtHr9aP8Agld/yjC/Zw/7Jd4Z/wDTTa1S3I6HxT/wZWH/AI1Y+Pv+yq6j/wCmjR6/X4fKOa/ID/gys/5RZ+Pv+yq6j/6aNHr6++CXipvhX+2f8SNTu7iWLw74u8SXWi3TScQWl7a2NvdwPn/ppA90n/bKOoveXKVKVlc+wV+UUNyK+HfhD8VtT8A/Eb4q/FC9t5NQvvGeh6Nq+l6bK/liOO6vru106Df/AAfu/Id/+uj1654z/aU8Wfs+3WpQ+O7Tw5rUi+G7vxBpsuhRTWas9rJGslo6TPJ1M0WybP8Af/d9qZHtFex9Dk4FJkEmvlvxH4v8Y/Dz4/8AhrxF8Qp/Dd2mj+Btf1aRdDtJ4Ps4jNhJJB++kff9zAk+Tfj/AFaVhXn7T/iz4ifDbX7PUtHkn0vxJ4R1O7kkt/CusabHoL/YpJI43urpPIut/wBzfH5fz4+T56Ps8/8AXX/5EI1Yynyf19n/AOSPsFvmoHyivnP9pBs/8Extc/7EuH/0RHXnXi/xlqXh3SvA/wAM/E1xJda94P8AHPh6fT7yYYk1zSHuP3E//XSPmCT1kj/26qMb1PZida1PnPs9xz9KEXFfNvjX9rbXfCfxWW3hm0HVtDbxXa+G57Sw0XVJ/s/nzRwb31TH2RJ45Hy9r5f+x5m+s3X/ANqL4maN4Y8QeKLa18D3Gh6H4wn8NJpzxXKXd3H9v+yRTefv2Ryb3Tenlv3PyH5KmLctF/Xw/wDyQ51IR1/r+tD6nC8UtfNPjL9qbxT8Dv8AhNNP8VQ6Hrmr6PbaXc6TJpNjcwQXB1Gd7RI5Id88n7uWMn93kyJ0QPxW18IfjX49+Itz4i0eO1sFvLGK1udP1q98Kapotjc7pCk0D210fMLokZO+OQp+9T3qvZ8w+dHvlFFFSWFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfz2/8AB75/x+fs1/8AXbxb/wChaPX60f8ABK7/AJRhfs4f9ku8M/8Appta/Jf/AIPfP+Pz9mv/AK7eLf8A0LR6/Wj/AIJXf8owv2cP+yXeGf8A002tUtyOh8V/8GVP/KLLx9/2VXUf/TRo9fo147/Y28KfETwZ4y0XUJtWez8b61Hr97Is6JJbXCRwR/uH2fImyADB3/6yTnmvzl/4Mqf+UWXj7/squo/+mjR6/X6pLPNfEn7NXhjxVqeuTahDcSW/iPRrXQbuzSXy4UggkkkjKbMOkm6Y5YP/AAJ6Vn6V+ylo8kmpt4k1bxF41m1bR30N5NdnhkkgspP9bAnkRx/f+TfJ/rD5afPxXrO4UbhQTyI8d8K/sm6fpPiK11LVvE3i7xTJYaTc6FDFrdzBPALKfyt8RCQp5h/cgeY5Ln+MvxUuhfsqWui+FrvQZfGHjrUNBk0ufR7XTZ7+P7Pp8MyeWRGVh8yTYnEZuHm2frXrgY5pxOBQKMFHY4Hxf8DdL8c/Aq7+Ht9c6gujXmmLpMk0LoLjyVUJwxQpv+X+5+FUPi9+zR4c+NHiLwXqmqLdR6l4E1NNU0u4t2RJA6Y+R/l/1bbEyO+wdK9NYZoAwKfPLn5g9nHl5Dw7Uv2M9F1LVGf/AISjxlZ6TJrkfiOPRra9g+wW98J0nLofJ8wo8if6t5DGNx2Ilbuo/sw6Dq3gLVPDk11q62OseIf+EjmZZkEiXX24Xe1Ds/1fmIBjH3O9eos3P0pBzURfK/6/roJ04yPN/iB+zT4d+JOteIL7V/7Qml8R6ZaabOiXHli2+yzSTwTwlP3iTpJJv37+qJ6U/RfgNdaXol9by+PviBqF9eCCMX9zdwLNbJC+8LGkcCQjf0d/L8xwTl+mPR8tSbjVF8o+ijNGaBhRRmjNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfz2/8Hvn/H5+zX/128W/+haPX60f8Erv+UYX7OH/AGS7wz/6abWvyX/4PfP+Pz9mv/rt4t/9C0ev1o/4JXf8owv2cP8Asl3hn/002tUtyOh8U/8ABlYf+NWPj7/squo/+mjR6/X4fKOa/ID/AIMrP+UWfj7/ALKrqP8A6aNHr6++CXipvhX+2d8SNTu7iWLw74u8SXWi3TScQWl7a2NvdwPn/ppA90n/AGyjqE/e5SpSsrn2FtFG0V8UfAXx1qWh/E74tfEq9uNPhuvE/hrTfElqmrTNaWdlaPPeR2sbuiO//HukDn93nfIa6i4/bR8V6N4R+I/mQ6Tqmq+FfD8Ov6fcv4c1TQoLjfJInlvbXTmR48x/6+OTY/tWns2R7RH1Y6ZFLGmPxr5o+J37THxC+Cx8T2+vW/hK+vrXwrJ4m0t7G0uY7eB4544Htpt858//AFyfvE8v/rn0rsfi58WfEVn8Q9Y8K6RNpdj/AMUVda5BeTW0k8kE6TeXyFdPk2/jvx9Kyqe6ub+v60Lj72v9f1qe0Bt1Iy5NfI/we8SX37Pf7MXw3g0q48Gadq3jK1TUrmeDw3qF/eXj/ZI5C/2K1d572c/8tJjJH0B2fwV03w//AGqvFnxj0XwXpmh2ug6Z4o8QDVJ9Qu9Rsrp7Szg0+7Fo7pa+ZHOXeR0/dyOhj+ffz10lHllyoyjWTjzH0meKAK+avEXij4qXvxu+EdvqWoaL4Za8utUg1Gwt7We7t9R8iGT9/lbpP3ckex40kj3wP9/fW5/w0tr3/Cpo9f8Asel/bJPH/wDwiu3yn8r7L/bP2Df/AKzPmeXz/v8A8Hap+3yF857xuwaXORXzDq37VnjLwz4V8Y+J9S0/wzcaPY+JrrwnotnZ2d3Jd3F0L/7LFPPs8w7AhO9I43d9nyffCVBd/tc+PNK8EeI5ItHsdQ1HT77SLfS9UvfDeqaDp+ofbbtIHhkhuv3iSJ/fSSSP95H3/d0U/fCdSMdz6hJxn8KTpg/WvBf2z4Nah/YM8fp4iuNMu9W/sOcXUum28lvbuc/wI8juBj1evLPF3jHUfDmk+CPhn4luJLrXvB/jnw9Pp95MMSa5pD3H7if/AK6R/wCok9ZI/wDbrSEeaXIKcuWHN6n2e4z+FCLivm3xr+1trvhP4rLbwzaDq2ht4rtfDc9pYaLqk/2fz5o4N76pj7Ik8cj5e18v/Y8zfWbr/wC1F8TNG8MeIPFFta+B7jQ9D8YT+Gk054rlLu7j+3/ZIpvP37I5N7pvTy37n5D8lZxblp/X2f8A5IJThH+v67H1ME4p1fNPjL9qbxT8Dv8AhNNP8VQ6Hrmr6PbaXc6TJpNjcwQXB1Gd7RI5Id88n7uWMn93kyJ0QPxW18IfjX49+Itz4i0eO1sFvLGK1udP1q98Kapotjc7pCk0D210fMLokZO+OQp+9T3qvZ8w+dHvlFFFSWFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfz2/8AB75/x+fs1/8AXbxb/wChaPX60f8ABK7/AJRhfs4f9ku8M/8Appta/Jf/AIPfP+Pz9mv/AK7eLf8A0LR6/Wj/AIJXf8owv2cP+yXeGf8A002tUtyOh8V/8GVP/KLLx9/2VXUf/TRo9fo147/Y28KfETwZ4y0XUJtWez8b61Hr97Is6JJbXCRwR/uH2fImyADB3/6yTnmvzl/4Mqf+UWXj7/squo/+mjR6/X6pLPL/ABb+y94Z8dya890t/DF4h0a00SWG3m8lLWG1kkkheDC7kkR5Mg5x8iccVg3n7F2ka8PE0ms+K/G2vXXirRk0O+uby6tRIIEfzE2JHAkaSZJ52fx17Z5dHl0Gfs4nnPxJ/Zz8P/FfVbq81ZtRka98P3PhyS3WfZH9nnkjeRx8u/zN8afPn8KzPC/7Ltronia71i+8W+NPEuqX+hv4ekuNVuoH2WryB/kSGCOMP8v38ZP8e+vW6KDQ8l1X9l3Sm0Lwfb6b4g8UaHf+A9PGkafqlhNB9se1KRxyRyCSGSN9/kxk/u+HT5NlZ2mfsd6L4V8N6RZaP4h8WaRqWg3t9dWGtR3kM2oR/bZPMnid5oXjkjdyOJI3/wBWhzvGa9p8ujy6DP2cTyqD9mLS7a38KfZ9W8TWupeEtQn1KDUvtaTXV88/mfaRP5kbo6S7zkBFI/g2cVlXX7G+j6hrjTf8JJ4yg0eTxEnihNFguYBp6XqTxz7x+58zY8ibzH5mzLvxzXtQX3oK+9H2ucfs4nmtz+zJ4d1D4da94ZuH1OWx8Qaxca48v2nZcWlzNP5++F1H7vY/KemO9U5P2bIdZ8PXGm654s8aeImuL6xvPtF/cweZF9lnjnjREjhSBAXj+ciPzHzy/CY9YzRuoHyI5L4w/Cyy+NXw01jwnqlxeW2m69avaXMloyJOqHrs3K4z9RWB8Xf2Z/Dnxn8R+C9U1VbqPUvAeppqml3FuyRyCRMfI/y/6t9iZH+wOnf0wHNNZsNQU9dzxDUv2M9F1LVGf/hKPGVnpMmuR+I49Gtr2D7Bb3wnScuh8nzCjyJ/q3kMY3HYiVu6j+zDoOreAtU8OTXWrrY6x4h/4SOZlmQSJdfbhd7UOz/V+YgGMfc716kzc/SkHJqYPlf9f10IdOMjzb4gfs0+HfiTrXiC+1f+0JpfEemWmmzolx5Ytvss0k8E8JT94k6SSb9+/qielP0X4DXWl6JfW8vj74gahfXggjF/c3cCzWyQvvCxpHAkI39Hfy/McE5fpj0bcaNxqiuUfRRRQMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/nt/4PfP8Aj8/Zr/67eLf/AELR6/Wj/gld/wAowv2cP+yXeGf/AE02tfkv/wAHvn/H5+zX/wBdvFv/AKFo9frR/wAErv8AlGF+zh/2S7wz/wCmm1qluR0Pir/gyqGf+CWXj7/squo/+mjR6/X8nFfj/wD8GVhx/wAEs/H3/ZVdR/8ATRo9fa/wE+Lmt6P+2N8Q9K1rWr++8N+INbudO0iG6neRNLu7K1t7h4U3cIkkE7yen7ioUry5Rzlyx5j6o20ba+S/2e/jf4o134x/FXxZeS6lrOgX2jWuteHNF+2pb29tZedeQRyR+e6Rp56Wondz/wA9PwroNO/b6tp/Cfju8l03w3rGoeCdIh1gx+HPE6atZ3sbyPH5X2lYE2T74z8mzunrWnIxe0R9KgYozXz340/a81r4YQeIo/E3gaLT7zS/D58SWMNvrX2iO8gSZIZI5HEI8mZDInCeZHz/AKyuq+Kvxu1Lw94s1fwzouk2dxqVv4Un8SW9zc332eIukvl+X/qn74ffz9O9RP3Y8xcPePWS2BSA54r5c+EHxe8QfBr9mLwZrWuDTbzUPFkUd9dap4l8ePb6enmQJIHee6jMkDyfwWtvA8cZD/P/ABnqfC37Y83xL8KeEW8H+HLfVvEHipb6RLSXV0hsLSCyn+zzzm6SOTzI/MKIhSP59/8ABVSjyy5TGFaMo8x715lHmV8733x7+IWpfFv4X6fbeHLPQLHXLrUbPV9O1TUilxJJbRuX2OLaTeibPMjeNx54Pz+WK6b/AIal/wCLax+Iv7Db954y/wCEU+zfbv8AqKfYPP37Mf8ATTy+n8G/vUle0iexDAo31893f7at54e8PeMvEGs+FbbSvDPhvWrnQLS+m1xPM1O9ju/sqfJIkaQQ/wAckkkmI/Lfh/v1V0L9vnTdU8PeI0Wx0TWPEGjyafDZWnh3xFFrFnqkl9KYbeNLrZHsbzFPmB0+QfP84o+IHUjE+kNuaTYK8J+DXjTxh4g/aj8YWPiaxbRDZ+HNLmi0+31d76wDPcXmZ48pH877ER/3af6vvWJoXgC6+MH7Snxit7rxZ420z/hH7rS4NIOm+Ibq3g08yadG7/6Lv+zv+8O/95G/WgfOfSPQUY3Cvmvwz+2NrFj8BvCPiDVLPwr9u1Rbq3vdS17xJD4e04zW07wSbGdJHMj+Xv2JHsH9/FLoH7Tniz4nfE/4S3Xh3S9Lh8H+NtJvr+5huNVzcSeSbfefktn/ANXvcx7JP32/5/LxVezdw50fSbUAV81aD/wUL0DxH4+0/T7X/hGpdI1fW/7BtWi8TQvrhmMhhSZ9P2b1gd04fzN+x0fYM8e7eBtX1XVtA87WNNtdJvDLKjW8F59rRFDuEffsT76bH6cb8dsmfs8wc/v8p0FFFFBYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/Pb/AMHvn/H5+zX/ANdvFv8A6Fo9frR/wSu/5Rhfs4f9ku8M/wDppta/Jf8A4PfP+Pz9mv8A67eLf/QtHr9aP+CV3/KML9nD/sl3hn/002tUtyOh8V/8GVP/ACiy8ff9lV1H/wBNGj1+gHxB/Ysj8ceD/HGnr4mn02+8WeJx4lsdRtrPFxo8nkQQSRpl/n3xxyJvyn+vP4/n/wD8GVP/ACiy8ff9lV1H/wBNGj1+v1SWeH+O/wBjvTfF1t4isoNSk0nS9c8M6f4btrWG1ST7AllNLIjjfkOh8yNPLKYwh5+esjxD+x34g8dDxbJ4g8cWd1deKfDaeGh9j0D7Jb2Mcc0jpIiee5P+sf5C/fPT5K+hdv8AnFG3/OKr2hn7OJ5D8a/2YLf41+IL68vNWns7XUPC114aaGGH97H580E3nh9+PkMI+TZ361T8Pfs5+JJ/HV/4g8UeNLXWry78MzeHFS00T+z4LdJJFfzsefJl+Pp6bOle0PJihJM1nzfZ/r+tTTy/r+tDxG7/AGXtSsND+G8mheKLaw1v4c6S2jwXV7ov220u4nhijd/IE0ciP+4Qo6ScZwd4NUPCX7I2rfDzRtBuNF8ZKPFnh+61Vk1W80ZJra8ttRu/tU8E9sk0f/LQI++ORDmMdjsr39gCaFwDWnOR7OPLyHkFz+zxrst34F1SXxpLfeIvCOp3OoXF7e6d50d/HcxvHPAkKSJ5KbX/AHfzv5ewDD9a5y+/ZF1w3LabD40hh8Jf8Jani+HT20MSXiT/AG1Lt4ftXnj92ZA//LPzP3n33HyV9BsM0irip+1zh7OPLyHjV3+ylb3/AMKte8Oza3cR3GpeJLjxRZ38FqiyaZdPd/aocI5cP5cmOT9/2zR4j+AfiLx34J1Kw8T+MobjUJLi1vdJvdJ0RLGPR7q2kDx3AjkkneRzJjfvk2bMgBOTXs24UbhQHs0eV/DH4JeIPDHxQ1vxb4i8UWuualrWnWmmvFZ6T9gt7dIJJ3BTM0j8+eer9f8AvkY2o/s7eM7T4n+ONe8O+O9P0Gx8dSWz3UT+H/td9ZmC1S3zBMbkR78JnMkD17duozQPkR4bdfsnzeEtU8K3fgXXbfwxN4X0WfQU+3aZ/a3mW8jpI0kfzx7LjfGHLnfvJ+dDTfAn7JOo/Dm0+Gv2PxWs118Po721mkudM8xdTtbp98ibEkQRyfJH8/zjIPyc17jgetLtz/8AqqvaE+zieO/DX9njxB8KL630/SfGEMfguy1CS9h019GWTUI0d3kNr9sZyPI3uf8Alh5mwY8znNejeCNJ1TSNAEOsala6teCWV2uYLL7IjqXcomze/wBxCidedme/G9RUmgUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfz2/8Hvn/AB+fs1/9dvFv/oWj1+tH/BK7/lGF+zh/2S7wz/6abWvyX/4PfP8Aj8/Zr/67eLf/AELR6/Wj/gld/wAowv2cP+yXeGf/AE02tUtyOh8U/wDBlX/yix8f/wDZVdQ/9NGj1+vyDmvyB/4MrD/xqy8ff9lV1H/00aPX3B4o+L/ibVPjB4s0Of4jWvw58QWF55PhTQtRsLVLDX4dkflzPNMnmT+ZJ5ibLeRHTFQneXKXLRXPqDbRtryHxd+1Db+BL+70648O+Ite1HQLCC/8RyaFbpcW+iB03/O0kkcj8bnCRI8hTnZ2ribb9sdvC3jz4mS32m+J/EnhLw7Jp93DeaXZweRpNlNp0E7yO7vG8nzu74j8xwKZHOfSlITzXknjP9qvRPBt/qUcek+I9d0/w/AlzrWp6XbJJa6JG6+Zvk3ypJJiMhykCSOic4rnfj/+1n/wivg/x3b+FdN8RaxqnhfQpbubV9MtIZrDSJ3tnkty++T5/wCBz5ccgROXx0otylw97Y96dc0Ivr3rzHwn8fbO50zWLe8j1CbUPCugWetanKkSbJknhkceX8/3/wBzJwdg6Vyvh79qCEePvF+sapqF1a+C7DwnoniG0tpLVPtFv9q+2b/9X87u+yBBH8/z8J1NXKLi+QzhKMo839f1qe9eZRvrxu4/a80Pw3Zau3iPQ/FHhe+0eyh1BdO1G3gku76GaUQRiDyZJEkkecpH5e/fvdOOaq/Cr43a54//AGl9c0O60vX/AA/pll4Zsr9dK1e3tVmS4e6uIzNvhkk3ApGgxv8A4PWlysPaRPb9oo2ivm/Uf2gPEfhz9vWbwpqFzE/ga8sLKxggaGNPseozpcTwuX27yJBbSJjP39lNtP2j/EWp/tt6locM0n/Cu9D0W+jeKCy+0SXuo2v2R53TYhkfZ9qSPYn8aSVI+dH0e6UqR7TXkmk/tMW/iG/1DS7jQfFXhHV10KfW7FNXs4M3dtGQjyIkcz/cd48xybH+ccYNc/4f/bChTRNJtY9B8aeMNam8J2Pie6k0nTbWBWgnR/n2SXOxJPkJ8kSOefk8zDkLl/r+vQXOv6+X+Z75lRQXzXhPh79qy88cfHbw1ouj+Hb648I+IPDH9vQ6uPsyhlL2+2b/AI+vMWBPMMbp5e/zCONnz1teHP2sdD8Q6xo6JpPiS10XxA7waJrd1bQx2GsvGjybITvMi70jd08xIxIEOzNO3KP2kT10nApC2e1eL/DT9snR/idf+Ewvhvxdoun+N4n/ALG1LUbOBbe8lSMySQfJM8iOERyN6BJNnyO9aeh/tLWOreOdL0a68N+MNDj16ae30e+1WzS3t9TkhR5JERN5nj/dxu48+OPeENE/dXvC9pE9V8yjzK8T+G37aGj/ABOuvCskfhzxlo+k+NHeDSdU1CygSzubhEkkMHyTPIj4R8OU8t9nyOeKuaD+1rouv65psMOi+Jo9E1fUJNJ07xDNbx/2Zf3SbxsRt/nY3o6K7xpG+Dhzmq5WP2kT2KivJfCn7VWi+LfEGh2sWk+JbTSPFE0lromuXVtHHYaxIiPJsQ7/ADE3ojsnmInmBDszXfeDvEsni3w5b6jJpOqaO9wu77HqMaR3EPzdHVHcA/jUlm5RRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfz2/wDB75/x+fs1/wDXbxb/AOhaPX60f8Erv+UYX7OH/ZLvDP8A6abWvyX/AOD3z/j8/Zr/AOu3i3/0LR6/Wj/gld/yjC/Zw/7Jd4Z/9NNrVLcjofFf/BlT/wAosvH3/ZVdR/8ATRo9foR8Y/hL8RviFoHizwrI3gfxR4a8SSSG1u9b8y3uNER/4PIjhkS48vPyP5kL/j+8r89/+DKn/lFl4+/7KrqP/po0ev1+qSzwKx+B/j/4R63q0ngnUvD+qJ4msLGC7vNfnnSfT7u1tktftKIkb+fvjjRzG7p86H5/n4f4h/Zt8Qaz4Q+NOntqOk3N58RrKO3sLiRni2yJpsdozzBI/k/eJv8Ak39fwr3jrtpAu0saUnzX5jOMeXl5T5a1L9iS4sfGmralH4S+FPjD+3oLUz3Pim1eS40i5htUgYx/uJDPAfLR/L3wHP8AHW58RP2cvHENp8SNH8Iv4NfQfiRYnzhqEs9q+kXX2GO0fZHGknmRyRxp/Ghj/wBuvotulIVA71cpuQ4U4xPnbxN+z/4+0nW9efw23hG5tfF3hWy0DUW1G6mgewngjuI/OiRIJBMm2f7jmPp17VnXP7FmqeLPAviTRdUvtLhTVvB/h/QYWRGuY0vdNe4k8yRGRN8HmPHx1dN/+rr6aIGDRt605T5kL2cf6/7d/wDkT5lH7HWpal4P1SO38JfCT4fa3EbK602fw1ZtJ591a3cd0hnfyIP3DSQpmDY/f5+ld58Mfhz42Hx21Xxp4qj8M2I1DQLTRorPSb2e82PDcTyl3eSGPr5/b+m6vXtv+cUbf84pc4ezieA/FL9l7WPiB41+JGsW99ptrceItO0geH5XZ/M0/UNOe4njmf5OI/Mkj+5vP36o6d+yJ4h0zR/D0Np4ggsdUsvCut6ZqeqwvJ9ol1TUpIJ3uo+M7PPjkk++j/c5r6OxgUdRUmlve5j5X+Gf7H3iLwn8QF1VtA+GnhiH/hEL3w7dLoDXHn6jPMbfZdTyPAm//UvxJvdM/wCsk3nHbfAv9nzWvhnqsM19dabJHD4F0fwx/o7O2bm1+0eY/Kf6v98mzv14r3BgMUbcsaUve/r1/wDkiIU4x2/r4f8A5E+fPhh+zH4q+Hd/8N5JpvD95D4f8HzeFNbQXU8ed728nnW37s7+YCNj7OKxvgR+xncfCK50WxHg74StD4fLpB4nisn/ALcvY9jom9BAnkzkbN8wnkz+8+T5+Pp4nFNyuacveD2aPCfC37OGu6F8Ovgro01zpf2r4c3Uc2oSRyv5cuyxnt/3IKfP88y/f2cA9+K4X4X/ALGvizwd8SPA+rXmmfD77V4P1O6l1PxDbiaTW/FCT29xD5szvDlHzMj+X5kiZHDoECH6vI5pcYFKT5ua/wBoXsY8vKeC+Ef2afEHh/4SfB3w7cXWkyXPw91eG/1KRJZPLmSO3uo8Q/Jkkmdfv7OB9Kk+F3wc+IHw60LSfBMF54ZXwPocjxrqCvNLqd9ZHfstXgddkbjcFMwkfIj/ANWhr3YsM0p4pyfNzc32ivZnzN+z9+x7cfBPxDoNp/wh/wAJ2tvDTuYfE8Ni/wDbmoR7HRN8fkIkM5G3fMJ5M4I2DfmvffBza1P4dt/+Ehh0231gpi5TTZ5JLfO7+B3RH6eordpCOaqpOUhU6cYig5oooqSwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/nt/wCD3z/j8/Zr/wCu3i3/ANC0ev1o/wCCV3/KML9nD/sl3hn/ANNNrX5L/wDB75/x+fs1/wDXbxb/AOhaPX60f8Erv+UYX7OH/ZLvDP8A6abWqW5HQ+K/+DKn/lFl4+/7KrqP/po0ev1+r8gf+DKk/wDGrLx9/wBlV1H/ANNGj1936j8dfiNfL8V9Y03UPAFjoXw51OexjtNR0y6WS8SG1guCXuhdbEJ8zZ/qKks+jS2KA2K878A/tB6D408LTX7STafc6dolrruqWksMhk02C5heZM/J+84jkHyZ/wBX+FZviL9sHwB4XmgjutXvZribSYNcSGz0e+u5WsZi+y42Qwu+zMZ38fu/48US92XKyIVIyjzI9W8yjzK8t8R/tbeAPCV3a2tzrUlzcahpUeuQRWOm3d+9xZOX2zp5MbnZlD/u45xxTbz9pPRIfEF1eNq2kt4Ut/CqeKPtkRuZJ1t975m2JHs8vyxn7/mZ/gxQHtInq1FeceDv2m/A/wAQdQurPS9cbzLPT/7Vd7qxuLOOWyx/x9QyTIiTQf8ATSMunvUPw/8A2pfBHxK8SWOk6RrFxcX+qQSXdlFPpl1aG7hTG+aNpo08yP5vvplOar2che0ieklTyaAvSvG/iD8TPHF/+0xB4F8L33hXSrVfDf8Abs1zqukT37u/2nyNieXdQfrVf4cftVwf8Ilq03jSaxt9U0XxBN4cJ0SGe8j1eeNEk32sCI8zfJJ86DeUMb88VGlv69A+1b+u57d5lHmV5Tq37YHw+0Sz0O9m8QSNH4ieeOwgh0+6nubiSB0SZPJVDIjx7/njdA4yf7hrRu/2nvA9l46/4R2bWmj1Bb1NOkcWc5tI7p/uWr3QTyFnP/PPfv46Ux+0iei7Wo2muBk/aS8Ex+Ov+EcbWZv7S+2/2bv+xz/Y/tf/AD6/avL8jz/+mfmb/ase0/a4+Ht74oXS4ddmkupNWfRQ50u7NvFeo7obZ5vK8uOQuh2I7jzCU2Z3pkKuesUV418MP2vNB+INh4qvptM8QaRa+GtbGj+ZcaPfAXG+RER9rwIVffJ88f348fPivZaBhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfz2/8Hvn/AB+fs1/9dvFv/oWj1+tH/BK7/lGF+zh/2S7wz/6abWvyX/4PfP8Aj8/Zr/67eLf/AELR6/Wj/gld/wAowv2cP+yXeGf/AE02tUtyOh8U/wDBlWuf+CWXj7/squo/+mjR6+0PEf7EMfxDHxd1W/8ADujweMLzxP8A2z4T1W4gguJ/3MFnJB8+MpC88Do8b+r+or4w/wCDKoZ/4JZ+Pv8Asquof+mjR6/X1lyalaS5i2k9z5n8WeHPiIvibxhqlv8AD+4vZviR4TsbKWGHV7KP+w72OK4R45y8nzJ+/Hzw+Z/q+lbXwQ+DXiHwh4uF1qmlmGD/AIQDRdD3+dG/+lQfaPPg+Vv9uP5x8le/dcZpoHFTLVP+u/8AmRyf1/4D/kfOf7LPwO8T/DTxBoE+taSbOGx+HWl6BOBcwSeXeQT3DyQ/I39ySP5/uGuF8N/sveO7L4OX2kyaHtvrj4TP4Yjh+2wY/tDzrh/I+/8A3HT5/ufyr7JI5FAXbWkp839ev+YoU+X+v8P+R86ftG/ArVviHc2K+Zb6Xpa+Adc0O81GSZEjsJrhbTYX9Y/3Lk46bKxvA/j/AFb4g/tOfCuG+8NL4fk03wrqkreXqdrfRzrJ9jTfB5Dv/o/yfJJJs3/3K+oiu5cGua8F/CPwv8OJrqbw34Z8P6BJfvvum03TobQ3P++UQbvxojO0v6/vf/JE+x0/r+7/APInmPxA/Zrs/it+1pBr3ijwjoviLwvb+Ef7PibUoILqOO++2eZxG+X+5/Hsx71m/tEfs5udS+Ht94V8PX39i+DJL63m0Lwzqn/CPziG6RP3lq8ckKB0dM7DIgcSPzX0O3AoHIqS+T3uY+cfhZ8CNQ8N/FvwRrlp4T1LQdPt/wC3rjVEvvEJ1W8inuvsiRvPJI8jvI/kvxHJIiD+OrXgzwX4w8AWl54IbwTY65pd14om1ZNevrq1fTzazX32zc8O/wA83ce4ogEezfGj+ZX0G33aF+7Ve0Dk0sfJvg39mfU/CviKTQ9Y8I+K/EVn/wAJPJrUGrp43uIdEEMl8LuN5LLzxiePI/dpA8bvHzIN9b0vwL8US/AO60P+ym/tST4gf24kP2mD/j2/tz7X5+/dt/1Hz7Pv54619KP1oAwTWfw8v9fy/wCQpQ5v69f8zxP4WaT4u+EupfEqEeEbrUo9U8UjV9KmgvrWKK+huvIST78nmI8Gx3k3oN//ACzL17av3aG+7Qv3aPsmgtFFFUAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfz2/8Hvn/H5+zX/128W/+haPX60f8Erv+UYX7OH/AGS7wz/6abWvyX/4PfP+Pz9mv/rt4t/9C0ev1o/4JXf8owv2cP8Asl3hn/002tUtyOh8V/8ABlT/AMosvH3/AGVXUf8A00aPX6+scCvyC/4Mqf8AlFl4+/7KrqP/AKaNHr9CPB/j74m/Fnx54+tdE1bwLoek+EfED6LBHe+H7q+uJ/3EE+95Evo0/wCW/wDc7Vn9os92zgU1hu6V5vqn7S3g/QvGP9h3+sMuoR3Uem3Usen3T6fbXT42QyXQQ28Mj7h+7eTf86e1c14n/aH1HT/FMFjaroV0v/CeW3hSfYs7yW8L2vnvvDog8/5gRs3oEcd80KPNImVTlPb6K4my+O/he/8ADemavDqhk07WtV/sSyn+yy/6Rdec8OwfJ08xHG84TisPS/2rPAOtTa+1vr4VfComXV5ZLOeOC0eOcwvGZGTZ5nmceWPnfKdRVFHqQGKCcVxvw++M3h/4q/bI9DvLlrnTWRLyzvdPnsLuDfym+CeNJFV/7xTn8OPLbf4vfEzxhrvxMm0fVPh7peleA9Ym0yGHVdIupHuEjtLeffJcpdIif67/AJ50rfzAfQbdKTfmvG/h9+2P4V8Y6d4QtruSbSvE3i7SLLV4tHFrcXDwJdk+W5dI9nl70f532Y+Tfs3gV0Hg79o/wX8R9f8A7J0nWDcXEkTz2ryWdxBBfxpxJJazSRpHcRpx88DuBzV+z5SIVIyPRdoo2ivDE/bG0Xxp8VPAug+EbmPVLPxJd3sd1c3GnXUEUkEFrPJ5lrNIiRzx+ZHs8yPzE961ND/al8N2/wAMfC2ta7qlvJe+J7V57aHRLG+v/tSpgyPDCkPn+WnUu8Y2d6kOdHr2+jfXjg/a98P6h8XfCnhvSbfUdZs/Fumz6la6vaWF3JaYSS3CAOkJjdD5/wA77x5GwCTG+rfh39qXQ4Phb4b1zX9QtWuvERkS2h0W0vL9rt43feIIPJ+0PsCnf+7+TBz2yC9pE9Y8yjzK8w1H9qjwHpvh3w/qkviAXFt4mklXSzbWc9xJeyRj95CkcaO/mdf3eN+flxnitXwv+0D4V8c2Wk3Gk6hcXS67c3Fja40+4SSOeDf50cytHmB08t+JgnSgftIneUUUUFhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/Pb/AMHvn/H5+zX/ANdvFv8A6Fo9frR/wSu/5Rhfs4f9ku8M/wDppta/Jf8A4PfP+Pz9mv8A67eLf/QtHr9aP+CV3/KML9nD/sl3hn/002tUtyOh8U/8GVv/ACiy8ff9lV1H/wBNGj19+fCz9k7Q7/4l/EPxF428C+G9Q1DVPFT3+jX99Y2t5cfZfs1uEeNzudP3iSfJx9K+Bf8Agyp/5RZePv8Asquo/wDpo0ev1+NZx92XMXJc0eU+Qfjp8IPiR471zxJbyeH/ABNr1xceJLTUNJvovFa2miW+nQzW8ggNn50Yef5JP9ZBIM/P5mQgrqr/AOBniqfxzqd9HpbfZ7j4q2XiJHNzDn7BHpsEDz/e/wCeiOmzG/HPSvpEjIA9aXG7K1pGo1b+v5f/AJEylT5m/wCu/wD8kfKGkfCr4hWWi+EfBzeCrhbTwv48Ouza22qWv2O4sjfTT740Ennlwk/3HjT7nV++nr/7NfibxH+zRrWg/ZvsutJ40uvEdrZ/bzaf2hD/AGrJdpH50DfuJJI8bH/5Zvs9K+nWXIoxis+t/wCvs/5D9n/X3/5ni/7Nfw4PhzX9a1ifwj4n8N3moWtraNP4g8VSa5fXqJ5jFP8AX3CRxxmTKYky/mPlE743w0/ZH0HXPiB8R9c8deAvC+rXes+Jnu9Ku9Ss7W/key+y28aYyGKfvEk+TivoKitOf3uYfJ7vKeM658HtW8TfGbx9LHCdP0jxF4LtdBsr9HT5Jg9/v+T7/wAgnjNeX/Cv9l3ULrQtK8P694S8V6ZqWh6LdaV/bd942n1LTbd5LV7XzbG189+HRz8kkcGxPfr9Zu1CPuNRze7y/wBf1qP7XN/X9aHzN4H8EePtS8R/B2x1LwNJotn8OVntNQvxqlrJbz/8S6S1SSCON/MMb/J9+ON03/c71T+D3wf8cfAfTvh/rjeFbnxBfaf4P/4RzU9Hs9QtY7yxmE/2hHR5HSB0/gfEmeIz+8r6mz8lB5Gavnlzc39fa/zM/YwtY8E0vwJ4q074o/DXxG3hPT7aG20/VbHV7HRp4Y7fSHvLi3mST955ZkH7t/MMfzlznYc1y3wr+EHjX4LWHw417/hGbjX77w/omoaJqei215aJd2/n3Uc8c0LvJHA5Hl7H/eD/AFn1r6kyCP507vUf1+f/AMkaciPmr4Z/AnxZpfxO8G+JtQ0uC2W58R694g1K1iuEf+xEvbby4Yv9t/lG8pxvdz0rrvgz4X8SfDDxH4ot7jw7JJZ+J/GWoagLxLuDZa2rwx+XO6b9775E2bPvjOTxXsJk5x7ZpfN5/DNPmX6E+zX/ALcS0UUUGgUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfz2/8Hvn/AB+fs1/9dvFv/oWj1+tH/BK7/lGF+zh/2S7wz/6abWvyX/4PfP8Aj8/Zr/67eLf/AELR6/Wj/gld/wAowv2cP+yXeGf/AE02tUtyOh8V/wDBlT/yiy8ff9lV1H/00aPX6/V+QP8AwZU/8osvH3/ZVdR/9NGj1+rGo/FjwvpHjK18OXniXw/Z+Ir3m10ufUYY7y5/3IS+9/yqSzpqK50fEHQ006S+bWNJFrDff2a8pvE8tLnzPK8ndnHmeZhNnXfx1qOf4t+FrPxnH4bn8TeH4fEU6b00t9QhS8k9xDu8w/lQB01FeZ/C39qXwR8Yn8TDRdc0u5XwndPBesL2CRCiRxyfaU2O37g78CQ45R/St3RPjP4M1/wpc65pvi7wzf6JYHZdajb6pBJaW7f7civsT8T3oA6+iuCf9pD4exabdX0nj7wYthp8xtLu5/tu28q3m/55u+/CP8r/ACdeDWr4k+L3hXwRoFtqet+JNA0jSr7YLW8vtRht7e53f3HdsN1oA6iiuV1L4u+FtL1WzsrrxPoFvfai0K2VrLqMMcl55xPk+Wu/L+ZsfZj7+CB0rJ0j49+H4fhhpvinxFq2ieE7HUhtSTUNZtfIWTc42CdJPIc/IfuOe9AHoFFea/CH486X8WNFjmkl0+wu7zU9R0ywtft8ckmopZTvG80f3N/3N/yA7A4ya9KoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP57f8Ag98/4/P2a/8Art4t/wDQtHr9aP8Agld/yjC/Zw/7Jd4Z/wDTTa1+S/8Awe+f8fn7Nf8A128W/wDoWj1+tH/BK7/lGF+zh/2S7wz/AOmm1qluR0Pin/gysGf+CWPj7/squo/+mjR6+2ofD0egXvjbwr4i+H+v+KtY8UeLX1eyubbTpPst5bvMj20736fu4DbxoE/eSI/7j5B84r4m/wCDKo4/4JZePv8Asquo/wDpo0ev1/xmpj7suYc480eU+O/EMOs6Z4U8ReCz4V8XTavdfEpNcSS30aeTT3sn1mC78/7Vt8riPPyb/M4+5VvxV4b1TRfi9qkOjeGPEF9Pq3i+11K60jVPDpvtHvP3kH/Exg1NUT7LIkce/ZJJJsdNgjr61IyMUD5ty0Rly2X9fZ/+RJlT5m3/AF1/+SPk/wAY+Ate1DTvippDeG9b1THjqx8Tz2Rsn8nX9LT7DJJDBM+I5n/cP+5D87PL4D1kfHTwpffGeH4ia14Z8J+JLfSb7wzZaPLbXeiXFlca7cperJ8ltIiSN5EG9N5T+PH/ACzr7KIGaTAyKUdP6/u8oSp82n9fFzHhEnwih/4bl/tRfDMP9jp4C+wpejTx9mEv23/U79uzf5f8HXZ7V4l4I+GfirwTB8O9V1QfELw/o9n4Tm0VDovhyPVrzTJvtzvsmtZrWeREkg8gb0j6xfPX3LjNCrgU07f16/8AyQez1/r+7/kfMX7OPwKi8IfGjS5l0HX103S/AtpZ6feeILOE3dtJ/aN5M8G+P92j7HT92n3EEdc18KPC2pfCzTPg/wCIvEnhPxJqGlaRoWqaZNBbaNNdXmiXs91HIlw9tHGZ/njSRN6R/Jv9JK+wio/KkC4/Cq5/6+//AOSJ9nr/AF/d/wAj5/8A2RLdfCPg7T9NvvCGtaPcah4g1+708T6N5Y0uF72WRN7gbIfMjdNn/PTFfQTDIpq/epzHAqWaR2CiiigoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/nt/4PfP+Pz9mv8A67eLf/QtHr9aP+CV3/KML9nD/sl3hn/002tfkv8A8Hvn/H5+zX/128W/+haPX60f8Erv+UYX7OH/AGS7wz/6abWqW5HQ/Dv/AIN6f+Dhb4L/APBJr9i/xP8ADn4jeGPihrWt6141uvEkE/hvTrG5tUt5bGwt1RmnvIXEge1kJAQjBX5iSQPvD/iNW/ZZ/wChB/aA/wDBHpH/AMs6/mBoqSz+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD+n7/iNW/ZZ/6EH9oD/wAEekf/ACzo/wCI1b9ln/oQf2gP/BHpH/yzr+YGigD9Mv8Ag4t/4LNfC/8A4K6z/CNvhtoPj7RB4Bk1x9Q/4SWytLbzhemwMXlfZ7mfdj7LJu3bcZXG7Jx/RB/wSu/5Rhfs4f8AZLvDP/ppta/itr+1L/gld/yjC/Zw/wCyXeGf/TTa1UdyZH//2Q==';

    var GpDeviceDetailsWidgetConfigComponent = /** @class */ (function () {
        function GpDeviceDetailsWidgetConfigComponent() {
            this.config = {};
        }
        GpDeviceDetailsWidgetConfigComponent.prototype.ngOnInit = function () {
        };
        return GpDeviceDetailsWidgetConfigComponent;
    }());
    GpDeviceDetailsWidgetConfigComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-gp-device-details-widget-config',
                    template: "<div class=\"form-group\">\r\n  <c8y-form-group>\r\n    <br>\r\n    <label translate>Device Details URL</label>\r\n    <input type=\"text\" name=\"config.deviceDetailsUrl\" style=\"width:100%\" [(ngModel)]=\"config.deviceDetailsUrl\">\r\n    <br>\r\n    <div class=\"form-group\">\r\n      <label translate>Name of the Main document List from API</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"config.mainListName\" style=\"width:100%\" [(ngModel)]=\"config.mainListName\">\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n      <label translate>Table Column Headings (comma separated e.g: ID,)</label>\r\n      <input type=\"text\" name=\"config.tableColumnNames\" style=\"width:100%\" [(ngModel)]=\"config.tableColumnNames\">\r\n    </div>\r\n    \r\n    <div class=\"form-froup\">\r\n      <label translate>Table Column Names from API (comma separated e.g: id,)</label>\r\n      <input type=\"text\" name=\"config.tableColumnValues\" style=\"width:100%\" [(ngModel)]=\"config.tableColumnValues\">\r\n    </div>\r\n  \r\n  </c8y-form-group>\r\n  \r\n \r\n  \r\n</div>",
                    styles: [""]
                },] }
    ];
    GpDeviceDetailsWidgetConfigComponent.ctorParameters = function () { return []; };
    GpDeviceDetailsWidgetConfigComponent.propDecorators = {
        config: [{ type: core.Input }]
    };

    var ɵ0 = {
        id: 'device.details.mat.dashboard',
        previewImage: previewImage,
        label: 'Device Details',
        description: 'Device details Dashboard - Display device details in the dashboard',
        component: GpDeviceDetailsWidgetComponent,
        configComponent: GpDeviceDetailsWidgetConfigComponent,
        data: {
            ng1: {
                options: {
                    noDeviceTarget: false,
                    noNewWidgets: false,
                    deviceTargetNotRequired: false,
                    groupsSelectable: true
                }
            }
        }
    };
    var GpDeviceDetailsWidgetModule = /** @class */ (function () {
        function GpDeviceDetailsWidgetModule() {
        }
        return GpDeviceDetailsWidgetModule;
    }());
    GpDeviceDetailsWidgetModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [GpDeviceDetailsWidgetComponent, GpDeviceDetailsWidgetConfigComponent],
                    imports: [
                        ngxComponents.CoreModule,
                        http.HttpClientModule
                    ],
                    exports: [GpDeviceDetailsWidgetComponent, GpDeviceDetailsWidgetConfigComponent],
                    entryComponents: [GpDeviceDetailsWidgetComponent, GpDeviceDetailsWidgetConfigComponent],
                    providers: [
                        http.HttpClient,
                        common.DatePipe,
                        GpDeviceDetailsWidgetService,
                        {
                            provide: ngxComponents.HOOK_COMPONENTS,
                            multi: true,
                            useValue: ɵ0
                        }
                    ],
                },] }
    ];

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
    */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GpDeviceDetailsWidgetComponent = GpDeviceDetailsWidgetComponent;
    exports.GpDeviceDetailsWidgetModule = GpDeviceDetailsWidgetModule;
    exports.GpDeviceDetailsWidgetService = GpDeviceDetailsWidgetService;
    exports.ɵ0 = ɵ0;
    exports.ɵa = GpDeviceDetailsWidgetConfigComponent;
    exports.ɵb = previewImage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=custom-widget.umd.js.map
