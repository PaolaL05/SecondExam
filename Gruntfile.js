module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');

	
	var config = grunt.option.config('config' || 'config.json');
	var con = grunt.file.readJSON('config');

	 grunt.initConfig({
        jasmine: {
            JS: {
               src: 'js/*.js',
               options: {
                 specs: 'spec/*.spec.js'
               }
            }
        }
    });

	grunt.loadNpmTasks('grunt-contrib-jasmine');


  	grunt.registerTask('generateIndex', function() {

  		grunt.file.copy('index.html', config.buildFolder+'/index.html',
		{
			process: function(files){
				return grunt.template.process(files,
					{
						data: {
							appName:config.appName	
						}
					});
			}

		});
	});

 grunt.registerTask('task1', function(){
        grunt.file.copy('page1.html', config.buildFolder+'/'+config.pageOneName+'.html',{ 
            process: function(files){
                return grunt.template.process(files,
                {
                      data: {
                        appName:config.appName
                    }
                });
            }
        });      
    });

grunt.registerTask('task2', function(){
        grunt.file.copy('page2.html', config.buildFolder+'/'+config.pageTwoName+'.html',{ 
            process: function(files){
                return grunt.template.process(files,
                {
                      data: {
                        appName:config.appName
                    }
                });
            }
        });      
    });



grunt.registerTask('build',
		['task1', 'task2', 'generateIndex']);


};