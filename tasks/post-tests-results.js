// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
(function() {
        "use strict";

        module.exports = function(grunt) {
            var config = require("../config.js");

            grunt.registerTask("post-tests-results", function() {
                    var done = this.async();
                    var http = require('http');
                    http.post = require('http-post');

                    var now = new Date();
                    var month = now.getMonth();
                    var day = now.getDate();
                    var hour = now.getUTCHours();
                    var mins = now.getUTCMinutes();
                    var secs = now.getUTCSeconds();
                    var fileName = "Automated " +
                        ((month + 1) < 10 ? ("0" + month) : (month + 1)) + "-" +
                        (day < 10 ? ("0" + day) : day) + "-" + now.getFullYear() + " " +
                        (hour < 10 ? "0" + hour : hour) + ":" +
                        (mins < 10 ? "0" + mins : mins) + ":" +
                        (secs < 10 ? "0" + secs : secs) + " UTC";

                    http.post('http://localhost:57528/api.aspx', {
                        type: "addresult",
                        name: fileName,
                        content: JSON.stringify(config.tests_results)
                    }, function(res) {
                        done();
                    });
            });
    };
})();