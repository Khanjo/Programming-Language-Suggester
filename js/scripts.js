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
            document.querySelector("h2#c").removeAttribute("class")
        }
    });
});