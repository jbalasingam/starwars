function startGame() {
    maul = {
        id: 0,
        name: ".maul",
        healthPoints: 120,
        baseAttack:10,
        attackPower: 10,
        counterAttackPower: 8,
    }

    luke = {
        id: 1,
        name: ".luke",
        healthPoints: 100,
        baseAttack: 8,
        attackPower: 8,
        counterAttackPower: 5,
    }

    sidious = {
        id: 2,
        name: ".sidius",
        healthPoints: 150,
        baseAttack:9,
        attackPower: 9,
        counterAttackPower: 10,
    }

    kanobi = {
        id: 3,
        name: ".kanobi",
        healthPoints: 100,
        baseAttack: 12,
        attackPower: 12,
        counterAttackPower: 12,
    }

		// reset character selected
		me = null;

		// reset enemies array
		defenders = [];

		// reset enemy selected
        defender = null;

		// clears all character divs
		$("#enemies").empty();
		$("#mine").empty();
		$("#defender").empty();
		//$("#status").empty();
        
var characters = [maul, luke, sidious, kanobi];    


$(".img-thumbnail").on("click", function() {
    // when character has been selected
    if(me === null) {
        //get id of character selected
        var ID = parseInt($(this).attr("id"));

        me = characters[ID];

        // loop through character array
        $.each(characters, function(index, me) {
            // add unselected characters to enemies array
            if(me.id !== ID) {
               // mine.push(me);
                $("#"+me.id).removeClass("neutral attacker").appendTo($(".enemies"));
                $(".enemies").addClass("defense");
            } else {
                $("#"+me.id).removeClass("neutral defense").appendTo($('.mine'));
            }
        });

    	$(".defender").on("click", function() {
            if(defender === null) {
                var defID = parseInt($(this).attr("id"));
                console.log(this);
                defender = characters[defID];
                $("#"+defID).appendTo($(".defense"));
            }
        });
    
    }

});
}

startGame();