

function validateString(s) {
    if (s.charAt(0) == "=" || s.charAt(0) == "+" || s.charAt(0) == "-" || s.charAt(0) == "@") {
      var error = "error"
      return error
    } else {
      return s
    }
}



export { validateString, };