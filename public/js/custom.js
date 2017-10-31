    var base_url = window.location.protocol + '//' + window.location.host;
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
        }
    });

$(document).on('click', '.panel-heading span.icon_minim', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).on('focus', '.panel-footer input.chat_input', function (e) {
    var $this = $(this);
    if ($('#minim_chat_window').hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideDown();
        $('#minim_chat_window').removeClass('panel-collapsed');
        $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).on('click', '#new_chat', function (e) {
    var size = $( ".chat-window:last-child" ).css("margin-left");
     size_total = parseInt(size) + 400;
    alert(size_total);
    var clone = $( "#chat_window_1" ).clone().appendTo( ".container" );
    clone.css("margin-left", size_total);
});
$(document).on('click', '.icon_close', function (e) {
    //$(this).parent().parent().parent().parent().remove();
    $( "#chat_window_1" ).remove();
});

$(document).on('submit', '#form-chat', function (e) {
    e.preventDefault();
    var frm = $("#form-chat");
       var content;

    $.ajax({
        type: frm.attr("method"),
        url: frm.attr("action"),
        data: $(this).serialize(),
        
        beforeSend: function() {
          console.log("about to send");
          },
        success: function(data) {
            // $(".panel-body").append('<div class="row msg_container base_sent">'+
            //             '<div class="col-md-10 col-xs-10 ">'+
            //                '<div class="messages msg_sent"><p>'+
            //                     data.message+
            //                     '</p><time datetime="2009-11-13T20:00">Timothy • 51 min</time>'+
            //                ' </div>'+
            //             '</div>'+
            //             '<div class="col-md-2 col-xs-2 avatar">'+
            //              '   <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">'+
            //             '</div>'+
            //         '</div>');
            console.log("sending succeeded");
        },
        error: function(data) {
            console.log("error sending");         
        }
    });

  e.preventDefault();
});