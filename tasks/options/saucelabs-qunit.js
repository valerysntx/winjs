// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
(function() {
    "use strict";

    var browsers = [{
        browserName: "internet explorer",
        platform: "WIN8.1",
        version: "11"
    }, {
        browserName: "safari",
        platform: "OS X 10.9",
        version: "7"
    }, {
        browserName: "firefox",
        platform: "Win8.1",
        version: "28"
    }, {
        browserName: "googlechrome",
        platform: "Win8.1",
        version: "34"
    }];

    module.exports = {
        all: {
            options: {
                urls: [
                    "http://127.0.0.1:9999/bin/tests/Binding/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/BindingList/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/BindingTemplate/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/ItemContainer/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/Navigation/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/PageControl/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/Promise/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/Repeater/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/TimePicker/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/WWA-Application/test.html?unittesting&autostart",
                ],
                build: process.env.TRAVIS_JOB_ID,
                testInterval: 1000,
                browsers: browsers,
                testname: "winjs qunit tests",
                tags: ["winjs"]
            }
        },
        ie11only: {
            options: {
                urls: [
                    "http://127.0.0.1:9999/bin/tests/Animations/test.html?unittesting&autostart"
                    /*,
                    "http://127.0.0.1:9999/bin/tests/AppBarAndFlyouts/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/Base/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/DateTime/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/FlipView/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/Hub/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/Itemsmanager/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/ListView/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/ListViewIntegration/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/NavBar/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/Rating/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/Scheduler/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/SearchBox/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/SemanticZoom/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/Toggle/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/Tooltip/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/UI/test.html?unittesting&autostart",
                    "http://127.0.0.1:9999/bin/tests/ViewBox/test.html?unittesting&autostart",*/
                ],
                build: process.env.TRAVIS_JOB_ID,
                testInterval: 1000,
                browsers: [{
                    browserName: "internet explorer",
                    platform: "WIN8.1",
                    version: "11"
                }],
                testname: "winjs qunit tests - ie11only",
                tags: ["winjs"],
                onTestComplete: fuction(details) {
                    grunt.log.writeln(JSON.stringify(details));
                }
            }
        }
    };
})();
