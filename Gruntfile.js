module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
    },

     less: {
       style: {
         files: {
           "build/css/common.css": ["source/less/common.less"]
         }
       }
     },

    autoprefixer: {
      options: {
        browsers: ["last 2 version", "ie 10"]
      },
      style: {
        src: "build/css/common.css"
      }
    },

    cmq: {
      style: {
        files: {
          "build/css/common.css": ["build/css/common.css"]
        }
      }
    },

    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "build/css/common.min.css": ["build/css/common.css"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            "js/**",
            "index.html"
          ],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    },

    prettify: {
      options: {
        "indent": 4,
        "condense": true,
        "indent_inner_html": true,
        "unformatted": [
          "a",
          "pre"
        ]
      },
      html: {
        "build/index.html": ["source/index.html"]
      }
    }
  });

   grunt.registerTask("build", [
   "clean",
   "copy",
   "less",
   "autoprefixer",
   "cmq",
   "cssmin",
   "imagemin",
   "prettify"
   ]);

};
