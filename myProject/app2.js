$(document).ready(function() {

    var root = "A";
    var second = "B";
    var third = "CS";
    var fourth = "D";
    var fifth = "E";
    var sixth = "FS";
    var seventh = "GS"
	
	if (root.length == 2){rootName = root.replace('S',"#")} else { rootName = root};
	if (second.length == 2){secondName = second.replace('S',"#")} else { secondName = second};
	if (third.length == 2){thirdName = third.replace('S',"#")} else { thirdName = third};
	if (fourth.length == 2){fourthName = fourth.replace('S',"#")} else { fourthName = fourth};
	if (fifth.length == 2){fifthName = fifth.replace('S',"#")} else { fifthName = fifth};
	if (sixth.length == 2){sixthName = sixth.replace('S',"#")} else { sixthName = sixth};
	if (seventh.length == 2){seventhName = seventh.replace('S',"#")} else { seventhName = seventh};
	
	// This function is called each time a new chord is selected, to first reset the note backgrounds before the next chord displays
    function setToWhite(){
        $('.note').css({'background-color':'transparent','border-radius':'48%','height':'35px'});
        $('.'+root).css({'background-color':'transparent','border-radius':'48%','height':'35px'});
        $('.'+second).css({'background-color':'transparent','border-radius':'48%','height':'35px'});
        $('.'+third).css({'background-color':'transparent','border-radius':'48%','height':'35px'});
        $('.'+fourth).css({'background-color':'transparent','border-radius':'48%','height':'35px'});
        $('.'+fifth).css({'background-color':'transparent','border-radius':'48%','height':'35px'});
        $('.'+sixth).css({'background-color':'transparent','border-radius':'48%','height':'35px'});
        $('.'+seventh).css({'background-color':'transparent','border-radius':'48%','height':'35px'});
    }

	// Random necessary values for functions below, each of which needs an initial state.
    var current = 0;
    var seven = 0;
    var colorToggle = 1;
    var practicing = 0;

	// Runs a loop through all chords, with a metronome / beat function from the timer() function.
	// ISSUE - Currently stuck on implementing an OFF switch for the timer.  -- clearInterval is the command, but it isn't being recognized.
	// Maybe dig into the console to see what's happening here.
    
    var chordChanges = null;
    $('#practice').click(function(){
        if (practicing ==  0){
			var pChord = 2;
			timer();
			chordOne();
			practicing = 1;
       	    chordChanges = setInterval(function () {
            if (pChord == 1) {
                chordOne();
                pChord=2;
            }   
            else if (pChord == 2){
                chordTwo();
                pChord=3;
            }
            else if (pChord == 3){
                chordThree();
                pChord=4;
            }
            else if (pChord == 4){
                chordFour();
                pChord=5;
            }
            else if (pChord == 5){
                chordFive();
                pChord=6;
            }
            else if (pChord == 6){
                chordSix();
                pChord=7;
            }
            else if (pChord == 7){
                chordSeven();
                pChord=1;
            }
        }, 8000);
    }
    else {
        practicing = 0;
        clearInterval(chordChanges);
        console.log('stop practicing')
    }
})
	// Sets the pace for the "Practice" function.  clearInterval isn't working as a way to STOP the timer.
	// Also triggers the Kick and Hat sounds which act as a metronome.
    function timer(){
        if (practicing == 0){
        var time = 7;
        var audio = document.getElementById('audio-kick');
        audio.play();
        console.log('timer');
        var timeAudio = setInterval(function(){
            $('#timer').html(time);
            time--;
            if (time == 0){
                time = 8;
            }
            if (time % 2 == 0) {
            var audio = document.getElementById('audio-hat');
            audio.play();
            } else {
                var audio = document.getElementById('audio-kick');
            audio.play();
            }
        },1000);
    } else {
	console.log("clear!");
        clearInterval(timeAudio);
        timeAudio = 0;
    }} 

	// Alternates between a color background with note names, and a white background without note names
    $('#color-toggle').click(function(){
        if (colorToggle == 0){
            $('.guitar-neck').css('background-image','linear-gradient(burlywood, #CC8B69)')
            colorToggle = 1;
        } else {
            $('.guitar-neck').css({'background-image':'none','background-color':'rgb(255, 255, 255)'})
            colorToggle = 0;
    }})

	// Adds the seventh note to the displayed chord
    $('#seventh').click(function (){
        clearChordColors();
        if (seven == 0){
        $('#seventh').css('background-color','green');
        setToWhite();
        scaleBackground();
        seven = 1;
        $('#chord-flavor').html(`<h4 class='#chord-flavor'>Choose a Chord</h4`);        }
        else {
            $('#seventh').css('background-color','white');
        setToWhite();
        scaleBackground();
        seven = 0;
        $('#chord-flavor').html(`<h4 class='#chord-flavor'>Choose a Chord</h4`);
        }
    })

	// Used to reset the colors of the chord-selector buttons
    function clearChordColors(){
        $('#i-chord').css('background-color','#F0F0F0');
        $('#ii-chord').css('background-color','#F0F0F0');
        $('#iii-chord').css('background-color','#F0F0F0');
        $('#iv-chord').css('background-color','#F0F0F0');
        $('#v-chord').css('background-color','#F0F0F0');
        $('#vi-chord').css('background-color','#F0F0F0');
        $('#vii-chord').css('background-color','#F0F0F0');
    }
    
    // Loads the current scale in full each time the page is reloaded
	$('.'+root).css({'background-color':'black','border-radius':'48%','border-color':'green','height':'35px'});
	$('.'+second).css({'background-color':'black','border-radius':'48%','height':'35px'});
	$('.'+third).css({'background-color':'black','border-radius':'48%','height':'35px'});
	$('.'+fourth).css({'background-color':'black','border-radius':'48%','height':'35px'});
	$('.'+fifth).css({'background-color':'black','border-radius':'48%','height':'35px'});
	$('.'+sixth).css({'background-color':'black','border-radius':'48%','height':'35px'});
	$('.'+seventh).css({'background-color':'black','border-radius':'48%','height':'35px'});
	// Same as above, except used in functions between chords
	function scaleBackground (){
		$('.'+root).css({'background-color':'black','border-radius':'48%','height':'35px'});
		$('.'+second).css({'background-color':'black','border-radius':'48%','height':'35px'});
		$('.'+third).css({'background-color':'black','border-radius':'48%','height':'35px'});
		$('.'+fourth).css({'background-color':'black','border-radius':'48%','height':'35px'});
		$('.'+fifth).css({'background-color':'black','border-radius':'48%','height':'35px'});
		$('.'+sixth).css({'background-color':'black','border-radius':'48%','height':'35px'});
		$('.'+seventh).css({'background-color':'black','border-radius':'48%','height':'35px'});
	}
	// Attempting to replace all 7 chord functions (below) with one master - in progress (unused until completion)
	// Changed Notes to their variables, need to see how to print the Root variable as the Chord name.
    function chord (root,third,fifth,seventh){
        if (current != 1){
            setToWhite();
            current = 1;
            clearChordColors();
            $('#i-chord').css('background-color','#dac399');
            $('.'+root).css({'background-color':'red','border-radius':'48%','height':'35px'});
            $('.'+third).css({'background-color':'black','border-radius':'48%','height':'35px'});
            $('.'+fifth).css({'background-color':'blue','border-radius':'48%','height':'35px'});
            $('#chord-flavor').html(`<h4 class='#chord-flavor'>C Major</h4`);
            if ($('#seventh').css('background-color')== 'rgb(0, 128, 0)'){
                $('.'+seventh).css({'background-color':'green','border-radius':'48%','height':'35px'})
            }
        } else {
            $('#chord-flavor').html(`<h4 class='#chord-flavor'>Choose a Chord</h4`);            
            setToWhite();
            clearChordColors();
            current = 0;
        }}

	
	// The following 7 functions are what selects the visible chord on Click.  
    function chordOne (){
        if (current != 1){
            setToWhite();
            current = 1;
            clearChordColors();
            $('#i-chord').css('background-color','#dac399');
            $('.'+root).css({'background-color':'red','border-radius':'48%','height':'35px'});
            $('.'+third).css({'background-color':'black','border-radius':'48%','height':'35px'});
            $('.'+fifth).css({'background-color':'blue','border-radius':'48%','height':'35px'})
            $('#chord-flavor').html(`<h4 class='#chord-flavor'>${rootName} Major</h4`);
            if ($('#seventh').css('background-color')== 'rgb(0, 128, 0)'){
                $('.'+seventh).css({'background-color':'green','border-radius':'48%','height':'35px'})
                        $('#chord-flavor').html(`<h4 class='#chord-flavor'>${rootName} Major 7th</h4`);
            }
        } else {
            $('#chord-flavor').html(`<h4 class='#chord-flavor'>Choose a Chord</h4`);            
            setToWhite();
            clearChordColors();
            scaleBackground();
            current = 0;
        }}

        function chordTwo(){
                if (current != 2){
                    setToWhite();
                    current = 2;
                    clearChordColors();
                    $('#ii-chord').css('background-color','#dac399');
                    $('.'+second).css({'background-color':'red','border-radius':'48%','height':'35px'});
                    $('.'+fourth).css({'background-color':'black','border-radius':'48%','height':'35px'});
                    $('.'+sixth).css({'background-color':'blue','border-radius':'48%','height':'35px'})
                    $('#chord-flavor').html(`<h4 class='#chord-flavor'>${secondName} minor</h4`);
                    if ($('#seventh').css('background-color')== 'rgb(0, 128, 0)'){
                        $('.'+root).css({'background-color':'green','border-radius':'48%','height':'35px'})
                        $('#chord-flavor').html(`<h4 class='#chord-flavor'>${secondName} minor 7th</h4`);
                    }
                } else {
                    $('#chord-flavor').html(`<h4 class='#chord-flavor'>Choose a Chord</h4`);            
            setToWhite();
            clearChordColors();
            scaleBackground();
            current = 0;
                }}
        
        function chordThree(){
        if (current != 3){
            setToWhite();
            current = 3;
            clearChordColors();
            $('#iii-chord').css('background-color','#dac399');
            $('.'+third).css({'background-color':'red','border-radius':'48%','height':'35px'});
            $('.'+fifth).css({'background-color':'black','border-radius':'48%','height':'35px'});
            $('.'+seventh).css({'background-color':'blue','border-radius':'48%','height':'35px'})
            $('#chord-flavor').html(`<h4 class='#chord-flavor'>${thirdName} minor</h4`);
            if ($('#seventh').css('background-color')== 'rgb(0, 128, 0)'){
                $('.'+second).css({'background-color':'green','border-radius':'48%','height':'35px'})
                        $('#chord-flavor').html(`<h4 class='#chord-flavor'>${thirdName} minor 7th</h4`);
            }
        } else {
            $('#chord-flavor').html(`<h4 class='#chord-flavor'>Choose a Chord</h4`);            
            setToWhite();
            clearChordColors();
            scaleBackground();
            current = 0;
        }}
        
        function chordFour(){
                if (current != 4){
                    setToWhite();
                    current = 4;
                    clearChordColors();
                    $('#iv-chord').css('background-color','#dac399');
                    $('.'+fourth).css({'background-color':'red','border-radius':'48%','height':'35px'});
                    $('.'+sixth).css({'background-color':'black','border-radius':'48%','height':'35px'});
                    $('.'+root).css({'background-color':'blue','border-radius':'48%','height':'35px'})
                    $('#chord-flavor').html(`<h4 class='#chord-flavor'>${fourthName} Major</h4`);
                    if ($('#seventh').css('background-color')== 'rgb(0, 128, 0)'){
                        $('.'+third).css({'background-color':'green','border-radius':'48%','height':'35px'})
                        $('#chord-flavor').html(`<h4 class='#chord-flavor'>${fourthName} Major 7th</h4`);
                    }
                } else {
                    $('#chord-flavor').html(`<h4 class='#chord-flavor'>Choose a Chord</h4`);            
            setToWhite();
            clearChordColors();
            scaleBackground();
            current = 0;
                }};
        
        function chordFive(){
                if (current != 5){
                    setToWhite();
                    current = 5;
                    clearChordColors();
                    $('#v-chord').css('background-color','#dac399');
                    $('.'+fifth).css({'background-color':'red','border-radius':'48%','height':'35px'});
                    $('.'+seventh).css({'background-color':'black','border-radius':'48%','height':'35px'});
                    $('.'+second).css({'background-color':'blue','border-radius':'48%','height':'35px'})
                    $('#chord-flavor').html(`<h4 class='#chord-flavor'>${fifth} Major</h4`);
                    if ($('#seventh').css('background-color')== 'rgb(0, 128, 0)'){
                        $('.'+fourth).css({'background-color':'green','border-radius':'48%','height':'35px'})
                        $('#chord-flavor').html(`<h4 class='#chord-flavor'>${fifthName} Major 7th</h4`);
                    }
                } else {
                    $('#chord-flavor').html(`<h4 class='#chord-flavor'>Choose a Chord</h4`);            
            setToWhite();
            clearChordColors();
            scaleBackground();
            current = 0;
                }};

        function chordSix(){
                if (current != 6){
                    setToWhite();
                    current = 6;
                    clearChordColors();
                    $('#vi-chord').css('background-color','#dac399');
                    $('.'+sixth).css({'background-color':'red','border-radius':'48%','height':'35px'});
                    $('.'+root).css({'background-color':'black','border-radius':'48%','height':'35px'});
                    $('.'+third).css({'background-color':'blue','border-radius':'48%','height':'35px'})
                    $('#chord-flavor').html(`<h4 class='#chord-flavor'>${sixthName} minor</h4`);
                    if ($('#seventh').css('background-color')== 'rgb(0, 128, 0)'){
                        $('.'+fifth).css({'background-color':'green','border-radius':'48%','height':'35px'})
                        $('#chord-flavor').html(`<h4 class='#chord-flavor'>${sixthName} minor 7th</h4`);
   // Names the seventh chord - add this to other chord names (the line directly above is the 7th modifier)
                    }
                } else {
                    $('#chord-flavor').html(`<h4 class='#chord-flavor'>Choose a Chord</h4`);            
            setToWhite();
            clearChordColors();
            scaleBackground();
            current = 0;
                }};

        function chordSeven(){
                if (current != 7){
                    setToWhite();
                    current = 7;
                    clearChordColors();
                    $('#vii-chord').css('background-color','#dac399');
                    $('.'+seventh).css({'background-color':'red','border-radius':'48%','height':'35px'});
                    $('.'+second).css({'background-color':'black','border-radius':'48%','height':'35px'});
                    $('.'+fourth).css({'background-color':'blue','border-radius':'48%','height':'35px'})
                    $('#chord-flavor').html(`<h4 class='#chord-flavor'>${seventhName} Diminished</h4`);
                    if ($('#seventh').css('background-color')== 'rgb(0, 128, 0)'){
                        $('.'+sixth).css({'background-color':'green','border-radius':'48%','height':'35px'})
                        $('#chord-flavor').html(`<h4 class='#chord-flavor'>${seventhName} Diminished 7th</h4`);
                    }
                } else {
                    $('#chord-flavor').html(`<h4 class='#chord-flavor'>Choose a Chord</h4`);            
            setToWhite();
            clearChordColors();
            scaleBackground();
            current = 0;
                }};

    $('#i-chord').click(function(){
        chordOne();
    });
    $('#ii-chord').click(function(){
        chordTwo();
    }); 
    $('#iii-chord').click(function(){
        chordThree();
    });
    $('#iv-chord').click(function(){
        chordFour();
    });
    $('#v-chord').click(function(){
        chordFive();
    })
    $('#vi-chord').click(function(){
        chordSix();
    })
    $('#vii-chord').click(function(){
        chordSeven();
    })
        



    })
