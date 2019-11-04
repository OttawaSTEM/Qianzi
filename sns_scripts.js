$(document).ready(function () {
    var base_interval = 0;
    
    function RandomInt(min_int, max_int, used) {
        var random = 0;
        do {
            random = Math.floor(Math.random() * (max_int - min_int + 1)) + min_int;
        } while (used.includes(random));
        return random;
    }
    
    // Alvin Li for Libaray A
    var min_range_a = 1;
    var max_range_a = 300;

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

    $('#btn_library_a').on('click', function () {
        $.get("http://qianzi.ca/wp-content/uploads/qianzi/Library/library_a.json", function(response) {
            var library_a_allwords = response;
            $("#library_a_answers").empty();
            $("#library_a_answers").hide();
            $("#library_a_playlist").empty();
            var used_a = [];
            for (i = 1; i <= library_a_words; i++) {
                $("#library_a_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/N/N" + i + ".mp3\" type=\"audio/mpeg\"></audio>");
                var word_num_a = RandomInt(min_range_a, max_range_a, used_a);
                used_a.push(word_num_a);
                
                for (j = 1; j <= library_a_repeat; j++) {
                    $("#library_a_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/A/A" + word_num_a + ".mp3\" type=\"audio/mpeg\"></audio>");
                }   
                $("#library_a_answers").append("<h3>" + i + ". " + library_a_allwords[word_num_a - 1] + "</h3>");
            }

            //Number audio delay
            var i = 0;
            setTimeout(function() {
                $("audio")[0].play();
            }, base_interval);
            i = i + 1;
            
            $("audio").on("ended", function() {
                var audio = $(this).next("audio");
                if (audio.length) {
                    if ((i % (library_a_repeat + 1)) == 1) {
                        setTimeout(function() {
                            audio.get(0).play();
                        }, base_interval);
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


    // David Wang for Library B
	var min_int_b = 1;
	var max_int_b = 600;
	
	var library_b_words = 10;
	$("#library_b_words").on("change", function() {
        library_b_words = parseInt(this.value);
		// console.log(library_b_words);
    });
    
    var library_b_interval = 10000;
	$("#library_b_interval").on("change", function() {
        library_b_interval = parseInt(this.value);
		// console.log(library_b_interval);
    });
    
    var library_b_repeat = 1;
	$("#library_b_repeat").on("change", function() {
		library_b_repeat = parseInt(this.value);
		// console.log(library_b_repeat);
	});
	
	$("#slider-range-b").slider({
		range: true,
		min: 1,
		max: 600,
		values: [ 1, 600 ],
		slide: function(event, ui) {
			$("#amount_b").val( "  " + ui.values[0] + " - " + ui.values[1]);
			min_range_b = ui.values[0]; 
			max_range_b = ui.values[1];
		}
	});
	
	// Click the "Play" button start to play
	$("#library_b_btn").on("click", function() {
		$.get("http://qianzi.ca/wp-content/uploads/qianzi/Library/library_b.json", function(response) {
			var library_b_allwords = response;
			$("#library_b_answers").empty();
			$("#library_b_answers").hide();
			$("#library_b_playlist").empty();
			var used_b = [];
			for (i = 1; i <= library_b_words; i++) {
				$("#library_b_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/N/N" + i + ".mp3\" type=\"audio/mpeg\"></audio>");
				word_num_b = RandomInt(min_int_b, max_int_b, used_b)
				used_b.push(word_num_b);
				$("#library_b_answers").append("<p>" + i + ". " + library_b_allwords[word_num_b - 1] + "</p>");
				for (j = 1; j <= library_b_repeat; j++) {
					$("#library_b_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/B/B" + word_num_b + ".mp3\" type=\"audio/mpeg\"></audio>");
				}
			}
			
			var i = 0;
			setTimeout(function() {
				$("audio")[0].play();
			}, base_interval);
			i = i + 1;
			
			// Play audio files
			$("audio").on("ended", function() {
				var audio = $(this).next("audio");
				if (audio.length) {
					if ((i % (library_b_repeat + 1)) == 1) {
						setTimeout(function() {
							audio.get(0).play();
						}, base_interval);
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
    
    var library_c_words = 10;
    $("#library_c_words").on("change", function() {
        library_c_words = parseInt(this.value);
        // console.log(library_c_words);
    });
    
    var library_c_interval = 10000;
    $("#library_c_interval").on("change", function() {
        library_c_interval = parseInt(this.value);
        // console.log(library_c_interval);
    });
    
    var library_c_repeat = 1;
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
        
        $.get("http://qianzi.ca/wp-content/uploads/qianzi/Library/library_c.json", function(response) {
            var library_c_allwords = response;
            $("#library_c_answers").empty();
            $("#library_c_answers").hide();
            $("#library_c_playlist").empty();
            var used_c = [];
            for (i = 1; i <= library_c_words; i++) {
                $("#library_c_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/N/N" + i + ".mp3\" type=\"audio/mpeg\"></audio>");
                word_num_c = RandomInt(min_int_c, max_int_c, used_c)
                used_c.push(word_num_c)
                $("#library_c_answers").append("<p>" + i + ". " + library_c_allwords[word_num_c - 1] + "</p>");
                for (j = 1; j <= library_c_repeat; j++) {
                    $("#library_c_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/C/C" + word_num_c + ".mp3\" type=\"audio/mpeg\"></audio>");
                }
            }

            var i = 0;
            setTimeout(function() {
                $("audio")[0].play();
            }, base_interval);
            i = i + 1;

            // Play audio files
            $("audio").on("ended", function() {
                var audio = $(this).next("audio");
                if (audio.length) {
                    if ((i % (library_c_repeat + 1)) == 1) {
                        setTimeout(function() {
                            audio.get(0).play();
                        }, base_interval);
                    } else {
                        setTimeout(function() {
                            audio.get(0).play();
                        }, library_c_interval);
                    }
                    i = i + 1;
                } else {
                    $("#library_c_answers").show();
                }
            });
        });
    });


    // Library D
    var min_int_d = 1;
    var max_int_d = 1100;
    
    var library_d_words = 10;
    $("#library_d_words").on("change", function() {
        library_d_words = parseInt(this.value);
        // console.log(library_d_words);
    });
    
    var library_d_interval = 10000;
    $("#library_d_interval").on("change", function() {
        library_d_interval = parseInt(this.value);
        // console.log(library_d_interval);
    });
    
    var library_d_repeat = 1;
    $("#library_d_repeat").on("change", function() {
        library_d_repeat = parseInt(this.value);
        // console.log(library_d_repeat);
    });
    
    $("#slider-range-c").slider({
        range: true,
        min: 1,
        max: 400,
        values: [ 1, 400 ],
        slide: function(event, ui) {
            $("#amount_d").val( "  " + ui.values[0] + " - " + ui.values[1]);
            min_int_d = ui.values[0]; 
            max_int_d = ui.values[1];
        }
    });
    
    // Click the "Play" button start to play
    $("#library_d_btn").on("click", function() {
        
        $.get("http://qianzi.ca/wp-content/uploads/qianzi/Library/library_d.json", function(response) {
            var library_d_allwords = response;
            $("#library_d_answers").empty();
            $("#library_d_answers").hide();
            $("#library_d_playlist").empty();
            var used_d = [];
            for (i = 1; i <= library_d_words; i++) {
                $("#library_d_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/N/N" + i + ".mp3\" type=\"audio/mpeg\"></audio>");
                word_num_d = RandomInt(min_int_d, max_int_d, used_d)
                used_d.push(word_num_d)
                $("#library_d_answers").append("<p>" + i + ". " + library_d_allwords[word_num_d - 1] + "</p>");
                for (j = 1; j <= library_d_repeat; j++) {
                    $("#library_d_playlist").append("<audio src=\"http://qianzi.ca/wp-content/uploads/qianzi/Library/C/C" + word_num_d + ".mp3\" type=\"audio/mpeg\"></audio>");
                }
            }

            var i = 0;
            setTimeout(function() {
                $("audio")[0].play();
            }, base_interval);
            i = i + 1;

            // Play audio files
            $("audio").on("ended", function() {
                var audio = $(this).next("audio");
                if (audio.length) {
                    if ((i % (library_d_repeat + 1)) == 1) {
                        setTimeout(function() {
                            audio.get(0).play();
                        }, base_interval);
                    } else {
                        setTimeout(function() {
                            audio.get(0).play();
                        }, library_d_interval);
                    }
                    i = i + 1;
                } else {
                    $("#library_d_answers").show();
                }
            });
        });
    });
});