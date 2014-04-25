// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
(function() {
    "use strict";

    var config = require("../config.js");

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

    function findBrowserIndex(browser) {
        var i = 1;
        browsers.forEach(function(info) {
            if (info === browser) {
                return i;
            }
            i++;
        });
    }

    browsers.forEach(function(browser) {
        var name = browser.platform + " / " + browser.browserName + " " + browser.version;
        config.tests_results.environment.push(name);
    });

    module.exports = {
        all: {
            options: {
                urls: [
                    "http://127.0.0.1:9999/bin/tests/Binding/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/BindingList/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/BindingTemplate/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/ItemContainer/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/Navigation/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/PageControl/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/Promise/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/Repeater/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/TimePicker/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/WWA-Application/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                ],
                build: process.env.TRAVIS_JOB_ID,
                testInterval: 1000,
                browsers: browsers,
                testname: "winjs qunit tests",
                tags: ["winjs"],
                onTestComplete: function(details) {
                    console.log("======================================================\n" +
                                "Passed: " + details.result.passed + "\n" +
                                "Failed: " + details.result.failed + "\n" +
                                "Total: " + details.result.total + "\n" + 
                                "Platform: " + JSON.stringify(details.platform) + ", index: " + findBrowserIndex(details.platform) + "\n" + 
                                "Component: " + details.result.url.split('/')[5]+ "\n" + 
                                "Time: " + details.result.runtime + "ms"
                                );
                    return true;
                }
            }
        },
        ie11only: {
            options: {
                urls: [
                    "http://127.0.0.1:9999/bin/tests/Animations/test.html?fastanimations=false&autostart=true&testtimeout=100000",
                 /*   "http://127.0.0.1:9999/bin/tests/AppBarAndFlyouts/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/Base/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/DateTime/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/FlipView/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/Hub/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/Itemsmanager/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/ListView/test.html?fastanimations=true&autostart=true&testtimeout=500000",
                    "http://127.0.0.1:9999/bin/tests/ListViewIntegration/test.html?fastanimations=true&autostart=true&testtimeout=500000",
                    "http://127.0.0.1:9999/bin/tests/NavBar/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/Rating/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/Scheduler/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/SearchBox/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/SemanticZoom/test.html?fastanimations=true&autostart=true&testtimeout=500000",
                    "http://127.0.0.1:9999/bin/tests/Toggle/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/Tooltip/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/UI/test.html?fastanimations=true&autostart=true&testtimeout=100000",
                    "http://127.0.0.1:9999/bin/tests/ViewBox/test.html?fastanimations=true&autostart=true&testtimeout=100000",*/
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
                onTestComplete: function(details) {
                    console.log("======================================================\n" + 
                                "Passed: " + details.result.passed + "\n" +
                                "Failed: " + details.result.failed + "\n" +
                                "Total: " + details.result.total + "\n" + 
                                "Platform: " + JSON.stringify(details.platform) + "\n" + 
                                "Component: " + details.result.url.split('/')[5] + "\n" + 
                                "Time: " + details.result.runtime + "ms"
                                );
                    //xhr call http://winjs-staging.azurewebsites.net/api.aspx
                    return true;
                }
            }
        }
    };
})();
