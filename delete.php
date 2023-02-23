<?php

$todosString = file_get_contents('database.json');
$todosDecoded = json_decode($todosString, true);

$delTask = [
    'text' => $_POST['task']['text'],
];

foreach ($todosDecoded as $key => $value) {
    if (in_array($delTask['text'] , $value)) {
        unset($todosDecoded[$key]);
    }
}

$todosEncoded = json_encode($todosDecoded);

file_put_contents('database.json', $todosEncoded);

$response = [
    'success' => true,
    'message' => 'Ok',
    'code' => 200
];

header('Content-Type: application/json');

echo json_encode($response);
