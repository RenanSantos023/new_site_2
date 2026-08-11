const API =
"https://rp9b96v3ih.execute-api.sa-east-1.amazonaws.com/dev/youtube/download";

async function upload(){

const file =
document.getElementById("video").files[0];

if(!file){

alert("Selecione um vídeo");

return;

}

document.getElementById("status").innerHTML =
"Obtendo URL...";

const response =
await fetch(API,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

fileName:file.name,

contentType:file.type

})

});

const data =
await response.json();

document.getElementById("status").innerHTML =
"Enviando vídeo...";

await fetch(data.uploadUrl,{

method:"PUT",

headers:{
"Content-Type":file.type
},

body:file

});

document.getElementById("status").innerHTML =
"Upload concluído!";
}