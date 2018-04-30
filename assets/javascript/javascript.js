$(document).ready(function () {

    var maul;
    var luke;
    var sidious;
    var kanobi;

    var myCharacter;
    var Foe = null;
    var attackers = [];
    var characters = [];

    
    //function sets the variable values as well as moving the thumbnails based on selection
    function begin() {
        maul = {
            id: 0,
            name: "Maul",
            Power: 120,
            attackPower: 10,
            counterAttackPower: 8
        }

        luke = {
            id: 1,
            name: "Luke",
            Power: 100,
            attackPower: 8,
            counterAttackPower: 5
        }

        sidious = {
            id: 2,
            name: "Sidius",
            Power: 150,
            attackPower: 9,
            counterAttackPower: 10
        }

        kanobi = {
            id: 3,
            name: "Kanobi",
            Power: 100,
            attackPower: 12,
            counterAttackPower: 12
        }

            // reset variables
            myCharacter = null;
            Foe = null;
            characters = [maul, luke, sidious, kanobi];    
            attackers = [];

            // clears all character divs
            $("#enemySpace").empty();
            $("#mine").empty();
            $("#Foe").empty();
            $("#status").empty();
            

    $(".img-thumbnail").on("click", function() {
        // when character has been selected
        if(myCharacter === null) {
            
            //get id of character selected
            var ID = parseInt($(this).attr("id"));

            myCharacter = characters[ID];

            // loop through character array
            $.each(characters, function(index,myCharacter) {
                // add unselected characters to enemySpace array
                if(myCharacter.id !== ID) {
                    attackers.push(myCharacter);
                    $("#"+myCharacter.id).removeClass("neutral attacker").appendTo($(".enemySpace"));
                    $("#"+myCharacter.id).addClass("defense");
                } else {
                    $("#"+myCharacter.id).removeClass("neutral defense").appendTo($('.mine'));
                }
                
            });//end loop for myCharacter   	
        
        
            $(".defense").on("click", function() {
                
                        if (Foe === null) {
                            var ID = parseInt($(this).attr("id"));
                            Foe = characters[ID];
                            $("#"+Foe.id).appendTo($(".currentAttackSpace"));
                            $("#"+Foe.id).addClass("currentAttacker").removeClass("counterAttacker defense");
                        } //end if statemyCharacternt
            });       
        }//end defense function
     
     });
     
      $(".reset").hide();
} //end begin function

//start game
begin();



    //-----------------------------------------------------------------------------------------------------//
    //Start the attack logic on clicking the attack button
    $(".attack").on("click", function() {
        if(myCharacter !== null && myCharacter.Power > 0 && attackers.length > 0) {
            console.log("Attack button works");
            // created variable to store game status messages
            var message = "";

            // when defender has been selected
            if(Foe !== null) {

                // reduce the attackers power by the attackpower of the your character
                Foe.Power -= myCharacter.attackPower;
                message += myCharacter.name + " attacked " + Foe.name + " and caused a " + myCharacter.attackPower + " point damage.<br>";

                console.log(message);
                // update the attackers power in the image caption.
                $("."+Foe.id + "Power").html(Foe.Power);

                //reduce your character's power by the counterattact power of your foe
                myCharacter.Power -= Foe.counterAttackPower;
				message += Foe.name + " counter-attacked and caused a " + Foe.counterAttackPower + " point damage.<br>";
                
                console.log(message);
				// update your character's power
				$("."+myCharacter.id + "Power").html(myCharacter.Power);

                // create something here with if statements depending on the first person to run out of points

                // you only win if there are no attackers left in the array

            };
            $(".message").html(message);
        }
    });//end attack on.click


})//document ready//
