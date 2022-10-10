var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function component(id) {
    return function (trager) {
        trager.prototype.id = id;
    };
}
var Emplyee = (function () {
    function Emplyee() {
    }
    Emplyee.prototype.printId = function () {
        console.log(this.id);
    };
    Emplyee = __decorate([
        component(200)
    ], Emplyee);
    return Emplyee;
}());
console.log(new Emplyee().id);
//# sourceMappingURL=index.js.map