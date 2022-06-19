(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




const TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
// const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            // for Spring Boot back-end
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
            // for Node.js Express back-end
            // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
], AuthInterceptor);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const AUTH_API = 'http://localhost:4000/api/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(credentials) {
        return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
        }, httpOptions);
    }
    register(user) {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        }, httpOptions);
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/_services/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
};
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TokenStorageService);



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const API_URL = 'http://localhost:8080/api/test/';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getPublicContent() {
        return this.http.get(API_URL + 'all', { responseType: 'text' });
    }
    getUserBoard() {
        return this.http.get(API_URL + 'user', { responseType: 'text' });
    }
    getModeratorBoard() {
        return this.http.get(API_URL + 'mod', { responseType: 'text' });
    }
    getAdminBoard() {
        return this.http.get(API_URL + 'admin', { responseType: 'text' });
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/app-material.ts":
/*!*********************************!*\
  !*** ./src/app/app-material.ts ***!
  \*********************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");







const materialComponents = [
    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
];
let Material = class Material {
};
Material = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: materialComponents,
        exports: materialComponents,
    })
], Material);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board-user/board-user.component */ "./src/app/board-user/board-user.component.ts");
/* harmony import */ var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board-moderator/board-moderator.component */ "./src/app/board-moderator/board-moderator.component.ts");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "./src/app/board-admin/board-admin.component.ts");
/* harmony import */ var _components_reunion_list_reunion_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/reunion-list/reunion-list.component */ "./src/app/components/reunion-list/reunion-list.component.ts");
/* harmony import */ var _components_add_reunion_add_reunion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-reunion/add-reunion.component */ "./src/app/components/add-reunion/add-reunion.component.ts");
/* harmony import */ var _components_reunion_reunion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/reunion/reunion.component */ "./src/app/components/reunion/reunion.component.ts");













const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'user', component: _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_7__["BoardUserComponent"] },
    { path: 'mod', component: _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__["BoardModeratorComponent"] },
    { path: 'admin', component: _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_9__["BoardAdminComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
    { path: 'reunions', component: _components_reunion_list_reunion_list_component__WEBPACK_IMPORTED_MODULE_10__["ReunionListComponent"] },
    { path: 'reunions/:id', component: _components_reunion_reunion_component__WEBPACK_IMPORTED_MODULE_12__["ReunionComponent"] },
    { path: 'reunions/:rName', component: _components_reunion_reunion_component__WEBPACK_IMPORTED_MODULE_12__["ReunionComponent"] },
    { path: 'add', component: _components_add_reunion_add_reunion_component__WEBPACK_IMPORTED_MODULE_11__["AddReunionComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    \n    <ul class=\"navbar-nav mr-auto\" routerLinkActive=\"active\">\n      <li class=\"nav-item\">\n        <a href=\"/home\" class=\"nav-link\" routerLink=\"home\">Home </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"showAdminBoard\">\n        <a href=\"/admin\" class=\"nav-link\" routerLink=\"admin\">Admin Board</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"showModeratorBoard\">\n        <a href=\"/mod\" class=\"nav-link\" routerLink=\"mod\">Moderator Board</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href=\"/user\" class=\"nav-link\" *ngIf=\"isLoggedIn\" routerLink=\"user\">User</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"!isLoggedIn\">\n      <li class=\"nav-item\">\n        <a href=\"/register\" class=\"nav-link\" routerLink=\"register\">Sign Up</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href=\"/login\" class=\"nav-link\" routerLink=\"login\">Login</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"isLoggedIn\">\n      <li class=\"nav-item\">\n        <a href=\"/profile\" class=\"nav-link\" routerLink=\"profile\">{{ username }}</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href class=\"nav-link\" (click)=\"logout()\">LogOut</a>\n      </li>\n    </ul>\n  </nav>\n\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");



let AppComponent = class AppComponent {
    constructor(tokenStorageService) {
        this.tokenStorageService = tokenStorageService;
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
        this.title = 'client';
    }
    ngOnInit() {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            this.username = user.username;
        }
    }
    logout() {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "./src/app/board-admin/board-admin.component.ts");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./board-user/board-user.component */ "./src/app/board-user/board-user.component.ts");
/* harmony import */ var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./board-moderator/board-moderator.component */ "./src/app/board-moderator/board-moderator.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ "./src/app/_helpers/auth.interceptor.ts");
/* harmony import */ var _components_add_reunion_add_reunion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-reunion/add-reunion.component */ "./src/app/components/add-reunion/add-reunion.component.ts");
/* harmony import */ var _components_reunion_details_reunion_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/reunion-details/reunion-details.component */ "./src/app/components/reunion-details/reunion-details.component.ts");
/* harmony import */ var _components_reunion_list_reunion_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/reunion-list/reunion-list.component */ "./src/app/components/reunion-list/reunion-list.component.ts");
/* harmony import */ var _components_reunion_reunion_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/reunion/reunion.component */ "./src/app/components/reunion/reunion.component.ts");
/* harmony import */ var _app_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-material */ "./src/app/app-material.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_10__["BoardAdminComponent"],
            _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_11__["BoardUserComponent"],
            _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_12__["BoardModeratorComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
            _components_add_reunion_add_reunion_component__WEBPACK_IMPORTED_MODULE_16__["AddReunionComponent"],
            _components_reunion_details_reunion_details_component__WEBPACK_IMPORTED_MODULE_17__["ReunionDetailsComponent"],
            _components_reunion_list_reunion_list_component__WEBPACK_IMPORTED_MODULE_18__["ReunionListComponent"],
            _components_reunion_reunion_component__WEBPACK_IMPORTED_MODULE_19__["ReunionComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _app_material__WEBPACK_IMPORTED_MODULE_20__["Material"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["authInterceptorProviders"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/board-admin/board-admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLWFkbWluL2JvYXJkLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/board-admin/board-admin.component.html":
/*!********************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"jumbotron\">\n    <p>{{ content }}</p>\n  </header>\n</div>\n"

/***/ }),

/***/ "./src/app/board-admin/board-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.ts ***!
  \******************************************************/
/*! exports provided: BoardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardAdminComponent", function() { return BoardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



let BoardAdminComponent = class BoardAdminComponent {
    constructor(userService) {
        this.userService = userService;
        this.content = '';
    }
    ngOnInit() {
        this.userService.getAdminBoard().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
};
BoardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-admin',
        template: __webpack_require__(/*! ./board-admin.component.html */ "./src/app/board-admin/board-admin.component.html"),
        styles: [__webpack_require__(/*! ./board-admin.component.css */ "./src/app/board-admin/board-admin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], BoardAdminComponent);



/***/ }),

/***/ "./src/app/board-moderator/board-moderator.component.css":
/*!***************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLW1vZGVyYXRvci9ib2FyZC1tb2RlcmF0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/board-moderator/board-moderator.component.html":
/*!****************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"jumbotron\">\n    <p>{{ content }}</p>\n  </header>\n</div>\n"

/***/ }),

/***/ "./src/app/board-moderator/board-moderator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.ts ***!
  \**************************************************************/
/*! exports provided: BoardModeratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModeratorComponent", function() { return BoardModeratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



let BoardModeratorComponent = class BoardModeratorComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getModeratorBoard().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
};
BoardModeratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-moderator',
        template: __webpack_require__(/*! ./board-moderator.component.html */ "./src/app/board-moderator/board-moderator.component.html"),
        styles: [__webpack_require__(/*! ./board-moderator.component.css */ "./src/app/board-moderator/board-moderator.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], BoardModeratorComponent);



/***/ }),

/***/ "./src/app/board-user/board-user.component.css":
/*!*****************************************************!*\
  !*** ./src/app/board-user/board-user.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLXVzZXIvYm9hcmQtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/board-user/board-user.component.html":
/*!******************************************************!*\
  !*** ./src/app/board-user/board-user.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"jumbotron\">\n    <p>{{ content }}</p>\n  </header>\n</div>\n"

/***/ }),

/***/ "./src/app/board-user/board-user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/board-user/board-user.component.ts ***!
  \****************************************************/
/*! exports provided: BoardUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardUserComponent", function() { return BoardUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



let BoardUserComponent = class BoardUserComponent {
    constructor(userService) {
        this.userService = userService;
        this.content = '';
    }
    ngOnInit() {
        this.userService.getUserBoard().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
};
BoardUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-user',
        template: __webpack_require__(/*! ./board-user.component.html */ "./src/app/board-user/board-user.component.html"),
        styles: [__webpack_require__(/*! ./board-user.component.css */ "./src/app/board-user/board-user.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], BoardUserComponent);



/***/ }),

/***/ "./src/app/components/add-reunion/add-reunion.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/add-reunion/add-reunion.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXJldW5pb24vYWRkLXJldW5pb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-reunion/add-reunion.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-reunion/add-reunion.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 400px; margin: auto;\">\n    <div class=\"submit-form\">\n      <div *ngIf=\"!submitted\">\n        <div class=\"form-group\">\n          <label for=\"rName\">reunion Name</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"rName\"\n            required\n            [(ngModel)]=\"reunion.rName\"\n            name=\"rName\"\n          />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"suite\">suite</label>\n          <input\n            class=\"form-control\"\n            id=\"description\"\n            required\n            [(ngModel)]=\"reunion.suite\"\n            name=\"suite\"\n          />\n        </div>\n\n        <button (click)=\"saveReunion() && searchRName()\" class=\"btn btn-success\">Submit</button>\n\n      </div>\n      <ul class=\"navbar-nav ml-auto\" *ngIf=\"searchRName()\">\n        <li class=\"nav-item\">\n          <a href=\"/reunions/:rName\" class=\"nav-link\" routerLink=\"reunion\">join reunion</a>\n        </li>\n\n      </ul>\n       <!-- <div *ngIf=\"submitted\">\n        <h4>You submitted successfully!</h4>\n        <button class=\"btn btn-success\" (click)=\"   searchRName()\">Add</button>\n      </div>\n    </div>\n  </div>-->\n"

/***/ }),

/***/ "./src/app/components/add-reunion/add-reunion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-reunion/add-reunion.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddReunionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReunionComponent", function() { return AddReunionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_reunion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/reunion.service */ "./src/app/services/reunion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddReunionComponent = class AddReunionComponent {
    constructor(reunionService, route) {
        this.reunionService = reunionService;
        this.route = route;
        this.rName = '';
        this.isOpen = false;
        this.currentReunion = null;
        this.reunion = {
            rName: '',
            suite: '',
        };
        this.msg = '';
        this.submitted = false;
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
    ngOnInit() {
    }
    testCall() { alert("I am here.."); }
    saveReunion() {
        const data = {
            rName: this.reunion.rName,
            suite: this.reunion.suite
        };
        this.reunionService.create(data)
            .subscribe(response => {
            console.log(response);
            this.submitted = true;
        }, error => {
            console.log(error);
        });
    }
    newReunion() {
        this.submitted = false;
        this.reunion = {
            rName: '',
            suite: '',
        };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-open'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddReunionComponent.prototype, "isOpen", void 0);
AddReunionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-reunion',
        template: __webpack_require__(/*! ./add-reunion.component.html */ "./src/app/components/add-reunion/add-reunion.component.html"),
        styles: [__webpack_require__(/*! ./add-reunion.component.css */ "./src/app/components/add-reunion/add-reunion.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_reunion_service__WEBPACK_IMPORTED_MODULE_2__["ReunionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], AddReunionComponent);



/***/ }),

/***/ "./src/app/components/reunion-details/reunion-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/reunion-details/reunion-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV1bmlvbi1kZXRhaWxzL3JldW5pb24tZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/reunion-details/reunion-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/reunion-details/reunion-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>reunion-details works!</p>\n"

/***/ }),

/***/ "./src/app/components/reunion-details/reunion-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/reunion-details/reunion-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReunionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReunionDetailsComponent", function() { return ReunionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReunionDetailsComponent = class ReunionDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}; /*
updateReunion(): void {
  this.reunionService.update(this.currentReunion.id, this.currentReunion)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'The tutorial was updated successfully!';
      },
      error => {
        console.log(error);
      });
}

deleteReunion(): void {
  this.reunionService.delete(this.currentReunion.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/reunion']);
      },
      error => {
        console.log(error);
      });
}
}*/
ReunionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reunion-details',
        template: __webpack_require__(/*! ./reunion-details.component.html */ "./src/app/components/reunion-details/reunion-details.component.html"),
        styles: [__webpack_require__(/*! ./reunion-details.component.css */ "./src/app/components/reunion-details/reunion-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReunionDetailsComponent);



/***/ }),

/***/ "./src/app/components/reunion-list/reunion-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/reunion-list/reunion-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV1bmlvbi1saXN0L3JldW5pb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/reunion-list/reunion-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/reunion-list/reunion-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>reunion-list works!</p>\n"

/***/ }),

/***/ "./src/app/components/reunion-list/reunion-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/reunion-list/reunion-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReunionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReunionListComponent", function() { return ReunionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReunionListComponent = class ReunionListComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReunionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reunion-list',
        template: __webpack_require__(/*! ./reunion-list.component.html */ "./src/app/components/reunion-list/reunion-list.component.html"),
        styles: [__webpack_require__(/*! ./reunion-list.component.css */ "./src/app/components/reunion-list/reunion-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReunionListComponent);



/***/ }),

/***/ "./src/app/components/reunion/reunion.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/reunion/reunion.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <header class=\"jumbotron\">\n\n    <form>\n\n\n              <input matInput placeholder=\"Name\" [formControl]=\"nameFormControl\" />\n              <mat-error *ngIf=\"nameFormControl.hasError('minlength')\">\n                Name must be at least 4 characters long.\n              </mat-error>\n              <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n                Name is <strong>required</strong>\n              </mat-error>\n\n\n\n              <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"/>\n              <mat-error *ngIf=\"emailFormControl.hasError('email')\">\n                Please enter a valid email address\n              </mat-error>\n              <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                Email is <strong>required</strong>\n              </mat-error>\n\n\n            <button\n              mat-raised-button\n              [disabled]=\"emailFormControl.invalid || nameFormControl.invalid || loading\"\n              color=\"primary\"\n              (click)=\"register()\"\n            >\n              {{buttionText}}\n            </button>\n\n            <div>\n              <input type=\"text\" [(ngModel)]=\"userName\">\n              <button (click)=\"setUserName()\" >Set username</button>\n            </div>\n\n\n              <a (userNameEvent)=\"userNameUpdate($event)\" *ngIf=\"!userName\"></a>\n              <div class=\"chatbox\">\n                <div class=\"chatbox__user-list\">\n                  <h2>User list</h2>\n                  <div class=\"chatbox__user--active\" *ngFor=\"let user of userList\" >\n                    <p>{{ user }}</p>\n                  </div>\n                </div>\n                <div class=\"messages_list\">\n                  <div class=\"chatbox__messages\" *ngFor=\"let msg of messageList\" [ngClass]=\"{mine: msg.mine}\">\n                    <div class=\"user-message\">\n                      <div class=\"message-box\">\n                        <p class=\"name\">{{ msg.userName }}</p>\n                        <br/>\n                        <p class=\"messagee\">{{ msg.messagee }}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"send-message\">\n                <input type=\"text\" [(ngModel)]=\"messagee\">\n                <button (click)=\"sendMessage()\">Send</button>\n\n        </form>\n\n\n</header>\n</div>\n"

/***/ }),

/***/ "./src/app/components/reunion/reunion.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/reunion/reunion.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatbox {\n  background: rgba(255, 255, 255, 0.05);\n  width: 80%;\n  height: 75%;\n  border-radius: 0.2em;\n  position: relative;\n  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);\n}\n.chatbox .messages_list {\n  overflow-y: auto;\n  height: 100%;\n}\n.chatbox__messages.mine .message-box {\n  float: right;\n}\n.chatbox__messages .message-box {\n  float: left;\n}\n.chatbox .message-box {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 1em 0;\n  height: auto;\n  width: 55%;\n  border-radius: 5px;\n  margin: 2em 1em;\n  overflow: auto;\n}\n.chatbox .message-box > p.name {\n  color: #FFF;\n  font-size: 1em;\n}\n.chatbox .message-box > p.message {\n  color: #FFF;\n  font-size: 0.7em;\n  margin: 0 2.8em;\n}\n.chatbox__user-list {\n  background: rgba(255, 255, 255, 0.1);\n  width: 25%;\n  height: 100%;\n  float: right;\n  border-top-right-radius: 0.2em;\n  border-bottom-right-radius: 0.2em;\n}\n.chatbox__user-list h1 {\n  background: rgba(255, 255, 255, 0.05);\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.9em;\n  padding: 1em;\n  margin: 0;\n  font-weight: 300;\n  text-align: center;\n}\n.chatbox__user, .chatbox__user--active {\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 100%;\n  margin: 1em 0.7em;\n}\n.chatbox__user--active {\n  background: rgba(23, 190, 187, 0.8);\n}\n.chatbox p {\n  float: left;\n  text-align: left;\n  margin: -0.25em 2em;\n  font-size: 0.7em;\n  font-weight: 300;\n  color: #FFF;\n  width: 200px;\n}\n.chatbox form {\n  background: #222;\n}\n.chatbox form input {\n  background: rgba(255, 255, 255, 0.03);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border: none;\n  width: 75%;\n  padding: 1.2em;\n  outline: none;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXVuaW9uL0M6XFxVc2Vyc1xcUDUwXFxEZXNrdG9wXFxhbmd1bGFyLXBva2VyXFxhbmd1bGFyci9zcmNcXGFwcFxcY29tcG9uZW50c1xccmV1bmlvblxccmV1bmlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXVuaW9uL3JldW5pb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0NDQUQ7QURDQztFQUNFLGlCQUFBO0VBQ0EsYUFBQTtDQ0NIO0FERUc7RUFDRSxhQUFBO0NDQUw7QURFRztFQUNFLFlBQUE7Q0NBTDtBREdDO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtDQ0RIO0FERUc7RUFDRSxZQUFBO0VBQ0EsZUFBQTtDQ0FMO0FERUc7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtDQ0FMO0FER0M7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7Q0NESDtBREVHO0VBQ0Usc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0NDQUw7QURHQztFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtDQ0RIO0FERUc7RUFFRSxvQ0FBQTtDQ0RMO0FESUM7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtDQ0ZIO0FESUM7RUFDRSxpQkFBQTtDQ0ZIO0FER0c7RUFDRSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtDQ0RMIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXVuaW9uL3JldW5pb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNoYXRib3gge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDc1JTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAubWVzc2FnZXNfbGlzdCB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAmX19tZXNzYWdlcyB7XHJcbiAgICAmLm1pbmUgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tZXNzYWdlLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDJlbSAxZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICYgPiBwLm5hbWUge1xyXG4gICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgICAmID4gcC5tZXNzYWdlIHtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIG1hcmdpbjogMCAyLjhlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fdXNlci1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yZW07XHJcbiAgICBoMSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX3VzZXIge1xyXG4gICAgd2lkdGg6IDAuNWVtO1xyXG4gICAgaGVpZ2h0OiAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDFlbSAwLjdlbTtcclxuICAgICYtLWFjdGl2ZSB7XHJcbiAgICAgIEBleHRlbmQgLmNoYXRib3hfX3VzZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjMsIDE5MCwgMTg3LCAwLjgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogLTAuMjVlbSAyZW07XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIHBhZGRpbmc6IDEuMmVtO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY2hhdGJveCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNzUlO1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmNoYXRib3ggLm1lc3NhZ2VzX2xpc3Qge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2hhdGJveF9fbWVzc2FnZXMubWluZSAubWVzc2FnZS1ib3gge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY2hhdGJveF9fbWVzc2FnZXMgLm1lc3NhZ2UtYm94IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uY2hhdGJveCAubWVzc2FnZS1ib3gge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1NSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAyZW0gMWVtO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jaGF0Ym94IC5tZXNzYWdlLWJveCA+IHAubmFtZSB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5jaGF0Ym94IC5tZXNzYWdlLWJveCA+IHAubWVzc2FnZSB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDAuN2VtO1xuICBtYXJnaW46IDAgMi44ZW07XG59XG4uY2hhdGJveF9fdXNlci1saXN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yZW07XG59XG4uY2hhdGJveF9fdXNlci1saXN0IGgxIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaGF0Ym94X191c2VyLCAuY2hhdGJveF9fdXNlci0tYWN0aXZlIHtcbiAgd2lkdGg6IDAuNWVtO1xuICBoZWlnaHQ6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IDFlbSAwLjdlbTtcbn1cbi5jaGF0Ym94X191c2VyLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzLCAxOTAsIDE4NywgMC44KTtcbn1cbi5jaGF0Ym94IHAge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAtMC4yNWVtIDJlbTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNGRkY7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5jaGF0Ym94IGZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufVxuLmNoYXRib3ggZm9ybSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmc6IDEuMmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBmb250LXdlaWdodDogMzAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/reunion/reunion.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/reunion/reunion.component.ts ***!
  \*********************************************************/
/*! exports provided: ReunionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReunionComponent", function() { return ReunionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_reunion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/reunion.service */ "./src/app/services/reunion.service.ts");
/* harmony import */ var _add_reunion_add_reunion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-reunion/add-reunion.component */ "./src/app/components/add-reunion/add-reunion.component.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");







let ReunionComponent = class ReunionComponent {
    constructor(http, reunionService, route, router) {
        this.http = http;
        this.reunionService = reunionService;
        this.route = route;
        this.router = router;
        this.currentReunion = null;
        this.message = '';
        this.msg = '';
        this.lien = '';
        this.loading = false;
        this.buttionText = "Submit";
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
        ]);
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)
        ]);
        this.userName = '';
        this.messagee = '';
        this.messageList = [];
        this.userList = [];
    }
    click() {
        this.addReunion.toggle();
    }
    setUserName() {
        const data = {
            userName: this.userName
        };
    }
    ;
    userNameUpdate(name) {
        userName: this.userName,
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__["io"](`http://localhost:4000/userName=${name}`);
        this.userName = name;
        this.socket.emit('set-user-name', name);
        this.socket.on('user-list', (userList) => {
            this.userList = userList;
        });
        this.socket.on('message-broadcast', (data) => {
            if (data) {
                this.messageList.push({ message: data.message, userName: data.userName, mine: false });
            }
        });
    }
    sendMessage() {
        this.socket.emit('message', this.message);
        this.messageList.push({ message: this.message, userName: this.userName, mine: true });
        this.message = '';
    }
    ngOnInit() {
        console.log(this.http.test);
        this.message = '';
        this.getReunion(this.route.snapshot.paramMap.get('id'));
        this.msg = this.route.snapshot.params.id;
    }
    getReunion(id) {
        this.reunionService.get(id)
            .subscribe(data => {
            this.currentReunion = data;
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    register() {
        this.loading = true;
        this.buttionText = "Submiting...";
        let lien = '';
        let user = {
            name: this.nameFormControl.value,
            email: this.emailFormControl.value,
            lien: "localhost:4200/reunions/" + this.msg
        };
        this.http.sendEmail("http://localhost:4000/sendmail", user).subscribe(data => {
            let res = data;
            console.log(` ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}et ${lien}`);
        }, err => {
            console.log(err);
            this.loading = false;
            this.buttionText = "Submit";
        }, () => {
            this.loading = false;
            this.buttionText = "Submit";
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _add_reunion_add_reunion_component__WEBPACK_IMPORTED_MODULE_5__["AddReunionComponent"])
], ReunionComponent.prototype, "addReunion", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ReunionComponent.prototype, "click", null);
ReunionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reunion',
        template: __webpack_require__(/*! ./reunion.component.html */ "./src/app/components/reunion/reunion.component.html"),
        styles: [__webpack_require__(/*! ./reunion.component.scss */ "./src/app/components/reunion/reunion.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_reunion_service__WEBPACK_IMPORTED_MODULE_4__["ReunionService"],
        src_app_services_reunion_service__WEBPACK_IMPORTED_MODULE_4__["ReunionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ReunionComponent);

function id(id) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"jumbotron\">\n    <p>{{ content }}</p>\n  </header>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let HomeComponent = class HomeComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getPublicContent().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card {\n  max-width: 400px !important;\n  padding: 40px 40px;\n}\n\n.card {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBR2pCLG1CQUFtQjtFQUduQiwyQ0FBMkM7Q0FDNUM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixlQUFlO0VBR2YsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnByb2ZpbGUtaW1nLWNhcmQge1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"card card-container\">\n    <img\n      id=\"profile-img\"\n      src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\n      class=\"profile-img-card\"\n    />\n    <form\n      *ngIf=\"!isLoggedIn\"\n      name=\"form\"\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"username\"\n          [(ngModel)]=\"form.username\"\n          required\n          #username=\"ngModel\"\n        />\n        <div\n          class=\"alert alert-danger\"\n          role=\"alert\"\n          *ngIf=\"f.submitted && username.invalid\"\n        >\n          Username is required!\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          name=\"password\"\n          [(ngModel)]=\"form.password\"\n          required\n          minlength=\"6\"\n          #password=\"ngModel\"\n        />\n        <div\n          class=\"alert alert-danger\"\n          role=\"alert\"\n          *ngIf=\"f.submitted && password.invalid\"\n        >\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary btn-block\">\n          Login\n        </button>\n      </div>\n      <div class=\"form-group\">\n        <div\n          class=\"alert alert-danger\"\n          role=\"alert\"\n          *ngIf=\"f.submitted && isLoginFailed\"\n        >\n          Login failed: {{ errorMessage }}\n        </div>\n      </div>\n    </form>\n\n    <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\n      Logged in as {{ roles }}.\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    }
    onSubmit() {
        this.authService.login(this.form).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
        }, err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currentUser; else loggedOut\">\n  <header class=\"jumbotron\">\n    <h3>\n      <strong>{{ currentUser.username }}</strong> Profile\n    </h3>\n  </header>\n  <p>\n    <strong>Token:</strong>\n    {{ currentUser.accessToken.substring(0, 20) }} ...\n    {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}\n  </p>\n  <p>\n    <strong>Email:</strong>\n    {{ currentUser.email }}\n  </p>\n  <strong>Roles:</strong>\n  <ul>\n    <li *ngFor=\"let role of currentUser.roles\">\n      {{ role }}\n    </li>\n  </ul>\n</div>\n\n<ng-template #loggedOut>\n  Please login.\n</ng-template>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(token) {
        this.token = token;
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card {\n  max-width: 400px !important;\n  padding: 40px 40px;\n}\n\n.card {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBR2pCLG1CQUFtQjtFQUduQiwyQ0FBMkM7Q0FDNUM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixlQUFlO0VBR2YsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnByb2ZpbGUtaW1nLWNhcmQge1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"card card-container\">\n    <img\n      id=\"profile-img\"\n      src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\n      class=\"profile-img-card\"\n    />\n    <form\n      *ngIf=\"!isSuccessful\"\n      name=\"form\"\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"username\"\n          [(ngModel)]=\"form.username\"\n          required\n          minlength=\"3\"\n          maxlength=\"20\"\n          #username=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n          <div *ngIf=\"username.errors.minlength\">\n            Username must be at least 3 characters\n          </div>\n          <div *ngIf=\"username.errors.maxlength\">\n            Username must be at most 20 characters\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input\n          type=\"email\"\n          class=\"form-control\"\n          name=\"email\"\n          [(ngModel)]=\"form.email\"\n          required\n          email\n          #email=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\n          <div *ngIf=\"email.errors.required\">Email is required</div>\n          <div *ngIf=\"email.errors.email\">\n            Email must be a valid email address\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          name=\"password\"\n          [(ngModel)]=\"form.password\"\n          required\n          minlength=\"6\"\n          #password=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary btn-block\">Sign Up</button>\n      </div>\n\n      <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n        Signup failed!<br />{{ errorMessage }}\n      </div>\n    </form>\n\n    <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n      Your registration is successful!\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");



let RegisterComponent = class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        this.authService.register(this.form).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
        }, err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
        });
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/reunion.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/reunion.service.ts ***!
  \*********************************************/
/*! exports provided: ReunionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReunionService", function() { return ReunionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



const baseUrl = 'http://localhost:4000/api/reunion';
let ReunionService = class ReunionService {
    constructor(http) {
        this.http = http;
        this.test = "How r u?";
    }
    sendEmail(url, data) {
        return this.http.post(url, data);
    }
    getAll() {
        return this.http.get(baseUrl);
    }
    get(id) {
        return this.http.get(`${baseUrl}/${id}`);
    }
    create(data) {
        return this.http.post(baseUrl, data);
    }
    update(id, data) {
        return this.http.put(`${baseUrl}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
    deleteAll() {
        return this.http.delete(baseUrl);
    }
    getRName(rName) {
        return this.http.get('${baseUrl}/${rName}');
    }
};
ReunionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ReunionService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\P50\Desktop\angular-poker\angularr\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map