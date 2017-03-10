$(document).ready(function () {

    /*Start game*/
    $(".gameinterface").hide();
    $(".gamescore").hide();
    $("#startbtn").click(function () {
        $(".gameinterface").show();
        $(".gamescore").show();
    });

    /*Terminate and refresh page*/
    $('#endbtn').click(function() {
        location.reload();
    });
});
