$(document).ready(function () {
    var base_interval_a = 0;
    var min_range_a = 1;
    var max_range_a = 300;

	// Alvin Li for Libaray A
    var library_a_words = 10;
    $("#library_a_words").on("change", function () {
        library_a_words = parseInt(this.value);
        // console.log(library_a_words);
    });

    var library_a_interval = 10000;
    $("#library_a_interval").on("change", function () {
        library_a_interval = parseInt(this.value);
        // console.log(library_a_interval);
    });


    var library_a_repeat = 1;
    $("#library_a_repeat").on("change", function () {
        library_a_repeat = parseInt(this.value);
        // console.log(library_a_repeat);
    });
    var library_a_first_num
    var library_a_last_num

    $('#library_a').on('click', function () {
        // console.log("Library AA");
    });
    
    $("#slider-range-a").slider({
        range: true,
        min: 1,
        max: 300,
        values: [ 1, 300 ],
        slide: function(event, ui) {
            $("#amount").val( "  " + ui.values[0] + " - " + ui.values[1]);
            min_range_a = ui.values[0]; 
            max_range_a = ui.values[1];
        }
    });
        //   $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        //     " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        // } );

    function RandomInt(min_int, max_int, used) {
        var random = 0;
        do {
            random = Math.floor(Math.random() * (max_int - min_int + 1)) + min_int;
        } while (used.includes(random));
        return random;
    }

    $('#btn_library_a').on('click', function () {
        $.get("http://qianzi.ca/wp-content/uploads/qianzi/Library/library_a.json", function(response) {
            var library_a_allwords = response;
            $("#library_a_answers").empty();
            $("#library_a_answers").hide();
            $("#library_a").empty();
            var used = [];
            // console.log(random);
            for (i = 1; i <= library_a_words; i++) {
            // for (i = 1; i <= 3; i++) {
                // $("#library_a").append("<audio>Started</audio>");
                $("#library_a").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/N/N" + i + ".mp3\" type=\"audio/mpeg\"></audio>");
                // $("#library_a").append("<audio src=\"Library/N/N" + i + ".mp3\" type=\"audio/mpeg\"></audio>");
                // var random = RandomInt(1, 300);
                
                var random = RandomInt(min_range_a, max_range_a, used);
                used.push(random);
                
                for (j = 1; j <= library_a_repeat; j++) {
                    $("#library_a").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/A/A" + random + ".mp3\" type=\"audio/mpeg\"></audio>");
                    // $("#library_a").append("<audio src=\"Library/A/A" + random + ".mp3\" type=\"audio/mpeg\"></audio>");
                }   
                $("#library_a_answers").append("<h3>" + i + ". " + library_a_allwords[random - 1] + "</h3>");
            }

            //Number audio delay
            var i = 0;
            setTimeout(function() {
                $("audio")[0].play();
            }, base_interval_a);
            i = i + 1;
            
            // 
            $("audio").on("ended", function() {
                var audio = $(this).next("audio");
                if (audio.length) {
                    if ((i % (library_a_repeat + 1)) == 1) {
                        setTimeout(function() {
                            audio.get(0).play();
                        }, base_interval_a);
                    } else {
                        setTimeout(function() {
                            audio.get(0).play();
                        }, library_a_interval);
                    }
                    i = i + 1;
                } else {
                    $("#library_a_answers").show();
                }
            });
        });
    });


    // David Zhang for Library B
	var min_int_b = 1;
	var max_int_b = 600;
	var base_interval_b = 3000;
	
	var library_b_words = 10;
	var library_b_interval = 10000;
	var library_b_repeat = 1;
	
	// Library B options
	// Plain JavaScript:
	// document.getElementById('library_b_words').addEventListener('change', function(){
	//     library_b_words = this.value;
	//     console.log(library_b_words);
	// });
	$("#library_b_words").on("change", function() {
		library_b_words = parseInt(this.value);
		// console.log(library_b_words);
	});
	$("#library_b_interval").on("change", function() {
		library_b_interval = parseInt(this.value);
		// console.log(library_b_interval);
	});
	$("#library_b_repeat").on("change", function() {
		library_b_repeat = parseInt(this.value);
		// console.log(library_b_repeat);
	});
	
	// Click the "Play" button start to play
	$("#library_b_btn").on("click", function() {
		//  http://qianzi.ca/wp-content/uploads/qianzi/Library/library_b.json
		//  http://qianzi.ca/wp-content/uploads/qianzi/Library/B/B1.mp3
		
		//all words on the website                      
		$.get("http://qianzi.ca/wp-content/uploads/qianzi/Library/library_b.json", function(response) {
			var library_b_allwords = response;
			console.log(library_b_allwords[0]);
			console.log(library_b_allwords[1]);
			
			//$.getJSON( "Library/library_b.json", function( data ) {
				//console.log(data);
				//var items = [];
				//$.each( data, function( key, val ) {
				//  items.push( "<li id='" + key + "'>" + val + "</li>" );
				//});
				
				//$( "<ul/>", {
				//  "class": "my-new-list",
				//  html: items.join( "" )
				//}).appendTo( "body" );
			//});
			//console.log(library_b_allwords);
			//console.log(library_b_allwords[0]);
	
	
			$("#library_b_answers").empty();
			$("#library_b_answers").hide();
			$("#library_b_playlist").empty();
			for (i = 1; i <= library_b_words; i++) {
				$("#library_b_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/N/N" + i + ".mp3\" type=\"audio/mpeg\"></audio>");
				word_num = RandomInt(min_int_b, max_int_b)
				$("#library_b_answers").append("<p>" + i + ". " + library_b_allwords[word_num - 1] + "</p>");
				for (j = 1; j <= library_b_repeat; j++) {
					$("#library_b_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/B/B" + word_num + ".mp3\" type=\"audio/mpeg\"></audio>");
				}
			}
	
	
			var i = 0;
			setTimeout(function() {
				$("audio")[0].play();
			}, base_interval_b);
			i = i + 1;
			
			// Play audio files
			$("audio").on("ended", function() {
				var audio = $(this).next("audio");
				if (audio.length) {
					if ((i % (library_b_repeat + 1)) == 1) {
						setTimeout(function() {
							audio.get(0).play();
						}, base_interval_b);
					} else {
						setTimeout(function() {
							audio.get(0).play();
						}, library_b_interval);
					}
					i = i + 1;
				} else {
					//$("#library_b_answers").empty();
					$("#library_b_answers").show();
				}
			});
		});    
	});
    
    
	// Danny Zhang for Library C
    var min_int_c = 1;
    var max_int_c = 400;
    var base_interval_c = 3000;
    var used_c = [];

    var library_c_words = 10;
    var library_c_interval = 10000;
    var library_c_repeat = 1;

    // Library C options
    // Plain JavaScript:
    // document.getElementById('library_c_words').addEventListener('change', function(){
    //     library_c_words = this.value;
    //     console.log(library_c_words);
    // });
    $("#library_c_words").on("change", function() {
        library_c_words = parseInt(this.value);
        // console.log(library_c_words);
    });
    $("#library_c_interval").on("change", function() {
        library_c_interval = parseInt(this.value);
        // console.log(library_c_interval);
    });
    $("#library_c_repeat").on("change", function() {
        library_c_repeat = parseInt(this.value);
        // console.log(library_c_repeat);
    });

    $("#slider-range-c").slider({
        range: true,
        min: 1,
        max: 400,
        values: [ 1, 400 ],
        slide: function(event, ui) {
            $("#amount_c").val( "  " + ui.values[0] + " - " + ui.values[1]);
            min_int_c = ui.values[0]; 
            max_int_c = ui.values[1];
        }
    });

    // Click the "Play" button start to play
    $("#library_c_btn").on("click", function() {
        //  http://qianzi.ca/wp-content/uploads/qianzi/Library/library_b.json
        //  http://qianzi.ca/wp-content/uploads/qianzi/Library/A/A1.mp3
        
        $.get("http://qianzi.ca/wp-content/uploads/qianzi/Library/library_c.json", function(response) {
            var library_c_allwords = response;
            //$.getJSON( "Library/library_c.json", function( data ) {
            //console.log(data);
            //var items = [];
            //$.each( data, function( key, val ) {
            //  items.push( "<li id='" + key + "'>" + val + "</li>" );
            //});
            
            //$( "<ul/>", {
            //  "class": "my-new-list",
            //  html: items.join( "" )
            //}).appendTo( "body" );
            //});
            //console.log(library_c_allwords);
            //console.log(library_c_allwords[0]);

            $("#library_c_answers").empty();
            $("#library_c_answers").hide();
            $("#library_c_playlist").empty();
            for (i = 1; i <= library_c_words; i++) {
                // $("#library_c_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/N/N" + i + ".mp3\" type=\"audio/mpeg\"></audio>");
                $("#library_c_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/N/N" + i + ".mp3\" type=\"audio/mpeg\"></audio>");
                word_num = RandomInt(min_int_c, max_int_c, used_c)
                used_c.push(word_num)
                $("#library_c_answers").append("<p>" + i + ". " + library_c_allwords[word_num - 1] + "</p>");
                for (j = 1; j <= library_c_repeat; j++) {
                    // $("#library_c_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/A/A" + word_num + ".mp3\" type=\"audio/mpeg\"></audio>");
                    $("#library_c_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/C/C" + word_num + ".mp3\" type=\"audio/mpeg\"></audio>");
                }
            }
            var i = 0;
            setTimeout(function() {
                $("audio")[0].play();
            }, base_interval_c);
            i = i + 1;

            // Play audio files
            $("audio").on("ended", function() {
                var audio = $(this).next("audio");
                if (audio.length) {
                    if ((i % (library_c_repeat + 1)) == 1) {
                        setTimeout(function() {
                            audio.get(0).play();
                        }, base_interval_c);
                    } else {
                        setTimeout(function() {
                            audio.get(0).play();
                        }, library_c_interval);
                    }
                    i = i + 1;
                } else {
                    //$("#library_c_answers").empty();
                    $("#library_c_answers").show();
                }
            });
        });
    });
});
