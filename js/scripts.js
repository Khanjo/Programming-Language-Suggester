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
            document.getElementById("javascript").className = "hidden";
            document.getElementById("python").className = "hidden";
            document.getElementById("go").className = "hidden";
            document.getElementById("ruby").className = "hidden";
            document.getElementById("rust").className = "hidden";
            document.getElementById("swift").className = "hidden";
            form.reset();
        } else if (9 <= result && result <= 11) {
            document.querySelector("h2#javascript").removeAttribute("class");
            document.getElementById("c").className = "hidden";
            document.getElementById("python").className = "hidden";
            document.getElementById("go").className = "hidden";
            document.getElementById("ruby").className = "hidden";
            document.getElementById("rust").className = "hidden";
            document.getElementById("swift").className = "hidden";
            form.reset();
        } else if (12 <= result && result <= 15) {
            document.querySelector("h2#python").removeAttribute("class");
            document.getElementById("c").className = "hidden";
            document.getElementById("javascript").className = "hidden";
            document.getElementById("go").className = "hidden";
            document.getElementById("ruby").className = "hidden";
            document.getElementById("rust").className = "hidden";
            document.getElementById("swift").className = "hidden";
            form.reset();
        } else if (16 <= result && result <= 18) {
            document.querySelector("h2#go").removeAttribute("class");
            document.getElementById("c").className = "hidden";
            document.getElementById("javascript").className = "hidden";
            document.getElementById("python").className = "hidden";
            document.getElementById("ruby").className = "hidden";
            document.getElementById("rust").className = "hidden";
            document.getElementById("swift").className = "hidden";
            form.reset();
        } else if (19 <= result && result <= 22) {
            document.querySelector("h2#ruby").removeAttribute("class");
            document.getElementById("c").className = "hidden";
            document.getElementById("javascript").className = "hidden";
            document.getElementById("python").className = "hidden";
            document.getElementById("go").className = "hidden";
            document.getElementById("rust").className = "hidden";
            document.getElementById("swift").className = "hidden";
            form.reset();
        } else if (23 <= result && result <= 25) {
            document.querySelector("h2#rust").removeAttribute("class");
            document.getElementById("c").className = "hidden";
            document.getElementById("javascript").className = "hidden";
            document.getElementById("python").className = "hidden";
            document.getElementById("go").className = "hidden";
            document.getElementById("ruby").className = "hidden";
            document.getElementById("swift").className = "hidden";
            form.reset();
        } else {
            document.querySelector("h2#swift").removeAttribute("class");
            document.querySelector("h2#rust").removeAttribute("class");
            document.getElementById("c").className = "hidden";
            document.getElementById("javascript").className = "hidden";
            document.getElementById("python").className = "hidden";
            document.getElementById("go").className = "hidden";
            document.getElementById("ruby").className = "hidden";
            document.getElementById("rust").className = "hidden";
            form.reset();
        }
    });
});