// String Rotation

// Create a function that takes in 2 strings as parameters.
// Return true if the strings are rotations of each other. Otherwise, return false.

// Examples: The following sets of strings are rotations:
// "rotation"  "tationro" "tionrota";
// "javascript"  "scriptjava"  "iptjavascr";
// "RotateMe"  "teMeRota"  "eRotateM"

function stringRotation(str1, str2) {
    return str1.split("").sort().join("")===str2.split("").sort().join("");
}

console.log(stringRotation("RotateMe", "teMeRota"));
// -> true