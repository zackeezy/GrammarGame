"use strict"

// Sentences and the corresponding answers that fill in the blank
var sentences = [
				{
					"question":"I have nothing but your _ in mind.",
					"options":["well-being","(well being)","<em>well being<em>"],
					"answer":"well-being"
				},
				{
					"question":"I have been reading_by George R.R. Martin.",
					"options":[" Game-of-Thrones "," (Game of Thrones) "," <em>Game of Thrones</em> "],
					"answer":" <em>Game of Thrones</em> "
				},
				{
					"question":"_by Suzanne Collins is an excellent read.",
					"options":["The-Hunger-Games ","<em>The Hunger Games </em>","(The Hunger Games) "],
					"answer":"<em>The Hunger Games </em>"
				},
				{
					"question":"The only newspaper she typically reads is_.",
					"options":[" The-Christian-Science-Monitor","<em> The Christian Science Monitor</em>"," (The Christian Science Monitor)"],
					"answer":"<em> The Christian Science Monitor</em>"
				},
				{
					"question":"The cruise ship_was sunk in spite of claims it couldn't be.",
					"options":[" (Titanic) ",", <em>Titanic</em>, ","-Titanic "],
					"answer":", <em>Titanic</em>, "
				},
				{
					"question":"The dress she wore to the Christmas party is a serious fashion_.",
					"options":["faux-pas","<em> faux pas</em>"," (faux pas)"],
					"answer":"<em> faux pas</em>"
				},
				{
					"question":"He finally answered_that he did not understand the question.",
					"options":[" <em>after taking five minutes to think</em> "," after-taking-five-minutes-to-think "," (after taking five minutes to think) "],
					"answer":" (after taking five minutes to think) "
				},
				{
					"question":"He gave me a nice bonus_.",
					"options":[" ($500)"," <em>$500</em>","-$500"],
					"answer":" ($500)"
				},
				{
					"question":"The University of Georgia_is where my mom went to school.",
					"options":[" <em>UGA</em> ","-UGA "," (UGA) "],
					"answer":" (UGA) "
				},
				{
					"question":"Springfield has _ charm.",
					"options":["little-town","<em>little town<em>","(little town)"],
					"answer":"little-town"
				},
				{
					"question":"I wouldn't touch you with a _ pole.",
					"options":["thirty-nine-and-one-half-foot","(thirty nine and one half foot)","<em>thirty nine and one half foot</em>"],
					"answer":"thirty-nine-and-one-half-foot"
				},
				{
					"question":"I did not achieve this position in life by having some _ punk leave my cheese out in the wind.",
					"options":["snot-nosed","(snot nosed)","<em>snot nosed</em>"],
					"answer":"snot-nosed"
				},
				{
					"question":"Lord Emsworth belonged to the _ school of hosts.",
					"options":["people-like-to-be-left-alone-to-amuse-themselves-when-they-come-to-a-place","(people like to be left alone to amuse themselves when they come to a place)","<em>people like to be left alone to amuse themselves when they come to a place</em>"],
					"answer":"people-like-to-be-left-alone-to-amuse-themselves-when-they-come-to-a-place"
				},
				{
					"question":"There are schools of thought that believe it to be true _.",
					"options":["(albeit, not popular ones)",", <em>albeit, not popular ones</em>","albeit-not-popular-ones"],
					"answer":"(albeit, not popular ones)"
				}/*,
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				},
				{
					"question":"",
					"options":["","",""],
					"answer":""
				}*/
				];
/**Begin format**
	{"Sample Sentence with a_.":{
		"options":["-blank", " (blank)", " <em>blank</em>"],
		"answer":" <em>blank</em>
	}}
**End format**/

// responses for when someone is wrong in hard mode
var incorrect = [
	"Next time try Weenie Hut Jr., kid.",
	"What you’ve just said is one of the most insanely idiotic things I have ever heard. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points, and may God have mercy on your soul.",
	"You should have phoned a friend.",
	"We're sorry, but your princess is in another castle.",
	"If you were wondering if you'd make it as a psychic because of your great guessing skills, then the answer is no.",
	"Don't take those guessing skills to Vegas.",
	"If the fate of the world depended on you getting all the answers right, we'd all be dead right about now.",
	"Some of the greatest historical leaders didn't know how to read or write, so don't worry; there's hope for you yet!",
	"You really -dashed- off some of those answers too fast!",
	"Your answers make me colon open parenthesis.",
	"Keep trying",
	"I am disappoint.",
	"D'oh",
	"I'm gonna go chug a gallon of Bleach.  Thanks for wasting my time, boys.",
	"It's time to stop!",
	"Oak's words echoed... There's a time and place for everything, but not now.",
	"No sir, I don't like it",
	"Very impressive, Ed Boy. It is a shame you fail with such disgrace at your pitiful attempt to prove your sorry and feeble effort at becoming an Urban Ranger.",
	"Rolf would not line Wilfred's plumbing pit with such dribble.",
	"R'uh r'oh Raggie",
	"<img src=\"./Images/bLutSUl.gif\" />",
	"<img src=\"./Images/giphy_(5).gif\" />",
	"<img src=\"./Images/giphy_(6).gif\" />",
	"<img src=\"./Images/giphy_(8).gif\" />",
	"I find your lack of grammar... disturbing.",
	"Aw, too bad!",
	"<img src=\"./Images/giphy_(11).gif\" />"
];

// responses for when someone is right in hard mode 
var right = [
	"Uh, I'm not an expert in sentence structure, but let me give a buddy of mine a call. I'm pretty sure this sentence is worth one point, but I'm not sure.",
	"Your answers make me colon close parenthesis.",
	"Don't cry because it's over, smile because I'm moist. -Mahatma Ghandi",
	"Thats the way!",
	"Way to go!",
	"Great Scott!",
	"Hey that's mildly adequate!",
	"Hey that's moldy adequate!",
	"Hey, that's pretty good!",
	"Your garden is overgrown and your cucumbers are soft!",
	"Just like the gypsy woman said!",
	"<img src=\"./Images/giphy.gif\" />",
	"<img src=\"./Images/old-spice-guy-nodding.gif\" />",
	"<img src=\"./Images/giphy_(1).gif\" />",
	"<img src=\"./Images/giphy_(2).gif\" />",
	"<img src=\"./Images/giphy_(3).gif\" />",
	"<img src=\"./Images/giphy_(4).gif\" />",
	"<img src=\"./Images/giphy_(7).gif\" />",
	"<img src=\"./Images/giphy_(9).gif\" />",
	"<img src=\"./Images/giphy_(10).gif\" />"
];

// The question(s) initializer for when the mode is changed, since 
// harder modes have more questions than easier modes.
var questions_initialState = "<p id=\"question\"></p>\n<ul id=\"options\" class=\"list-unstyled\">\n<li> <label><input type='radio' id=\"option_1\" value=\"option_1\" name=\"options\" /></label> </li>\n<li> <label><input type='radio' id=\"option_2\" value=\"option_2\" name=\"options\" /></label> </li>\n<li> <label><input type='radio' id=\"option_3\" value=\"option_3\" name=\"options\" /></label> </li>\n</ul>";

// Prevents anything from actually happening until the DOM is loaded.
document.addEventListener("DOMContentLoaded",function(){
	document.getElementById("play").addEventListener("click",start_game);
	
	document.getElementById("mode_change").addEventListener("click",mode_change);
	
	document.getElementById("reset").addEventListener("click",reset_game);
	
	var form = document.getElementById("game_form");
	if (form.attachEvent) {
		form.attachEvent("submit", processForm);
	} else {
		form.addEventListener("submit", processForm);
	}
});

// Starts the game by switching the home page to hidden and the 
// game board to visible and checking the mode to initialize the board.
function start_game(){
	document.querySelector("div[class=\"home_page\"]").style.visibility = "hidden";
	document.querySelector("div[class=\"game\"]").style.visibility = "visible";
	
	var modeObj = document.getElementById("mode");
	var mode = document.getElementById("mode").options[modeObj.selectedIndex];
	
	initialize_board(mode);
}

// The function used to tell if the answer(s) are correct or incorrect. 
function processForm(e) {
	if (e.preventDefault) e.preventDefault();
	var modeObj = document.getElementById("mode");
	var mode = document.getElementById("mode").options[modeObj.selectedIndex];;
	
	var game_form = document.getElementById("game_form");
	var form_response = document.getElementById("form_response");
	
	if(mode.value == "normal"){
		var obj = findElementByQuestion(document.getElementById("question").innerHTML);
		if(document.querySelector("input[name = 'options']:checked").value != obj["answer"]){
			document.getElementById("form_response").innerHTML = "Whoops! Try Again (:";
		}
		else{
			document.getElementById("form_response").innerHTML = "Excellent :D";
		}
	}
	else if(mode.value == "medium"){
		var obj = findElementByQuestion(document.getElementById("question").innerHTML);
		var wrong = 0;
		if(document.querySelector("input[name = 'options']:checked").value != obj["answer"]){
			wrong++;
		}
		
		for(var i = 1; i < 10; i++){
			var obj = findElementByQuestion(document.getElementById("question" + i).innerHTML);
			if(document.querySelector("input[name = 'options" + i + "']:checked").value != obj["answer"]){
				wrong++;
			}
		}
		document.getElementById("form_response").innerHTML = (10 - wrong) + "/10 correct.<br><br>";
		if(wrong == 0){
			document.getElementById("form_response").innerHTML += "None were wrong, congrats :D";
		}
		else{
			document.getElementById("form_response").innerHTML += "Scuuuuud. Try again.";
		}
	}
	else if(mode.value == "hard"){
		var obj = findElementByQuestion(document.getElementById("question").innerHTML);
		var wrong = 0;
		if(document.querySelector("input[name = 'options']:checked").value != obj["answer"]){
			wrong++;
		}
		
		for(var i = 1; i < sentences.length; i++){
			var obj = findElementByQuestion(document.getElementById("question" + i).innerHTML);
			if(document.querySelector("input[name = 'options" + i + "']:checked").value != obj["answer"]){
				wrong++;
			}
		}
		if(wrong == 0){
			document.getElementById("form_response").innerHTML = right[Math.floor(Math.random() * right.length)];
		}
		else{
			document.getElementById("form_response").innerHTML = incorrect[Math.floor(Math.random() * incorrect.length)];
		}
	}
	
	return false;
}

// If the modes are medium or hard, this function adds the extra
// questions to the board, then for any mode, it fills th question(s) 
// and answers with their values. 
function initialize_board(mode){
	var question = document.getElementById("question");
	var option_1 = document.getElementById("option_1");
	var option_2 = document.getElementById("option_2");
	var option_3 = document.getElementById("option_3");
	sentences = shuffle(sentences);
	if(mode.value == "normal"){
		question.innerHTML = sentences[0]["question"];
		option_1.insertAdjacentHTML("afterEnd", sentences[0]["options"][0]);
		option_1.value = sentences[0]["options"][0];
		option_2.insertAdjacentHTML("afterEnd", sentences[0]["options"][1]);
		option_2.value = sentences[0]["options"][1];
		option_3.insertAdjacentHTML("afterEnd", sentences[0]["options"][2]);
		option_3.value = sentences[0]["options"][2];
	}
	else if(mode.value == "medium"){
		question.innerHTML = sentences[0]["question"];
		option_1.value = sentences[0]["options"][0];
		option_1.insertAdjacentHTML("afterEnd", sentences[0]["options"][0]);
		option_2.value = sentences[0]["options"][1];
		option_2.insertAdjacentHTML("afterEnd", sentences[0]["options"][1]);
		option_3.value = sentences[0]["options"][2];
		option_3.insertAdjacentHTML("afterEnd", sentences[0]["options"][2]);
		for(var i = 1; i < 10; i ++){
			var game_board = document.getElementById("questions");
			var append = "<br><br>";
			
			append = append + "<p id=\"question" + i + "\"></p>";
			
			append = append + "\n<ul id=\"options\" class=\"list-unstyled\">\n";
			
			append = append + "<li> <label><input type='radio' id=\"option_1_" + i + "\" value=\"option_1_" + i + "\" name=\"options" + i + "\" /></label> </li>\n<li> <label><input type='radio' id=\"option_2_" + i + "\" value=\"option_2\" name=\"options" + i + "\" /></label> </li>\n<li> <label><input type=\"radio\" id=\"option_3_" + i + "\" value=\"option_3\" name=\"options" + i + "\" /></label> </li>";
			
			append = append + "\n</ul>\n";
			
			game_board.innerHTML = game_board.innerHTML + append;
			
			var question_ = document.getElementById("question" + i);
			var option_1_ = document.getElementById("option_1_" + i);
			var option_2_ = document.getElementById("option_2_" + i);
			var option_3_ = document.getElementById("option_3_" + i);
			
			question_.innerHTML = sentences[i]["question"];
			option_1_.value = sentences[i]["options"][0];
			option_1_.insertAdjacentHTML("afterEnd",sentences[i]["options"][0]);
			option_2_.value = sentences[i]["options"][1];
			option_2_.insertAdjacentHTML("afterEnd",sentences[i]["options"][1]);
			option_3_.value = sentences[i]["options"][2];
			option_3_.insertAdjacentHTML("afterEnd",sentences[i]["options"][2]);
		}
	}
	else if(mode.value == "hard"){
		question.innerHTML = sentences[0]["question"];
		option_1.value = sentences[0]["options"][0];
		option_1.insertAdjacentHTML("afterEnd", sentences[0]["options"][0]);
		option_2.value = sentences[0]["options"][1];
		option_2.insertAdjacentHTML("afterEnd", sentences[0]["options"][1]);
		option_3.value = sentences[0]["options"][2];
		option_3.insertAdjacentHTML("afterEnd", sentences[0]["options"][2]);
		for(var i = 1; i < sentences.length; i ++){
			var game_board = document.getElementById("questions");
			var append = "<br><br>";
			
			append = append + "<p id=\"question" + i + "\"></p>";
			
			append = append + "\n<ul id=\"options\" class=\"list-unstyled\">\n";
			
			append = append + "<li> <label><input type='radio' id=\"option_1_" + i + "\" value=\"option_1_" + i + "\" name=\"options" + i + "\" /></label> </li>\n<li> <label><input type='radio' id=\"option_2_" + i + "\" value=\"option_2\" name=\"options" + i + "\" /></label> </li>\n<li> <label><input type=\"radio\" id=\"option_3_" + i + "\" value=\"option_3\" name=\"options" + i + "\" /></label> </li>";
			
			append = append + "\n</ul>\n";
			
			game_board.innerHTML = game_board.innerHTML + append;
			
			var question_ = document.getElementById("question" + i);
			var option_1_ = document.getElementById("option_1_" + i);
			var option_2_ = document.getElementById("option_2_" + i);
			var option_3_ = document.getElementById("option_3_" + i);
			
			question_.innerHTML = sentences[i]["question"];
			option_1_.value = sentences[i]["options"][0];
			option_1_.insertAdjacentHTML("afterEnd",sentences[i]["options"][0]);
			option_2_.value = sentences[i]["options"][1];
			option_2_.insertAdjacentHTML("afterEnd",sentences[i]["options"][1]);
			option_3_.value = sentences[i]["options"][2];
			option_3_.insertAdjacentHTML("afterEnd",sentences[i]["options"][2]);
		}
	}
}

// I can't pull items from the array based on what their 
// question was, so this is a function to do that. 
function findElementByQuestion(q){
	for(var obj in sentences){
		if (q == sentences[obj]["question"]){
			return sentences[obj];
		}
	}
	return undefined;
}

// A function to randomize the order of the array.
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//changes the mode of the game.
function mode_change(){
	document.getElementById("questions").innerHTML = questions_initialState;
	start_game();
	document.getElementById("form_response").innerHTML = "";
}

//returns teh game board to its original state and hides the board and reveals the home
//page. 
function reset_game(){
	document.getElementById("questions").innerHTML = questions_initialState;
	document.querySelector("div[class=\"home_page\"]").style.visibility = "visible";
	document.querySelector("div[class=\"game\"]").style.visibility = "hidden";
	document.getElementById("form_response_container").innerHTML = "<span class=\"h3\">Feedback:</span><br /><samp id=\"form_response\"></samp>";
}