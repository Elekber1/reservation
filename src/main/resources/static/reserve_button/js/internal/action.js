$(function () {
    $('#showDialog').click( function () {
        $('#myReserv').modal('show');
    });

    $('#addReservBtn').click(function () {
        var name=$('#reservName').val();
        var movzu=$('#topic').val();
        var attend=$('#heyet').val();
        var meeting=$('#meet').val();
        var date =   $('#date').val();
        var netice=$('#result').val();


        $.ajax({
            url:'addReserv',
            method:'post',
            data:'name='+name+'&movzu='+movzu+'&reser='+attend+'&startDate='+date+'&netice='+netice+'&meetings.id='+meeting,
            success: function () {
                $('#showInfo').html('Info add ');
                $('#myReserv').modal('hide');
                location.reload();
            }
        })
    })

    $('#editDialog').dialog({
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