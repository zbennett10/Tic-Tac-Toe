/// <reference path="../Scripts/jquery-3.1.1.intellisense.js" />
/// <reference path="../Scripts/jquery-3.1.1.min.js" />

$(document).ready(function () {
    var humxo;
    var comxo;
    var q1 = $("#1");
    var q2 = $("#2");
    var q3 = $("#3");
    var q4 = $("#4");
    var q5 = $("#5");
    var q6 = $("#6");
    var q7 = $("#7");
    var q8 = $("#8");
    var q9 = $("#9");
    var quad = $(".quad");
    var xbutton = $("#xbutton");
    var obutton = $("#obutton");
    var humWscore = $("#humwins");
    var humDscore = $("#humdraws");
    var humLscore = $("#humlosses");
    var comWscore = $("#comwins");
    var comDscore = $("#comdraws");
    var comLscore = $("#comlosses");
    var quadArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9];
    var humPicked = [];
    var comPicked = [];
    var comWins = 0;
    var comDraws = 0;
    var comLosses = 0;
    var humWins = 0;
    var humDraws = 0;
    var humLosses = 0;
    var humStatus = true;
    var comStatus = false;
    var comChoose;

    //------ this function makes quadrants clickable again

     function allowClick() {
        q1.removeClass("unclickable");
        q2.removeClass("unclickable");
        q3.removeClass("unclickable");
        q4.removeClass("unclickable");
        q5.removeClass("unclickable");
        q6.removeClass("unclickable");
        q7.removeClass("unclickable");
        q8.removeClass("unclickable");
        q9.removeClass("unclickable");
     }

    //-------computer wins
     function computerWins() {
         comWins += 1;
         comWscore.text(comWins);
         humLosses += 1;
         humLscore.text(humLosses);
     }

    //--------human wins
     function humanWins() {
         humWins = humWins + 1;
         humWscore.text(humWins);
         comLosses = comLosses + 1;
         comLscore.text(comLosses);
     }

    //-------a draw happens

     function playersDraw() {
         comDraws += 1;
         comDscore.text(comDraws);
         humDraws += 1;
         humDscore.text(humDraws);
     }

    //---------reinitalize values
     function clearAndInitialize() {
         quad.empty();
         quadArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9];
         humPicked = [];
         comPicked = [];
         allowClick();
     }

    //---------
     var winCombos = {
         "comboOne": ["q1", "q2", "q3"],
         "comboTwo": ["q1", "q5", "q9"],
         "comboThree": ["q1", "q4", "q7"],
         "comboFour": ["q2", "q5", "q8"],
         "comboFive": ["q3", "q5", "q7"],
         "comboSix": ["q3", "q6", "q9"],
         "comboSeven": ["q4", "q5", "q6"],
         "comboEight": ["q7", "q8", "q9"]
     };

    //--------checks to see if computer has won
    // this function takes an array of picks and a string description of the player ("hum" or "com")
     function winChecker(picks, desc) {
             var foundAll = [];
             for (var prop in winCombos) {
           
                 for (var i = 0; i < winCombos[prop].length; i++) {
                     if (picks.indexOf(winCombos[prop][i]) === -1) {
                         foundAll = [];
                         break;
                     }
                     else {
                         foundAll.push(winCombos[prop][i]);
                         if (foundAll.length === 3) {
                             if (desc === "com") computerWins();
                             if (desc === "hum") humanWins();
                             clearAndInitialize();
                         }
                         else continue;
                     }
                 }
             }
     }

     


    //-------- this function checks to see if a winning combination has occurred

     var winCheck = function () {
         winChecker(comPicked, "com");
         winChecker(humPicked, "hum");
    }
    

    var drawCheck = function () {


        if ((comPicked.indexOf("q1") != -1 && comPicked.indexOf("q2") != -1 && comPicked.indexOf("q3") != -1) != true && (humPicked.indexOf("q1") != -1 && humPicked.indexOf("q2") != -1 && humPicked.indexOf("q3") != -1) != true) {
            playersDraw();
            clearAndInitialize();
        } else if ((comPicked.indexOf("q1") != -1 && comPicked.indexOf("q5") != -1 && comPicked.indexOf("q9") != -1) != true && (humPicked.indexOf("q1") != -1 && humPicked.indexOf("q5") != -1 && humPicked.indexOf("q9") != -1) != true) {
            playersDraw();
            clearAndInitialize();
        } else if ((comPicked.indexOf("q1") != -1 && comPicked.indexOf("q4") != -1 && comPicked.indexOf("q7") != -1) != true && (humPicked.indexOf("q1") != -1 && humPicked.indexOf("q4") != -1 && humPicked.indexOf("q7") != -1) != true) {
            playersDraw();
            clearAndInitialize();
        } else if ((comPicked.indexOf("q2") != -1 && comPicked.indexOf("q5") != -1 && comPicked.indexOf("q8") != -1) != true && (humPicked.indexOf("q2") != -1 && humPicked.indexOf("q5") != -1 && humPicked.indexOf("q8") != -1) != true) {
            playersDraw();
            clearAndInitialize();
        } else if ((comPicked.indexOf("q3") != -1 && comPicked.indexOf("q5") != -1 && comPicked.indexOf("q7") != -1) != true && (humPicked.indexOf("q3") != -1 && humPicked.indexOf("q5") != -1 && humPicked.indexOf("q7") != -1) != true) {
            playersDraw();
            clearAndInitialize();
        } else if ((comPicked.indexOf("q3") != -1 && comPicked.indexOf("q6") != -1 && comPicked.indexOf("q9") != -1) != true && (humPicked.indexOf("q3") != -1 && humPicked.indexOf("q6") != -1 && humPicked.indexOf("q9") != -1) != true) {
            playersDraw();
            clearAndInitialize();
        } else if ((comPicked.indexOf("q4") != -1 && comPicked.indexOf("q5") != -1 && comPicked.indexOf("q6") != -1) != true && (humPicked.indexOf("q4") != -1 && humPicked.indexOf("q5") != -1 && humPicked.indexOf("q6") != -1) != true) {
            playersDraw();
            clearAndInitialize();
        } else if ((comPicked.indexOf("q7") != -1 && comPicked.indexOf("q8") != -1 && comPicked.indexOf("q9") != -1) != true && (humPicked.indexOf("q7") != -1 && humPicked.indexOf("q8") != -1 && humPicked.indexOf("q9") != -1) != true) {
            playersDraw();
            clearAndInitialize();
        }

    }


    //when human status is true and clicks on xbutton, x is assigned to human and o is assigned to computer
    //when computer status is true same thing ^^
    xbutton.click(function () {
        if (humStatus === true) {
            humxo = "X"; //if its the human's turn, they have X
            comxo = "O";
        }

        if (comStatus === true) {
            humxo = "O"; // if its the computer's turn, human has O
            comxo = "X";
        }
    });

    obutton.click(function () {
        if (humStatus === true) {
            humxo = "O";
            comxo = "X";
        }

        if (comStatus === true) {
            comxo = "O";
            humxo = "X";
        }
    });
    //---------------------------------------
    comChoose = function () {

        winCheck();
        var pick;
        if (quadArr.length === 1) {
            allowClick();
            var rand = quadArr[Math.floor(Math.random() * quadArr.length)];
            rand.text(comxo);
            var randIndex = quadArr.indexOf(rand);
            if (randIndex != -1) {
                pick = quadArr.splice(randIndex, 1);
                //-------------------shows its picked
                if (pick.indexOf(q1) != -1) {
                    comPicked.push("q1");
                } else if (pick.indexOf(q2) != -1) {
                    comPicked.push("q2");
                } else if (pick.indexOf(q3) != -1) {
                    comPicked.push("q3");
                } else if (pick.indexOf(q4) != -1) {
                    comPicked.push("q4");
                } else if (pick.indexOf(q5) != -1) {
                    comPicked.push("q5");
                } else if (pick.indexOf(q6) != -1) {
                    comPicked.push("q6");
                } else if (pick.indexOf(q7) != -1) {
                    comPicked.push("q7");
                } else if (pick.indexOf(q8) != -1) {
                    comPicked.push("q8");
                } else if (pick.indexOf(q9) != -1) {
                    comPicked.push("q9");
                }
            }

            drawCheck();
            clearAndInitialize();

            //----------- end of first if 

        } else if (quadArr.length < 1) {
            drawCheck();
            clearAndInitialize();
        }
        //----------------end of quad.arr.length of zero check

        var rand = quadArr[Math.floor(Math.random() * quadArr.length)];
        rand.text(comxo);
        rand.addClass("unclickable");
        var randIndex = quadArr.indexOf(rand);
        if (randIndex != -1) {
            pick = quadArr.splice(randIndex, 1);
            //-------------------shows its picked
            if (pick.indexOf(q1) != -1) {
                comPicked.push("q1");
            } else if (pick.indexOf(q2) != -1) {
                comPicked.push("q2");
            } else if (pick.indexOf(q3) != -1) {
                comPicked.push("q3");
            } else if (pick.indexOf(q4) != -1) {
                comPicked.push("q4");
            } else if (pick.indexOf(q5) != -1) {
                comPicked.push("q5");
            } else if (pick.indexOf(q6) != -1) {
                comPicked.push("q6");
            } else if (pick.indexOf(q7) != -1) {
                comPicked.push("q7");
            } else if (pick.indexOf(q8) != -1) {
                comPicked.push("q8");
            } else if (pick.indexOf(q9) != -1) {
                comPicked.push("q9");
            }

        }
        comStatus = false;
        humStatus = true;
        winCheck();
    }

    //------------------------- human stuff

    q1.click(function () {
        humPicked.push("q1");
        var randIndex = quadArr.indexOf(q1);
        if (randIndex != -1) {
            quadArr.splice(randIndex, 1);

        }

        if (humStatus === true) {
            $(q1).text(humxo);
            humStatus = false;
            comStatus = true;
            q1.addClass("unclickable");
            comChoose();
        }
    });

    q2.click(function () {
        humPicked.push("q2");
        var randIndex = quadArr.indexOf(q2);
        if (randIndex != -1) {
            quadArr.splice(randIndex, 1);
        }

        if (humStatus === true) {
            $(q2).text(humxo);
            humStatus = false;
            comStatus = true;
            q2.addClass("unclickable");
            comChoose();
        }
    });

    q3.click(function () {
        humPicked.push("q3");
        var randIndex = quadArr.indexOf(q3);
        if (randIndex != -1) {
            quadArr.splice(randIndex, 1);
        }

        if (humStatus === true) {
            $(q3).text(humxo);
            humStatus = false;
            comStatus = true;
            q3.addClass("unclickable");
            comChoose();
        }
    });

    q4.click(function () {
        humPicked.push("q4");
        var randIndex = quadArr.indexOf(q4);
        if (randIndex != -1) {
            quadArr.splice(randIndex, 1);
        }
        if (humStatus === true) {
            $(q4).text(humxo);
            humStatus = false;
            comStatus = true;
            q4.addClass("unclickable");
            comChoose();
        }
    });

    q5.click(function () {
        humPicked.push("q5");
        var randIndex = quadArr.indexOf(q5);
        if (randIndex != -1) {
            quadArr.splice(randIndex, 1);
        }
        if (humStatus === true) {
            $(q5).text(humxo);
            humStatus = false;
            comStatus = true;
            q5.addClass("unclickable");
            comChoose();
        }
    });

    q6.click(function () {
        humPicked.push("q6");
        var randIndex = quadArr.indexOf(q6);
        if (randIndex != -1) {
            quadArr.splice(randIndex, 1);
        }
        if (humStatus === true) {
            $(q6).text(humxo);
            humStatus = false;
            comStatus = true;
            q6.addClass("unclickable");
            comChoose();
        }
    });

    q7.click(function () {
        humPicked.push("q7");
        var randIndex = quadArr.indexOf(q7);
        if (randIndex != -1) {
            quadArr.splice(randIndex, 1);
        }
        if (humStatus === true) {
            $(q7).text(humxo);
            humStatus = false;
            comStatus = true;
            q7.addClass("unclickable");
            comChoose();
        }
    });


    q8.click(function () {
        humPicked.push("q8");
        var randIndex = quadArr.indexOf(q8);
        if (randIndex != -1) {
            quadArr.splice(randIndex, 1);
        }
        if (humStatus === true) {
            $(q8).text(humxo);
            humStatus = false;
            comStatus = true;
            q8.addClass("unclickable");
            comChoose();
        }
    });


    q9.click(function () {
        humPicked.push("q9");
        var randIndex = quadArr.indexOf(q9);
        if (randIndex != -1) {
            quadArr.splice(randIndex, 1);
        }
        if (humStatus === true) {
            $(q9).text(humxo);
            humStatus = false;
            comStatus = true;
            q9.addClass("unclickable");
            comChoose();
        }
    });

    // reset button functionality that clears and resets scores and state
    $("#reset").click(function () {
        humWins = 0;
        humDraws = 0;
        humLosses = 0;
        comWins = 0;
        comDraws = 0;
        comLosses = 0;
        humWscore.text(humWins);
        comWscore.text(comWins);
        humDscore.text(humDraws);
        comDscore.text(comDraws);
        humLscore.text(humLosses);
        comLscore.text(comLosses);
        quad.empty();
        quadArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9];
        humPicked = [];
        comPicked = [];
        humStatus = true;
        comStatus = false;
        comxo = "";
        humxo = "";
        allowClick();

    });
});

