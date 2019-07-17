var today = new Date();
var dayOfWk = today.getDay();

switch (dayOfWk) {
  case 5:
    document.write("Let us rejoice, it is Friday!");
    break;

  case 6:
    document.write("Happy Saturday! " + "Enjoy the weekend.");
    break;

  case 7:
    document.write("Happy Sunday! " + "Enjoy the weekend while it lasts!");
    break;

  case 1:
    document.write(
      "Happy Monday! " + "Let's get the week off to a great start!"
    );
    break;

  default:
    document.write("Have a great week!");
}
