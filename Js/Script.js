// Accessing the Document so as to manipulate its Content
var submit = document.getElementById("submit");
var input = document.getElementById("input");
var output = document.getElementById("output");

//Declaring Global Variables
var new_string = "";
var duplicates = "";
var duplicate_void = "";
var same_letters = "";
var count = 0;

//Event Listerner to Initiate the Check Function When button is clicked
submit.addEventListener("click", check);

/**
 * @description the function checks for duplicated words in the string, 
 * it retains only one of those words in the string, then calls the sort_words()
 * function which compares the letters in the words.
 */
function check() {
    input_string = input.value;
    var input_string_array = input_string.split(" ");
    //checks through the Input String and removes all duplicates, retaining a single occurence of such duplicated word
    for (let i = 0; i < input_string_array.length; i++) {
        if (duplicates.search(input_string_array[i]) == -1) {
            if (input_string.lastIndexOf(input_string_array[i]) == input_string.indexOf(input_string_array[i])) {
                new_string += " " + input_string_array[i];
            } else {
                duplicates += " " + input_string_array[i];
            }
        }
    }
    sort_words();
}

/**
 * @description function converts the input string in to an array for easy sorting
 * and then scan through each word while comparing letters. it retrieves words that
 * has the same letters but arranged differently
 */
function sort_words() {
    duplicate_void = new_string + duplicates;
    //converts the input void of duplicates into an array
    var duplicate_void_array = duplicate_void.split(" ");
    var array_length = duplicate_void_array.length;
    //checks through the array comparing each word to those after it
    for (let i = 0; i < array_length; i++) {
        for (let j = (i + 1); j < array_length; j++) {
            //checks to ensure that only words with equal length are compared in order to reduce processing time
            if (duplicate_void_array[i].length == duplicate_void_array[j].length) {
                //compares two words alphabet by alphabet while count is incremented each time a letter is found in both words
                for (let k = 0; k < duplicate_void_array[i].length; k++) {
                    if ((duplicate_void_array[j].indexOf(duplicate_void_array[i].charAt(k)) != -1)) {
                        count++
                    } else count = 0;
                    //both words are saved when count equals the length of both words
                    if (count == duplicate_void_array[i].length) {
                        same_letters += duplicate_void_array[i] + " and " + duplicate_void_array[j] + " contain the same letters \n";
                        count = 0;
                    }
                }
            }
            output.value = same_letters;
        }
    }
}
