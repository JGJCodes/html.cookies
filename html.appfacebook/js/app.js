$(document).ready(function(){
    load_section('timeline');
});

function load_sectin(section){
    $('#page').empty();
    $('#page').append('Cargando...');
    $.get('./section_'+section+'.html',function(data){
        $('#page').empty();
        $('#page').append(data);
    });
}