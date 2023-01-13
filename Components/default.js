import { Octokit } from "octokit";

const octokit = new Octokit()

async function update_files() {
  repoContent = octokit.rest.repos.getContent({
    owner: 'lciscon',
    repo: 'IPL-Microlab',
    path: 'Components/Elec'
  })
  
  console.log('Files found at root level', repoContent.data.map((file) => file.name));  
}


function update_files2() {
    $('#list select option').remove();
    $.getJSON("/api/ls", function(data) {
        $.each(data['files'], function(index, file) {
                $('<option />', {html: file}).appendTo($('#list select'));
        });
    });
}


$(document).ready(function() {
    $(document).on('submit', '#upload', function(e) {
        var form = $(this);
        var success = 0;
        $.each($('#files').prop('files'), function(index, file) {
            $('#status').html("Sending " + file.name);

            $.ajax({
                async: false,
                url: form.attr('action') + file.name,
                method: 'PUT',
                data: file,
                processData: false,  // tell jQuery not to process the data
                contentType: false,  // tell jQuery not to set contentType
            }).done(function() {
                success++;

                update_files();
            });
        });

        $('#status').html(success + " file(s) uploaded successfully.");

        e.preventDefault();
    }).on('submit', '#list', function(e) {
        var file = $(this).find('select').val()[0];
        if (file) {
            window.location = '/api/download/' + file;
        }

        e.preventDefault();
    });

 
    update_files();
});
