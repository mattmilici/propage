const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
};

//Type Method
TypeWriter.prototype.type = function() {
    //current index of word

    const current = this.wordIndex % words.length;

    //get full text of current word
    const fullTxt = words[current];

    //check if deleting
    if (this.isDeleting) {
        //remove
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        //add
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // insert txt into element
    $("#txt-type").text(this.txt);

    //Inital Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }
    //check to see if word is complete

    if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.wordIndex++;
        //pause before start typing
        typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
};

//Init on DOM load
document.addEventListener("DOMContentLoaded", init);

//Init App
function init() {
    txtElement = document.querySelector("#txt-type");
    words = JSON.parse($("#txt-type").attr("data-words"));
    wait = txtElement.getAttribute("data-wait");
    //Init TypeWriter
    new TypeWriter((txtElement, words, wait));
}