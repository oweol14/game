<!-- filepath: results.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Results</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <h1>Quiz Results</h1>
    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $score = 0;

        // Check answers
        if (isset($_POST['question1']) && $_POST['question1'] === 'Paris') {
            $score++;
        }
        if (isset($_POST['question2']) && $_POST['question2'] === '4') {
            $score++;
        }

        echo "<p>You scored $score out of 2.</p>";
    } else {
        echo "<p>No answers submitted. Please take the quiz first.</p>";
    }
    ?>
    <a href="quiz.php">Take the Quiz Again</a>
</body>
</html>