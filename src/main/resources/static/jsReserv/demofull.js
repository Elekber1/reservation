var  globReservId = 0;


//paylasimlar
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});

//paylasim redakte
$(document).ready(function(){
    $(".duyme12").click(function(){
        $("#post12").modal();
    });
});

//gedenlerin siyahsi
$(document).ready(function(){
    $(".razi12").click(function(){
        $("#razi12").modal();
    });
});
//getmeyenlerin siyahsi
$(document).ready(function(){
    $(".razideyil12").click(function(){
        $("#razideyil12").modal();
    });
});


//fealiyyetler redakte
$(document).ready(function(){
    $(".duyme13").click(function(){
        $("#post13").modal();
    });
});

//ideya ve shikayet redakte
$(document).ready(function(){
    $(".duyme14").click(function(){
        $("#post14").modal();
    });
});
//kitabxana
function kit() {

    document.getElementById("videoFull").style.display = "none";
    document.getElementById("libraryFull").style.display = "block";
    // body...
}
function vid() {

    document.getElementById("videoFull").style.display = "block";
    document.getElementById("libraryFull").style.display = "none";
    // body...
}

//elanlar

function e1() {

    document.getElementById("mezmun2full").style.display = "none";
    document.getElementById("mezmun3full").style.display = "none";
    document.getElementById("mezmun4full").style.display = "none";
    document.getElementById("mezmun1full").style.display = "block";
    // body...
}
function e2() {

    document.getElementById("mezmun1full").style.display = "none";
    document.getElementById("mezmun3full").style.display = "none";
    document.getElementById("mezmun4full").style.display = "none";
    document.getElementById("mezmun2full").style.display = "block";
    // body...
}
function e3() {

    document.getElementById("mezmun1full").style.display = "none";
    document.getElementById("mezmun2full").style.display = "none";
    document.getElementById("mezmun4full").style.display = "none";
    document.getElementById("mezmun3full").style.display = "block";
    // body...
}
function e4() {

    document.getElementById("mezmun1full").style.display = "none";
    document.getElementById("mezmun3full").style.display = "none";
    document.getElementById("mezmun2full").style.display = "none";
    document.getElementById("mezmun4full").style.display = "block";
    // body...
}

//idealar ve wikayetler

function ide() {

    document.getElementById("wikayetlerFull").style.display = "none";
    document.getElementById("idealarFull").style.display = "block";

    // body...
}
function wik() {

    document.getElementById("wikayetlerFull").style.display = "block";
    document.getElementById("idealarFull").style.display = "none";
    // body...
}


// $(document).ready(function(){
//     $(".myBtn").click(function(){
//         $("#myModal").modal();
//     });
// });


// Reserv et add
$(document).ready(function(){
    $(".myrezerv").click(function(){
        $("#addModal").modal();

    });
});

// function editReservation(id) {
//
//     $(".myBtn").click(function () {
//         $("#myModal").modal();
//
//     });
//
// }

//rezerv otagi


 // function editReservation(id) {
 //
 //
 //        $(".myBtn").click(function () {
 //            $('#myModal').modal();
 //            alert(id);
 //
 //            $.ajax({
 //                url: 'edit',
 //                type: 'GET',
 //                data: 'id='+id,
 //                dataType: 'html',
 //                success: function (data) {
 //                    $('#myModal').html(data);
 //                    alert('Salam');
 //
 //                }
 //            });
 //        });
 //    }







function editReservation(id) {


    $(".myBtn").click(function(){
        $("#myModal").modal();

        $.ajax({
            url: 'edit',
            type: 'GET',
            data: 'id='+id,
            dataType: 'json',
            success: function (data) {

                $('#updateReserv').empty();
                $('#updateReserv').append(' <div class="modal-body" id="updateReservModel" style="padding:40px 50px;">\n' +
                    '          <form role="form" id="formChange" action=\'/updateReserv\'>\n' +
                    '          \t<div class="form-group">\n' +
                    '          \t\t <button type="button" class="close" data-dismiss="modal">&times;</button>\n' +
                    '          <h4 style="font: normal 30px Arial;">Rezervasiyanı redaktə et</h4>\n' +
                    '    <br/> <br/>\n' +
                    '              <label for="usrname"><span></span>Rezerv edən</label>\n' +
                    '\n' +
                    '              <input type="text" class="form-control" id="usrname1" value="Hamlet Məmmədov" disabled style="background-color: white;"><br/>\n' +
                    '\n' +
                    '              <label for="usrname"><span></span>Ad və Soyad</label>\n' +
                    '\n' +
                    '              <input type="text" class="form-control"  id="fullname1" value="'+data.fullname+'">\n' +
                    '\n' +
                    '            </div>\n' +
                    '\n' +
                    '            <div class="form-group">\n' +
                    '              <label for="usrname"><span></span>İclasın qısa məqsədi</label>\n' +
                    '\n' +
                    '              <input type="text" class="form-control" id="topic1" value="'+data.topic+'">\n' +
                    '\n' +
                    '            </div>\n' +
                    '            <div class="form-group">\n' +
                    '              <label for="psw"><span></span> Başlama tarixi</label>\n' +
                    '\n' +
                    '              <input id="date1" name="date" type="text" class="form-control datepicker" style="background-color: white;" value="'+data.date+'">\n' +
                    '\n' +
                    '            </div>\n' +
                    '            <div class="form-group">\n' +
                    '              <label for="psw"><span></span> Başlama vaxtı</label>\n' +
                    '\n' +
                    '              <input type="time" style="width: 100%; height: 35px; border-radius: 5px;" id="startTimeChange" value="'+data.startTime+'">\n' +
                    '\n' +
                    '            </div>\n' +
                    '              <div class="form-group">\n' +
                    '              <label for="psw"><span></span> Bitmə vaxtı</label>\n' +
                    '\n' +
                    '              <input type="time" style="width: 100%; height: 35px; border-radius: 5px;" id="endTimeChange" value="'+data.endTime+'">\n' +
                    '\n' +
                    '              </div>\n' +
                    '            <div class="form-group">\n' +
                    '              <label for="psw"><span></span> İclas otağını seçin</label>\n' +
                    '\n' +
                    '                <select    id="meetingChange" name="meetings" class="select-cssReserv" >\n' +
                    '                    <option  isabled="true" selected="selected" >İclas Otağını Seçin</option>\n' +
                    '                 <option value="'+data.meetings.id+'">'+data.meetings.room+'</option>\n' +
                    '                                                                                             ' +
                    '</select>\n' +
                    '\n' +
                    '            </div>\n' +
                    '            <br />\n' +
                    '              <button style="font: normal 18px Arial;" type="submit" class="btn btn-success btn-block" id="btnr"><span></span>Redaktə et</button>\n' +
                    '\n' +
                    '               <button  style="background-color: #BF1F1F; border: 1px solid #BF1F1F; font: normal 18px Arial;" type="submit" class="btn btn-success btn-block" id="btnr"><span></span>Rezervasiyanı ləğv et</button>\n' +
                    '          </form>\n' +
                    '        </div>');
            }


        });
    });
}


// function updateReservation() {
//     var studentCombo = $('#fullname1').val();
//     var teacherCombo = $('#topic').val();
//     var lessonCombo = $('#lessonComboId1').val();
//     var amount = $('#amountId1').val();
//
//     if (studentCombo == 0 || teacherCombo == 0|| lessonCombo == 0){
//         alert('Please select combo!');
//     }
//
//     var data = {
//         studentCombo:studentCombo,
//         teacherCombo: teacherCombo,
//         lessonCombo: lessonCombo,
//         amount: amount,
//         paymentId: globPaymentId
//     };
//
//     $.ajax({
//         url: 'cs?action=updatePayment',
//         type: 'POST',
//         data: data,
//         dataType: 'text',
//         success: function (response) {
//
//             if (response == 'success'){
//                 alert('Payment has benn  successfully updated!');
//                 getPaymentList();
//                 $('#editPaymentDialogId').dialog('close');
//             }else {
//                 alert('Problem! Payment has not benn successfully updated!');
//             }
//
//         }
//
//     });
// }





$('.jsReserv-pscroll').each(function(){
    var ps = new PerfectScrollbar(this);

    $(window).on('resize', function(){
        ps.update();
    })
});


flatpickr(".datepicker",
    {});

const choices = new Choices('[data-trigger]',
    {
        searchEnabled: false,
        itemSelectText: '',
    });


