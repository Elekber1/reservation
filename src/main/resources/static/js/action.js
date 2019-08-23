$(function () {
    $('#showDialog').click( function () {
        $('#myReserv').modal('show');
    });

    $('#axtarBtn').click(function () {
        $('#secondTable').show();
        $('#firstTable').hide();

        /*  $('#secondTable').toggle();*/

    });

    // $('#legvEtBtn').click(function () {
    //
    //     $('#addReservForm').hide();
    // });

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
});

$(function () {
    $('#addLegvEtBtn').click(function () {
        $('#myModall').modal('hide');

    });
});


// function editDoReserv(id) {
//         alert('editDoReserv Function');
//
//     $.ajax({
//         url: '/edit',
//         type: 'GET',
//         data: 'id='+id,
//         dataType: 'json',
//         success: function (data) {
//             $('#updateReserv').empty();
//             $('#updateReserv').append('<div class="modal-body" style="padding:40px 50px;">\n' +
//                 '          <form role="form" id="formChange" action=\'/updateReserv\'>\n' +
//                 '          \t<div class="form-group">\n' +
//                 '          \t\t <button type="button" class="close" data-dismiss="modal">&times;</button>\n' +
//                 '          <h4 style="font: normal 30px Arial;">Rezervasiyanı redaktə et</h4>\n' +
//                 '    <br/> <br/>\n' +
//                 '              <label for="usrname"><span></span>Rezerv edən</label>\n' +
//                 '\n' +
//                 '              <input type="text" class="form-control" id="usrname1" value="Hamlet Məmmədov" disabled style="background-color: white;"><br/>\n' +
//                 '\n' +
//                 '              <label for="usrname"><span></span>Ad və Soyad</label>\n' +
//                 '\n' +
//                 '              <input type="text" class="form-control"  id="fullnameChange" value="doReservDto.fullname">\n' +
//                 '\n' +
//                 '            </div>\n' +
//                 '\n' +
//                 '            <div class="form-group">\n' +
//                 '              <label for="usrname"><span></span>İclasın qısa məqsədi</label>\n' +
//                 '\n' +
//                 '              <input type="text" class="form-control" id="topicChange">\n' +
//                 '\n' +
//                 '            </div>\n' +
//                 '            <div class="form-group">\n' +
//                 '              <label for="psw"><span></span> Başlama tarixi</label>\n' +
//                 '\n' +
//                 '              <input type="text" class="form-control datepicker" style="background-color: white;" id="dateChange">\n' +
//                 '\n' +
//                 '            </div>\n' +
//                 '            <div class="form-group">\n' +
//                 '              <label for="psw"><span></span> Başlama vaxtı</label>\n' +
//                 '\n' +
//                 '              <input type="time" style="width: 100%; height: 35px; border-radius: 5px;" id="startTimeChange">\n' +
//                 '\n' +
//                 '            </div>\n' +
//                 '              <div class="form-group">\n' +
//                 '              <label for="psw"><span></span> Bitmə vaxtı</label>\n' +
//                 '\n' +
//                 '              <input type="time" style="width: 100%; height: 35px; border-radius: 5px;" id="endTimeChange">\n' +
//                 '\n' +
//                 '              </div>\n' +
//                 '            <div class="form-group">\n' +
//                 '              <label for="psw"><span></span> İclas otağını seçin</label>\n' +
//                 '\n' +
//                 '                <select    id="meetingChange" name="meetings" class="select-css" >\n' +
//                 '                    <option  isabled="true" selected="selected" >İclas Otağını Seçin</option>\n' +
//                 '\n' +
//                 '                    <option each="meeting : meetingsList"\n' +
//                 '                            value="meeting.id"\n' +
//                 '                            utext="meeting.room">\n' +
//                 '                    </option>\n' +
//                 '                </select>\n' +
//                 '\n' +
//                 '            </div>\n' +
//                 '            <br />\n' +
//                 '              <button style="font: normal 18px Arial;" type="submit" class="btn btn-success btn-block" id="btnr"><span></span>Redaktə et</button>\n' +
//                 '\n' +
//                 '               <button  style="background-color: #BF1F1F; border: 1px solid #BF1F1F; font: normal 18px Arial;" type="submit" class="btn btn-success btn-block" id="btnr"><span></span>Rezervasiyanı ləğv et</button>\n' +
//                 '          </form>\n' +
//                 '        </div>');
//             // $('#updateReserv').html(data);
//             // $('#updateReserv').dialog('open');
//         }
//
//    /*$.ajax({
//         url: 'updateReserv',
//         type: 'GET',
//         data: 'id='+id,
//         dataType: 'html',
//         success: function (data) {
//             $('#updateReserv').html(data);
//             $('#updateReserv').dialog('open');
//         }*/
//
//     });
// }










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