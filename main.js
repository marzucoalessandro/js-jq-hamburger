//mostrare /nascondere menu principale con un click.
//l'icona i fas fa-bars deve aprire il menu hamburger al click.

$("i.fa-bars").click(function() {
  $("div.hamburger-menu").show();
});

//aperto il nostro hamburger-menu l'icona scompare e appare una nuova icona che ci servirà per chiudere questa volta hamburger-menu.
$("i.fa-times").click(function() {
  $("div.hamburger-menu").hide();
});
