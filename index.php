<!-- filepath: /c:/xampp/htdocs/quiz_game/quiz-game/src/index.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Game</title>
    <link rel="stylesheet" href="../assets/css/index.css">
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Welcome to Web Dev Quiz</h1>
    </header>
    <main>
  <div class="center-overlay">
    <p class="quiz-desc">Assess your understanding of web fundamentals.</p>
    <button class="start-quiz-btn" onclick="window.location.href='index.html'">Start Quiz</button>
  </div>
</main>
    <footer>
        <p>&copy; <?php echo date("Y"); ?> Quiz Game. All rights reserved.</p>
    </footer>
</div>
</body>
</html>