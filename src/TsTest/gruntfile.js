// This file in the main entry point for defining grunt tasks and using grunt plugins.
// Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409

module.exports = function (grunt) {
    grunt.initConfig({
        staticFilePattern: "**/*.{css,map,html,htm,ico,jpg,jpeg,png,gif,eot,svg,ttf,woff}",
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        }
    });

    // This command registers the default task which will install bower packages into wwwroot/lib
    //grunt.registerTask("default", ["bower:install"]);

    grunt.registerTask("ts", ["tslint"]);
    grunt.registerTask("dev", ["clean:assets", "copy", "uglify:dev", "bower:install", "less:dev", "ts"]);
    grunt.registerTask("release", ["clean", "copy", "uglify:release", "less:release", "ts"]);
    grunt.registerTask("default", ["dev"]);

    grunt.registerTask("jsDev", ["uglify:dev"]);

    // The following line loads the grunt plugins.
    // This line needs to be at the end of this this file.
    grunt.loadNpmTasks("grunt-bower-task");

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-tslint");

    require("grunt-ide-support")(grunt);
};