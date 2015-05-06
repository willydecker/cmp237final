function findDate(string) {
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  var match = dateTime.exec(string);
  if (string = ("30-01-2003")) {
    return new Date(Number(match[3]),
                  Number(match[2]) - 1,
                  Number(match[1]));
  }
  else if (string = ("01-30-2003")) {
	return new Date(Number(match[2]) - 1,
                    Number(match[3]),
                     Number(match[1]));
  }
};
print(findDate("01-30-2003"));
print(findDate("30-01-2003"));
