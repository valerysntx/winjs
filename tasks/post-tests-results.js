// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
(function() {
        "use strict";

        function sortByComponentName(array) {
            return array.sort(function(a, b) {
                var aName = a["name"];
                var bName = b["name"];
                var x = aName && aName.toLowerCase();
                var y = bName && bName.toLowerCase();
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }

        module.exports = function(grunt) {
            var config = require("../config.js");

            grunt.registerTask("post-tests-results", function() {
                    var done = this.async();
                    var http = require('http');
                    http.post = require('http-post');

                    var now = new Date();
                    var month = now.getMonth() + 1;
                    var day = now.getDate() + 1;
                    var hour = now.getUTCHours();
                    var mins = now.getUTCMinutes();
                    var secs = now.getUTCSeconds();
                    var fileName = "Automated " +
                        ((month + 1) < 10 ? ("0" + month) : (month + 1)) + "-" +
                        (day < 10 ? ("0" + day) : day) + "-" + now.getFullYear() + " " +
                        (hour < 10 ? "0" + hour : hour) + ":" +
                        (mins < 10 ? "0" + mins : mins) + ":" +
                        (secs < 10 ? "0" + secs : secs) + " UTC";

                    config.tests_results.results = sortByComponentName(config.tests_results.results);
                    var data = JSON.stringify(config.tests_results);
                    console.log("Posting test results...");
                    http.post('http://winjs-staging.azurewebsites.net/api.aspx', {
                        type: "addresult",
                        name: fileName,
                        content: data
                    }, function(res) {
                        done();
                    });
            });
    };
})();