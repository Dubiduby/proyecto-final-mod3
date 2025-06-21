//14 - Escribir un programa que verifique si dos strings son anagramas.

function isAnagram(string1, string2) {
  string1 = string1.split("");
  string2 = string2.split("");

  return string1.every((n) => string2.some((i) => i === n));
}

console.log(isAnagram("roma", "amor"));
