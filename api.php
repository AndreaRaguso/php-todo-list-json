<?php

$todosString = file_get_contents('database.json');
$todosDecoded = json_decode($todosString, true);


$todos = [];

foreach ($todosDecoded as $todo) {
    $todos[] = [
        'text' => $todo['text'],
        'done' => $todo['done']
    ];
}

$response = [
    'success' => true,
    'message' => 'Ok',
    'code' => 200,
    'todos' => $todos
];

$jsonResponse = json_encode($response);

header('Content-Type: application/json');

echo $jsonResponse;
