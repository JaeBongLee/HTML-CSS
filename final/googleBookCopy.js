function takeObjectFromGoogle() {
  var result = "";
  var name = document.getElementsByClassName('cover-image');
  var pageLink = document.getElementsByClassName('card-click-target');
  var writer = document.getElementsByClassName('subtitle');
  var price = document.getElementsByClassName('price buy');

  for (var i=0, j=0; i<12; i++, j += 4) {
    if (i<6) continue;
    else {
      result += "\n{\n";
      result += "\t\"Name\" : \"" + name[i].alt + "\",\n";
      result += "\t\"ImageLink\" : \"" + name[i].src + "\",\n";
      result += "\t\"PageLink\" : \"" + pageLink[j].href + "\",\n";
      result += "\t\"Writer\" : \"" + writer[i].title + "\",\n";
      result += "\t\"WriterLink\" : \"" + writer[i].href + "\",\n";
      result += "\t\"Price\" : \"" + price[j].innerText.replace('₩','').replace('  ', '').replace('  ', '') + "\",\n";
    }

    if (i < 11)
      result += "},";
    if (i == 11)
      result += "}\n";
  }
  return result;
}

var result = takeObjectFromGoogle();

result;