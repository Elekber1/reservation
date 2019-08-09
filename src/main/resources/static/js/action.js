$(function () {
    $('#showDialog').click( function () {
        $('#myReserv').modal('show');
    });

    $('#axtarBtn').click(function () {
        $('#secondTable').show();
        $('#firstTable').hide();

        /*  $('#secondTable').toggle();*/

    });

    $('#legvEtBtn').click(function () {

        $('#addReservForm').hide();
    });

});

function test() {
    alert('asdnas');
}



$('#addReservBtn').click(function  () {
    var fullname = $('#fullname').val();
    var topic = $('#topic').val();
    var date = $('#date').val();
    var startTime = $('#startTime').val();
    var endTime = $('#endTime').val();
    var meetings = $('#meetingSelect').val()

    $.ajax({
        url:'addReserv',
        method:'post',
        data:'fullname='+fullname+'&topic='+topic+'&date='+date+'&startTime='+startTime+'&endTime='+endTime+
        '&meetings.id='+meetings,

        success: function () {

            $('#showInfo').html('Info add ');
            $('#myReserv').modal('hide');
            location.reload();
        }

    })
});

$('').onclick(function () {
    var fullname = $('').val;
})













/*  $('#axtarBtn').click(function () {
      var fullname = $('#searchFullname').val();
      var date = $('#searchDate').val();
      var meetings = $('#searchMeetings').val();

      $.ajax({
          url: 'search',
          method: 'get',
          data: '',
          success: function () {

              $('showInfo').html('Info searched')
          }

      })

  });*/




/* $('#editDialog').dialog({
     title:'Update Reserver',
     height:500,
     width:500,
     show: { effect: "blind", duration: 800 },
     autoOpen:false,
     modal:true,
     buttons:{
        "Update":function () {

        },
        "Close":function () {
            $(this).dialog('close');

        }
     }

 });





function edit(id) {
 $.ajax({
     url:'updateReserve',
     type:'GET',
     data:'id='+id,
     dataType:'html',
     success: function (data) {
             $('#editDialog').html(data);
         $('#editDialog').dialog('open');
     }
 })


}

function advancedSearch(){
var name=$('#selName').val();
var beginDate=$('#beginDateId').val();
var endDate=$('#endDateId').val();
var select=$('#select').val();
var data={
   name:name,
   beginDate: beginDate,
   endDate:endDate,
   id:select
};

 $.ajax({
     url:'advancedSearch',
     type:'GET',
     data:data,
     dataType:'html',
     success: function (data) {
         $('#change').html(data);
         alert("Ilqar");

     }
 });
}

function checkTime(i) {
 if (i < 10) {
     i = "0" + i;
 }
 return i;
}

$(function () {
 $('#datetimepicker1').datetimepicker({
     format: 'hh:mm:ss'
 });
});


*/