<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8' />
    <meta name="theme-color" content="#009900">
    <title>Jessy Lachapelle</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>@import url('css/open-iconic.css');</style>
    <?php
      require_once 'php/Mobile_Detect.php';
      $device = new Mobile_Detect;

      if($device->isTablet())
        echo "<link rel='stylesheet/less' href='css/mobile.less' media='(orientation : portrait)' charset='utf-8' />
             <link rel='stylesheet/less' href='css/desktop.less' media='(orientation : landscape)' charset='utf-8' />
             <script>const tablet = true;</script>
             <script src='js/slideout.js'></script>";
      elseif($device->isMobile())
        echo "<link rel='stylesheet/less' href='css/mobile.less' charset='utf-8' />
              <script>const phone = true;</script>
              <script src='js/slideout.js'></script>";
      else
        echo "<link rel='stylesheet/less' href='css/desktop.less' charset='utf-8' />";
    ?>
    <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.1/less.min.js"></script>
    <script src='js/script.js' defer='defer'></script>
  </head>
  <body>
    <div id='wrapper'>
      <?php include 'php/header.php'; ?>
      <main>
        <section id='home'>
          <h1>Coding the web</h1>
          <h2>For a better futur</h2>
        </section>
        <section id='about'>
          <h2>About Me</h2>
          <div class='card'>
            <h3>Jessy Lachapelle</h3>
            <b>Analyst Programmer</b>
            <img src="res/img/jessy.png" alt="my picture" />
          </div>
          <?php include 'php/about.php'; ?>
        </section>
        <section id='experience'>
          <h2>Studies and Experience</h2>
          <?php include 'php/experience.php'; ?>
          <div class="seperator"></div>
        </section>
        <section id='projects'>
          <h2>My Projects</h2>
          <?php include 'php/project.php'; ?>
          <div class="seperator"></div>
        </section>
        <section id='contact'>
          <h2>Contact Me</h2>
          <?php include 'php/contact.php'; ?>
          <div class="seperator"></div>
        </section>
      </main>
      <?php include 'php/footer.php' ?>
    </div>
  </body>
</html>
