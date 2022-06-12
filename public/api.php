<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");

$slug = $_REQUEST['slug'];

$directoryToScan = "./uploads/*";

$json_array = array();

foreach(glob($directoryToScan, GLOB_ONLYDIR) as $folders) 
{
    
    $num_files = count(glob("$folders/*.jpg"));
    
    $fileinfo =  file_get_contents("$folders/readme.json");
    $json = json_decode($fileinfo);
    
    $id =   $json->id;
    
    $fileDate = date("d/m/y", filectime($folders));   

    $urls = [];
    foreach (array_merge(glob("$folders/*.jpg"), glob("$folders/*.jpeg")) as $filename) {

        $urls[] = [
          'date'=> $fileDate, 
          'title' => $json->title, 
          'description' => $json->description, 
          'tag' => $json->tag, 
          'url'=> "http://$_SERVER[HTTP_HOST]/".$filename, 
        ];
    }

    $json_Array[] = array('id' => $id, 'slug' => str_replace("./uploads/", "",$folders),  'dir'=>$folders,'date'=>$fileDate, 'title' => $json->title, 'description' => $json->description, 'tag' => $json->tag, 'images'=>$num_files,'album'=> $urls, 'url' => $urls[0]['url']  );

}


if(!empty($slug)){
    foreach($json_Array as $json) {
        if($json['slug'] == $slug) {
            $json_Array = $json;
            break;
        }
    }    
}


echo(json_encode($json_Array));

?>