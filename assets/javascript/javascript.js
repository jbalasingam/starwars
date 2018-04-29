$(document).ready(function () {

var maul;
var luke;
var sidious;
var kanobi;

var me;
var Foe;

var attackers = [];

begin();

//function sets the variable values as well as moving the thumbnails based on selection
function begin() {
    maul = {
        id: 0,
        name: ".maul",
        Power: 120,
        baseAttack:10,
        attackPower: 10,
        counterAttackPower: 8,
    }

    luke = {
        id: 1,
        name: ".luke",
        Power: 100,
        baseAttack: 8,
        attackPower: 8,
        counterAttackPower: 5,
    }

    sidious = {
        id: 2,
        name: ".sidius",
        Power: 150,
        baseAttack:9,
        attackPower: 9,
        counterAttackPower: 10,
    }

    kanobi = {
        id: 3,
        name: ".kanobi",
        Power: 100,
        baseAttack: 12,
        attackPower: 12,
        counterAttackPower: 12,
    }

		// reset character selected
		me = null;

		// reset enemy selected
        Foe = null;

		// clears all character divs
		$("#enemySpace").empty();
		$("#mine").empty();
		$("#Foe").empty();
		//$("#status").empty();
        
var characters = [maul, luke, sidious, kanobi];    
var attackers = [];

$(".img-thumbnail").on("click", function() {
    // when character has been selected
    if(me === null) {
        //get id of character selected
        var ID = parseInt($(this).attr("id"));

        me = characters[ID];

        // loop through character array
        $.each(characters, function(index, me) {
            // add unselected characters to enemySpace array
            if(me.id !== ID) {

                attackers.push(me);
               // mine.push(me);
                $("#"+me.id).removeClass("neutral attacker").appendTo($(".enemySpace"));
                $("#"+me.id).addClass("defense");
            } else {
                $("#"+me.id).removeClass("neutral defense").appendTo($('.mine'));
            }
            
        });    	
    }
    
    $(".defense").on("click", function() {
        
                if (Foe === null) {
                    var ID = parseInt($(this).attr("id"));
                    Foe = characters[ID];
                    $("#"+Foe.id).appendTo($(".currentAttackSpace"));
                    $("#"+Foe.id).addClass("currentAttacker").removeClass("counterAttacker defense");
                } //end if statement

    });//end defense function

});
} //end begin function
console.log(attackers);
})//document ready//
