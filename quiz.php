<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Game</title>
    <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body>
    <div class="quiz-container">
        <h1>Quiz Game</h1>
        <div id="quiz-content"></div>
        <button id="next-btn" style="display:none;">Next</button>
    </div>

    <script>
        const difficulty = "<?php echo $_GET['difficulty'] ?? 'easy'; ?>";
    </script>
    <script src="../assets/js/quiz.js"></script>
</body>
</html>
