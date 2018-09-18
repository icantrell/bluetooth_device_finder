"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//var bluetooth = require('nativescript-bluetooth');
var easy_bluetooth_classic_1 = require("easy-bluetooth-classic");
//var EasyBluetooth = require('easy-bluetooth-classic');
//var bluetooth = require("nativescript-bluetooth");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.deviceList = [];
        this.isLoading = false;
        this.listLoaded = true;
    }
    HomeComponent.prototype.onTapCell = function (name) {
        alert(name);
        return;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var config = {
            "uuid": "00001101-0000-1000-8000-00805f9b34fb",
            "deviceName": "Bluetooth Example Project",
            "bufferSize": 1024,
            "characterDelimiter": "\n"
        };
        easy_bluetooth_classic_1.EasyBluetooth.init(config)
            .then(function (config) {
            console.log("config done!");
        })
            .catch(function (ex) {
            console.warn(ex);
        });
        var t = this.deviceList;
        setTimeout(function () {
            easy_bluetooth_classic_1.EasyBluetooth.startScan()
                .then(function (devices) {
                console.log("all devices found:");
                console.log(devices);
                t.push(devices);
            })
                .catch(function (ex) {
                console.warn(ex);
            });
            /*
            bluetooth.startScanning({
                serviceUUIDs: [],
                seconds : 120,
                onDiscovered: function(peripheral){
                    console.log(peripheral.UUID);
                    console.log(peripheral.RSSI);
                    peripheral.RSSI += 128;
                    t.push(peripheral);
                },
                onScanFailed: function(){
                    
                }

            });*/
        }, 125 * 1000);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCxvREFBb0Q7QUFDcEQsaUVBQXFEO0FBRXJELHdEQUF3RDtBQUN4RCxvREFBb0Q7QUFRcEQ7SUFLSTtRQUpBLGVBQVUsR0FBa0IsRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLElBQUksQ0FBQztJQUlsQixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixNQUFNLENBQUM7SUFDWCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksTUFBTSxHQUFHO1lBQ1QsTUFBTSxFQUFFLHNDQUFzQztZQUM5QyxZQUFZLEVBQUUsMkJBQTJCO1lBQ3pDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLG9CQUFvQixFQUFFLElBQUk7U0FDM0IsQ0FBQTtRQUVILHNDQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN6QixJQUFJLENBQUMsVUFBVSxNQUFNO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3hCLFVBQVUsQ0FDTjtZQUNJLHNDQUFhLENBQUMsU0FBUyxFQUFFO2lCQUNwQixJQUFJLENBQUMsVUFBVSxPQUFPO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztZQUNQOzs7Ozs7Ozs7Ozs7OztpQkFjSztRQUNULENBQUMsRUFDRCxHQUFHLEdBQUMsSUFBSSxDQUNYLENBQUE7SUFHTCxDQUFDO0lBL0RRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7O09BQ1csYUFBYSxDQWdFekI7SUFBRCxvQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9kZXZpY2UubW9kZWxcIjtcbi8vdmFyIGJsdWV0b290aCA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1ibHVldG9vdGgnKTtcbmltcG9ydCB7RWFzeUJsdWV0b290aH0gZnJvbSAnZWFzeS1ibHVldG9vdGgtY2xhc3NpYyc7XG5cbi8vdmFyIEVhc3lCbHVldG9vdGggPSByZXF1aXJlKCdlYXN5LWJsdWV0b290aC1jbGFzc2ljJyk7XG4vL3ZhciBibHVldG9vdGggPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWJsdWV0b290aFwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZGV2aWNlTGlzdDogQXJyYXk8RGV2aWNlPiA9IFtdO1xuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xuICAgIGxpc3RMb2FkZWQgPSB0cnVlO1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uVGFwQ2VsbChuYW1lKTogdm9pZHtcbiAgICAgICAgYWxlcnQobmFtZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lke1xuICAgICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICAgICAgXCJ1dWlkXCI6IFwiMDAwMDExMDEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiXCIsXG4gICAgICAgICAgICBcImRldmljZU5hbWVcIjogXCJCbHVldG9vdGggRXhhbXBsZSBQcm9qZWN0XCIsXG4gICAgICAgICAgICBcImJ1ZmZlclNpemVcIjogMTAyNCxcbiAgICAgICAgICAgIFwiY2hhcmFjdGVyRGVsaW1pdGVyXCI6IFwiXFxuXCJcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgRWFzeUJsdWV0b290aC5pbml0KGNvbmZpZylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25maWcgZG9uZSFcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihleCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdmFyIHQgPSB0aGlzLmRldmljZUxpc3Q7XG4gICAgICAgIHNldFRpbWVvdXQoIFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBFYXN5Qmx1ZXRvb3RoLnN0YXJ0U2NhbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkZXZpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBkZXZpY2VzIGZvdW5kOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRldmljZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5wdXNoKGRldmljZXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIGJsdWV0b290aC5zdGFydFNjYW5uaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZVVVSURzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA6IDEyMCxcbiAgICAgICAgICAgICAgICAgICAgb25EaXNjb3ZlcmVkOiBmdW5jdGlvbihwZXJpcGhlcmFsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBlcmlwaGVyYWwuVVVJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwZXJpcGhlcmFsLlJTU0kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyaXBoZXJhbC5SU1NJICs9IDEyODtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucHVzaChwZXJpcGhlcmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25TY2FuRmFpbGVkOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgICAgICB9KTsqL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEyNSoxMDAwXG4gICAgICAgIClcblxuICAgICAgICBcbiAgICB9XG59XG4iXX0=