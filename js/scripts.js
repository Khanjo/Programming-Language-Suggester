window.addEventListener("load", function (event) {
    let form = document.querySelector("form");


    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const color = parseInt(document.querySelector('input[name="color"]:checked').value);
        const climate = parseInt(document.querySelector('input[name="climate"]:checked').value);
        const subject = parseInt(document.querySelector('input[name="subject"]:checked').value);
        const vacation = parseInt(document.querySelector('input[name="vacation"]:checked').value);
        const pastime = parseInt(document.querySelector('input[name="pastime"]:checked').value);

        let result = color + climate + subject + vacation + pastime

        if (result <= 8) {
            document.querySelector("h2#c").removeAttribute("class");
        } else if (9 <= result && result <= 11) {
            document.querySelector("h2#javascript").removeAttribute("class");
        } else if (12 <= result && result <= 15) {
            document.querySelector("h2#python").removeAttribute("class");
        } else if (16 <= result && result <= 18) {
            document.querySelector("h2#go").removeAttribute("class");
        } else if (19 <= result && result <= 22) {
            document.querySelector("h2#ruby").removeAttribute("class");
        } else if (23 <= result && result <= 25) {
            document.querySelector("h2#rust").removeAttribute("class");
        } else {
            document.querySelector("h2#swift").removeAttribute("class");
        }
    });
});