/* =========================
   ELEMENTOS
========================= */

const button =
    document.querySelector(".intro-btn");

const intro =
    document.querySelector(".intro");

const race =
    document.querySelector(".race");

const surprise =
    document.querySelector(".surprise");


/* =========================
   AUDIO DEL MOTOR
========================= */

const audio =
    new Audio("engine-start.mp3");

audio.volume = 1;


/* =========================
   MÚSICA DE FONDO
========================= */

const music =
    new Audio("music.mp3");

music.loop = true;
music.volume = 0.35;


/* =========================
   BOTÓN DE SONIDO
========================= */

const soundButton =
    document.createElement("button");

soundButton.textContent =
    "🔊 ACTIVAR SONIDO";

soundButton.className =
    "sound-button";

document.body.appendChild(
    soundButton
);


/* =========================
   ACTIVAR MÚSICA
========================= */

soundButton.addEventListener(
    "click",
    () => {

        music.play()
            .then(() => {

                soundButton.textContent =
                    "🔊 SONIDO ACTIVADO";

                soundButton.classList.add(
                    "active"
                );

                setTimeout(() => {

                    soundButton.classList.add(
                        "hide"
                    );

                }, 800);

            })
            .catch((error) => {

                console.log(
                    "No se pudo reproducir la música:",
                    error
                );

            });

    }
);


/* =========================
   BOTÓN PRINCIPAL
========================= */

button.addEventListener(
    "click",
    () => {

        /* MOTOR */

        audio.currentTime = 0;

        audio.play();


        /* OCULTAR INTRO */

        intro.classList.add(
            "hide"
        );


        /* =========================
           ESCENA DE CARRERA
        ========================= */

        setTimeout(() => {

            race.classList.add(
                "show"
            );

            createRaceCar();

        }, 700);


        /* =========================
           SORPRESA
        ========================= */

        setTimeout(() => {

            race.classList.remove(
                "show"
            );

            surprise.classList.add(
                "show"
            );

            createParticles();

            createFlowers();

            createButterflies();

            createCars();

        }, 3500);

    }
);


/* ==================================================
   DIBUJAR AUTO
================================================== */

function createCar(
    color,
    secondary,
    isFiat147 = false
) {

    const car =
        document.createElement("div");

    car.classList.add(
        "moving-car"
    );

    car.dataset.carType = isFiat147
        ? "fiat"
        : color;


    /* ==============================================
       FIAT 147
    ============================================== */

    if (isFiat147) {

        car.innerHTML = `

        <svg
            viewBox="0 0 340 170"
            xmlns="http://www.w3.org/2000/svg"
        >

            <ellipse
                cx="170"
                cy="145"
                rx="125"
                ry="9"
                fill="#61ddff"
                opacity="0.35"
            />

            <path
                d="
                M35 116
                L42 91
                L72 86
                L95 52
                Q103 40 121 38
                L218 38
                Q238 39 250 53
                L274 84
                L300 91
                L307 116
                Z
                "
                fill="#f4f4f4"
                stroke="#ffffff"
                stroke-width="4"
            />

            <path
                d="
                M91 84
                L108 52
                Q114 44 127 43
                L212 43
                Q229 44 240 57
                L257 84
                Z
                "
                fill="#dfe7ea"
                stroke="#9da9ae"
                stroke-width="2"
            />

            <path
                d="
                M143 47
                L210 47
                Q224 48 235 60
                L249 81
                L151 81
                Z
                "
                fill="#243a45"
                stroke="#8eeaff"
                stroke-width="2"
            />

            <path
                d="
                M111 52
                L138 47
                L147 81
                L93 81
                Z
                "
                fill="#304954"
                stroke="#8eeaff"
                stroke-width="2"
            />

            <line
                x1="148"
                y1="47"
                x2="157"
                y2="81"
                stroke="#aebbc0"
                stroke-width="3"
            />

            <path
                d="
                M45 90
                Q165 75 294 91
                "
                fill="none"
                stroke="#c4cdd0"
                stroke-width="3"
            />

            <rect
                x="30"
                y="109"
                width="22"
                height="10"
                rx="3"
                fill="#252b2f"
            />

            <rect
                x="291"
                y="109"
                width="22"
                height="10"
                rx="3"
                fill="#252b2f"
            />

            <rect
                x="281"
                y="91"
                width="19"
                height="12"
                rx="4"
                fill="#fffbd1"
                stroke="#ffffff"
                stroke-width="2"
            />

            <rect
                x="43"
                y="91"
                width="17"
                height="11"
                rx="3"
                fill="#e83b3b"
            />

            <path
                d="
                M160 84
                L160 113
                "
                stroke="#b7c0c3"
                stroke-width="2"
            />

            <rect
                x="169"
                y="88"
                width="13"
                height="3"
                rx="2"
                fill="#777f83"
            />

            <circle
                cx="82"
                cy="119"
                r="27"
                fill="#080b0d"
                stroke="#1e2529"
                stroke-width="4"
            />

            <circle
                cx="82"
                cy="119"
                r="14"
                fill="#11161a"
                stroke="#343c40"
                stroke-width="3"
            />

            <circle
                cx="82"
                cy="119"
                r="5"
                fill="#5b666b"
            />

            <circle
                cx="257"
                cy="119"
                r="27"
                fill="#080b0d"
                stroke="#1e2529"
                stroke-width="4"
            />

            <circle
                cx="257"
                cy="119"
                r="14"
                fill="#11161a"
                stroke="#343c40"
                stroke-width="3"
            />

            <circle
                cx="257"
                cy="119"
                r="5"
                fill="#5b666b"
            />

            <path
                d="
                M67 88
                Q165 69 266 88
                "
                fill="none"
                stroke="#ffffff"
                stroke-width="3"
                opacity="0.75"
            />

        </svg>

        `;

        return car;
    }


    /* ==============================================
       AUTOS HOT WHEELS
    ============================================== */

    car.innerHTML = `

    <svg
        viewBox="0 0 300 150"
        xmlns="http://www.w3.org/2000/svg"
    >

        <ellipse
            cx="150"
            cy="132"
            rx="110"
            ry="9"
            fill="#65dcff"
            opacity="0.35"
        />

        <path
            d="
            M25 105
            L38 78
            L78 72
            L105 43
            Q115 32 140 31
            L190 31
            Q215 32 230 48
            L260 72
            L278 80
            L285 105
            Z
            "
            fill="${color}"
            stroke="#ffffff"
            stroke-width="3"
        />

        <path
            d="
            M91 70
            L116 43
            Q124 36 141 36
            L188 36
            Q207 37 220 52
            L237 70
            Z
            "
            fill="#162936"
            stroke="#8eeaff"
            stroke-width="2"
        />

        <path
            d="
            M143 40
            L187 40
            Q201 41 213 54
            L222 67
            L158 67
            Z
            "
            fill="#66dfff"
            opacity="0.75"
        />

        <path
            d="
            M116 45
            L139 40
            L153 67
            L101 67
            Z
            "
            fill="#4db7d6"
            opacity="0.75"
        />

        <path
            d="
            M45 88
            Q145 68 263 88
            "
            fill="none"
            stroke="${secondary}"
            stroke-width="10"
        />

        <path
            d="
            M62 91
            Q90 76 120 91
            Q100 88 91 103
            Q80 91 62 91
            "
            fill="${secondary}"
        />

        <text
            x="138"
            y="91"
            text-anchor="middle"
            font-size="20"
            font-family="Arial"
            font-weight="bold"
            fill="#ffffff"
            transform="skewX(-10)"
        >
            HW
        </text>

        <rect
            x="27"
            y="91"
            width="14"
            height="8"
            rx="3"
            fill="#ff465c"
        />

        <rect
            x="265"
            y="83"
            width="13"
            height="8"
            rx="3"
            fill="#fff8a0"
        />

        <circle
            cx="75"
            cy="108"
            r="25"
            fill="#101419"
            stroke="#ffffff"
            stroke-width="3"
        />

        <circle
            cx="75"
            cy="108"
            r="14"
            fill="${secondary}"
            stroke="#303b43"
            stroke-width="4"
        />

        <circle
            cx="75"
            cy="108"
            r="5"
            fill="#e8faff"
        />

        <circle
            cx="230"
            cy="108"
            r="25"
            fill="#101419"
            stroke="#ffffff"
            stroke-width="3"
        />

        <circle
            cx="230"
            cy="108"
            r="14"
            fill="${secondary}"
            stroke="#303b43"
            stroke-width="4"
        />

        <circle
            cx="230"
            cy="108"
            r="5"
            fill="#e8faff"
        />

    </svg>

    `;

    return car;
}


/* ==================================================
   CREAR LOS 4 AUTOS
================================================== */

function createCars() {

    const container =
        document.querySelector(".cars");

    container.innerHTML = "";


    const car1 =
        createCar(
            "#e52b3c",
            "#ff9b25"
        );

    car1.classList.add(
        "car-one"
    );

    container.appendChild(
        car1
    );


    const car2 =
        createCar(
            "#42b83f",
            "#b8ff38"
        );

    car2.classList.add(
        "car-two"
    );

    container.appendChild(
        car2
    );


    const car3 =
        createCar(
            "#6938d9",
            "#c789ff"
        );

    car3.classList.add(
        "car-three"
    );

    container.appendChild(
        car3
    );


    const fiat147 =
        createCar(
            "#f4f4f4",
            "#111111",
            true
        );

    fiat147.classList.add(
        "car-four"
    );

    fiat147.style.filter =
        `
        drop-shadow(
            0 0 8px
            rgba(255,255,255,0.9)
        )
        drop-shadow(
            0 8px 12px
            rgba(0,0,0,0.8)
        )
        `;

    container.appendChild(
        fiat147
    );
}


/* ==================================================
   AUTO DE CARRERA
================================================== */

function createRaceCar() {

    const container =
        document.querySelector(
            ".race-car"
        );

    container.innerHTML = "";


    const car =
        createCar(
            "#147be8",
            "#ff6b21"
        );

    container.appendChild(
        car
    );
}


/* =========================
   PARTÍCULAS
========================= */

function createParticles() {

    const container =
        document.querySelector(
            ".particles"
        );

    container.innerHTML = "";


    for (
        let i = 0;
        i < 55;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );

        particle.classList.add(
            "particle"
        );


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            3 +
            Math.random() * 5 +
            "s";


        particle.style.animationDelay =
            Math.random() * 5 +
            "s";


        const size =
            3 +
            Math.random() * 5;


        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";


        container.appendChild(
            particle
        );

    }
}


/* =========================
   FLORES
========================= */

function createFlowers() {

    const container =
        document.querySelector(
            ".flowers"
        );

    container.innerHTML = "";


    const flowerColors = [

        ["#a88cff", "#8edcff"],

        ["#ff82c8", "#a88cff"],

        ["#8edcff", "#ffffff"],

        ["#b6ff75", "#8edcff"]

    ];


    for (
        let i = 0;
        i < 24;
        i++
    ) {

        const flower =
            document.createElement(
                "div"
            );

        flower.classList.add(
            "flower"
        );


        const colors =
            flowerColors[
                Math.floor(
                    Math.random() *
                    flowerColors.length
                )
            ];


        flower.innerHTML = `

            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >

                <ellipse
                    cx="50"
                    cy="25"
                    rx="17"
                    ry="27"
                    fill="${colors[0]}"
                />

                <ellipse
                    cx="75"
                    cy="42"
                    rx="17"
                    ry="27"
                    transform="rotate(60 75 42)"
                    fill="${colors[0]}"
                />

                <ellipse
                    cx="72"
                    cy="70"
                    rx="17"
                    ry="27"
                    transform="rotate(120 72 70)"
                    fill="${colors[0]}"
                />

                <ellipse
                    cx="28"
                    cy="70"
                    rx="17"
                    ry="27"
                    transform="rotate(-120 28 70)"
                    fill="${colors[0]}"
                />

                <ellipse
                    cx="25"
                    cy="42"
                    rx="17"
                    ry="27"
                    transform="rotate(-60 25 42)"
                    fill="${colors[0]}"
                />

                <circle
                    cx="50"
                    cy="50"
                    r="16"
                    fill="${colors[1]}"
                    stroke="#ffffff"
                    stroke-width="3"
                />

                <circle
                    cx="50"
                    cy="50"
                    r="7"
                    fill="#fff7a0"
                />

            </svg>

        `;


        flower.style.left =
            Math.random() * 94 +
            "%";

        flower.style.top =
            Math.random() * 88 +
            "%";


        flower.style.animationDelay =
            Math.random() * 4 +
            "s";


        container.appendChild(
            flower
        );

    }
}


/* =========================
   MARIPOSAS
========================= */

function createButterflies() {

    const container =
        document.querySelector(
            ".butterflies"
        );

    container.innerHTML = "";


    for (
        let i = 0;
        i < 10;
        i++
    ) {

        const butterfly =
            document.createElement(
                "div"
            );


        butterfly.classList.add(
            "butterfly"
        );


        butterfly.style.top =
            (
                10 +
                Math.random() * 75
            ) + "%";


        butterfly.style.left =
            Math.random() * 100 +
            "%";


        butterfly.style.animationDelay =
            Math.random() * 8 +
            "s";


        butterfly.style.scale =
            0.6 +
            Math.random() * 0.7;


        container.appendChild(
            butterfly
        );

    }
    /* =========================
   PANTALLAS SECRETAS
========================= */

const secretScreen =
    document.querySelector("#secretScreen");

const secretMessage =
    document.querySelector(".secret-message");

const secretNumber =
    document.querySelector(".secret-number");


const secretMessages = {

    red: {
        number: "01",
        text:
            "Hay personas que hacen que los días comunes se vuelvan recuerdos especiales."
    },

    green: {
        number: "02",
        text:
            "Gracias por cada momento, cada risa y cada recuerdo que hiciste especial."
    },

    purple: {
        number: "03",
        text:
            "Nunca te olvides de lo mucho que valés y de todo lo lindo que dejás en los demás."
    },

    fiat: {
        number: "04",
        text:
            "Y este último es para vos... porque algunas cosas no necesitan explicación, solamente sentirse."
    }

};


/* =========================
   ABRIR PANTALLA SECRETA
========================= */

function openSecretScreen(type) {

    const data =
        secretMessages[type];

    if (!data) return;

    secretNumber.textContent =
        "SORPRESA " + data.number;

    secretMessage.textContent =
        data.text;

    secretScreen.classList.add(
        "show"
    );

}


/* =========================
   TOCAR LOS AUTOS
========================= */

document.addEventListener(
    "click",
    (event) => {

        const car =
            event.target.closest(
                ".moving-car"
            );

        if (!car) return;

        const type =
            car.classList.contains("car-one")
                ? "red"
                : car.classList.contains("car-two")
                    ? "green"
                    : car.classList.contains("car-three")
                        ? "purple"
                        : car.classList.contains("car-four")
                            ? "fiat"
                            : null;

        if (type) {
            openSecretScreen(type);
        }

    }
);


/* =========================
   VOLVER TOCANDO
   CUALQUIER PARTE
========================= */

secretScreen.addEventListener(
    "click",
    () => {

        secretScreen.classList.remove(
            "show"
        );

    }
);

}