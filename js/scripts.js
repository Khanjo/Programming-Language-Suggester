window.addEventListener("load", function (event) {
    let form = document.querySelector("form");
    let q1 = document.querySelector(".color");
    let q2 = document.querySelector(".climate");
    let q3 = document.querySelector(".subject");
    let q4 = document.querySelector(".vacation");
    let q5 = document.querySelector(".pastime");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const color = parseInt(form.querySelector < q1 > ("input:radio[name=color]:checked").valueOf());
        const climate = parseInt(form.querySelector < q2 > ("input:radio[name=climate]:checked").valueOf());
        const subject = parseInt(form.querySelector < q3 > ("input:radio[name=subject]:checked").valueOf());
        const vacation = parseInt(form.querySelector < q4 > ("input:radio[name=vacation]:checked").valueOf());
        const pastime = parseInt(form.querySelector < q5 > ("input:radio[name=pastime]:checked").valueOf());

        return color, climate, subject, vacation, pastime
    });
});