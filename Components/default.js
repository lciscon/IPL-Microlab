// import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
import { Octokit, App } from "https://cdn.skypack.dev/octokit";

const octokit = new Octokit()

async function update_files() {
  var files = await octokit.rest.repos.getContent({
    owner: 'lciscon',
    repo: 'IPL-Microlab',
    path: 'Components'
  });
  
  console.log('Files found at root level', files);  
//  console.log('Files found at root level', files.data.map((file) => file.name));  
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
