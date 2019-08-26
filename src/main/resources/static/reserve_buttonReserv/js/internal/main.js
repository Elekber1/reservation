
$(function(){
    $('#reserv').dataTable();

    // $('.date-picker').datepicker({
    //     daysOfWeekDisabled: [0, 6]
    // });
    // $(".form_datetime").datetimepicker({
    //     format: "dd MM yyyy - hh:ii"
    // });
    $("#date").datepicker();
    $('.datePicker').datepicker({
        changeMonth:true,
        changeYear:true
    });
    $('#idSearchBtnId').click(function(){
        advancedSearch();
    })

    $("#accordion").accordion({
        collapsible:true
    });




    $('#tabmenu .icerik').hide();
    $('#tabmenu .icerik').first().show();
    $('#tabmenu .sekme li').on("click",function () {

        var sira=$(this).index();
        $('#tabmenu .icerik').hide();
        $('#tabmenu .icerik').eq(sira).show('slow');
        $('#tabmenu .sekme li').removeClass('aktif');
        $(this).addClass("aktif");
    });




});






