import config from '../../config.json';


// v1

const bucket = config.bucketName;
const filename = 'https://s3.amazonaws.com/' + bucket + '/20374669_10159192202845387_6519633244649492779_n.jpg';
$('#chosenPictureImg').attr('src', filename);


// v2

const endpoint = 'https://2uw6w68yg6.execute-api.us-east-1.amazonaws.com/Prod/getPic';

function loadAnotherImage() {

    $.ajax({
        url: endpoint,
        method: 'GET',
        dataType: "json"
    }).done(function( data ) {
        $('#chosenPictureImg').attr('src', data.imageUrl);
    });
       
}

$('#moar').click(loadAnotherImage);
