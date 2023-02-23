<?php

    $todosString = file_get_contents('database.json');
    $todosDecoded = json_decode($todosString, true);

    $newTask = [
        'text' => $_POST['task']['text'],
        'done' => false,
    ];

    $todosDecoded[] = $newTask;

    $todosEncoded = json_encode($todosDecoded);

    file_put_contents('database.json', $todosEncoded);

    $response = [
        'success' => true,
        'message' => 'Ok',
        'code' => 200
    ];

    header('Content-Type: application/json');

    echo json_encode($response);