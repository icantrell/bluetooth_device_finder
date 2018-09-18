import { Component, OnInit } from "@angular/core";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { Device } from "../shared/device.model";
//var bluetooth = require('nativescript-bluetooth');
import {EasyBluetooth} from 'easy-bluetooth-classic';

//var EasyBluetooth = require('easy-bluetooth-classic');
//var bluetooth = require("nativescript-bluetooth");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    deviceList: Array<Device> = [];
    isLoading = false;
    listLoaded = true;
   
    constructor() {
        
    }

    onTapCell(name): void{
        alert(name);
        return;
    }

    ngOnInit(): void{
        var config = {
            "uuid": "00001101-0000-1000-8000-00805f9b34fb",
            "deviceName": "Bluetooth Example Project",
            "bufferSize": 1024,
            "characterDelimiter": "\n"
          }
      
        EasyBluetooth.init(config)
        .then(function (config) {
            console.log("config done!");
        })
        .catch(function (ex) {
            console.warn(ex);
        });


        var t = this.deviceList;
        setTimeout( 
            function(){
                EasyBluetooth.startScan()
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
            },
            125*1000
        )

        
    }
}
