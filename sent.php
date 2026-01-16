<?php
$status = $_GET['status'] ?? '';
?>

<!DOCTYPE html>
<html>
<head>
    <title>Status</title>

    <!-- 🔁 Auto redirect after 10 seconds -->
    <meta http-equiv="refresh" content="10;url=index.php">

    <style>
        body{
            min-height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            font-family:Arial, Helvetica, sans-serif;
            background:#f4f6f9;
        }

        .box{
            width:420px;
            padding:35px;
            border-radius:15px;
            text-align:center;
            box-shadow:0 12px 30px rgba(0,0,0,.25);
        }

        .success{
            background:#e6ffed;
            color:#1e7e34;
        }

        .error{
            background:#ffe6e6;
            color:#b30000;
        }

        .timer{
            margin-top:15px;
            font-size:14px;
            opacity:0.8;
        }
    </style>
</head>
<body>

<?php if($status === 'success'): ?>
    <div class="box success">
        <h2>✅ Message Sent Successfully</h2>
        <p>Thank you for contacting us.</p>
        <div class="timer">Redirecting to home page in 10 seconds…</div>
    </div>

<?php elseif($status === 'error'): ?>
    <div class="box error">
        <h2>❌ Message Failed</h2>
        <p>Something went wrong. Please try again later.</p>
        <div class="timer">Redirecting to home page in 10 seconds…</div>
    </div>
<?php endif; ?>

</body>
</html>
