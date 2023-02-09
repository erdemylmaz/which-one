const questionsDIV = document.querySelector('.questions');
let answerButtons;

class App {
    questions = [
        {
            answers: ["arkaplan", "arka plan"],
            correctAnswer: 1,
        },
        {
            answers: ["haftasonu", "hafta sonu"],
            correctAnswer: 1,
        },
        {
            answers: ["mahsul", "mahsül"],
            correctAnswer: 0,
        },
        {
            answers: ["gök bilim", "gökbilim"],
            correctAnswer: 0,
        },
        {
            answers: ["kamuoyu", "kamu oyu"],
            correctAnswer: 0,
        },
        {
            answers: ["köpekbalığı", "köpek balığı"],
            correctAnswer: 1,
        },
        {
            answers: ["devre dışı", "devredışı"],
            correctAnswer: 0,
        },
        {
            answers: ["ön izleme", "önizleme"],
            correctAnswer: 0,
        },
        {
            answers: ["yeryüzü", "yer yüzü"],
            correctAnswer: 0,
        },
        {
            answers: ["işbirliği", "iş birliği"],
            correctAnswer: 1,
        },
        {
            answers: ["aç gözlü", "açgözlü"],
            correctAnswer: 1,
        },
        {
            answers: ["fark etmek", "farketmek"],
            correctAnswer: 0,
        },
        {
            answers: ["aperatif", "aperitif"],
            correctAnswer: 1,
        },
        {
            answers: ["arife", "arefe"],
            correctAnswer: 0,
        },
        {
            answers: ["ataç", "ataş"],
            correctAnswer: 1,
        },
        {
            answers: ["bilader", "birader"],
            correctAnswer: 1,
        },
        {
            answers: ["bihaber", "birhaber"],
            correctAnswer: 0,
        },
        {
            answers: ["boğa yılanı", "boa yılanı"],
            correctAnswer: 1,
        },
        {
            answers: ["boy pos", "boy bos"],
            correctAnswer: 1,
        },
        {
            answers: ["cıva", "civa"],
            correctAnswer: 0,
        },
        {
            answers: ["doküman", "döküman"],
            correctAnswer: 0,
        },
        {
            answers: ["egsoz", "egzoz"],
            correctAnswer: 1,
        },
        {
            answers: ["erozyon", "erezyon"],
            correctAnswer: 0,
        },
        {
            answers: ["ardarda", "art arda"],
            correctAnswer: 1,
        },
        {
            answers: ["kuşkonmaz", "kuş konmaz"],
            correctAnswer: 0,
        },
        {
            answers: ["baş başa", "başbaşa"],
            correctAnswer: 0,
        },
        {
            answers: ["elele", "el ele"],
            correctAnswer: 1,
        },
        {
            answers: ["günügününe", "günü gününe"],
            correctAnswer: 1,
        },
        {
            answers: ["konuksever", "konuk sever"],
            correctAnswer: 0,
        },
        {
            answers: ["hayvan sever", "hayvansever"],
            correctAnswer: 1,
        },
        {
            answers: ["boyunbağı", "boyun bağı"],
            correctAnswer: 1,
        },
        {
            answers: ["çekidüzen", "çeki düzen"],
            correctAnswer: 0,
        },
        {
            answers: ["oldumolası", "oldum olası"],
            correctAnswer: 1,
        },
        {
            answers: ["Ayşe teyze", "Ayşe Teyze"],
            correctAnswer: 0,
        },
        {
            answers: ["hakettiği", "hak ettiği"],
            correctAnswer: 1,
        },
        {
            answers: ["Galata Köprüsü", "Galata köprüsü"],
            correctAnswer: 0,
        },
        {
            answers: ["Roma Hipodromu", "Roma hipodromu"],
            correctAnswer: 1,
        },
        {
            answers: ["At Meydanı", "At meydanı"],
            correctAnswer: 0,
        },
        {
            answers: ["Ayasofya Camisi", "Ayasofya camisi"],
            correctAnswer: 0,
        },
        {
            answers: ["Alman çeşmesi", "Alman Çeşmesi"],
            correctAnswer: 1,
        },
        {
            answers: ["karıncaincitmez", "karınca incitmez"],
            correctAnswer: 0,
        },
        {
            answers: ["çokbilmiş", "çok bilmiş"],
            correctAnswer: 0,
        },
        {
            answers: ["değerbilir", "değer bilir"],
            correctAnswer: 1,
        },
        {
            answers: ["Resmi Gazete", "Resmi gazete"],
            correctAnswer: 0,
        },
        {
            answers: ["Hürriyet Gazetesi", "Hürriyet gazetesi"],
            correctAnswer: 1,
        },
        {
            answers: ["Leyla ile Mecnun", "Leyla İle Mecnunu"],
            correctAnswer: 0,
        },
        {
            answers: ["Çanakkale Boğazının", "Çanakkale Boğazı'nın"],
            correctAnswer: 1,
        },
        {
            answers: ["Ankarada", "Ankara'da"],
            correctAnswer: 1,
        },
        {
            answers: ["KYK'da", "KYK'de"],
            correctAnswer: 1,
        },
        {
            answers: ["arz ederim", "arzederim"],
            correctAnswer: 0,
        },
        {
            answers: ["yalıçapkını", "yalı çapkını"],
            correctAnswer: 0,
        },
        {
            answers: ["camgöbeği", "cam göbeği"],
            correctAnswer: 0,
        },
        {
            answers: ["deniz yılanı", "denizyılanı"],
            correctAnswer: 0,
        },
        {
            answers: ["hiçkimse", "hiç kimse"],
            correctAnswer: 1,
        },
        {
            answers: ["pekçok", "pek çok"],
            correctAnswer: 1,
        },
        {
            answers: ["sıradışı", "sıra dışı"],
            correctAnswer: 1,
        },
    ];

    shuffleArray = () => {
        this.questions.sort(() => Math.random() - 0.5)
    }

    init = () => {
        this.questions.forEach((question, questionIndex) => {
            let div = document.createElement('div');
            div.className = "question";
            div.setAttribute('data-questionindex', questionIndex)
            div.setAttribute('data-correctanswer', question.correctAnswer);

            div.innerHTML = `
                <div class="answer" data-questionindex = "${questionIndex}" data-answerindex = "0" data-correctanswer = "${question.correctAnswer}">${question.answers[0]}</div>
                <div class="answer"  data-questionindex = "${questionIndex}" data-answerindex = "1" data-correctanswer = "${question.correctAnswer}">${question.answers[1]}</div> 
            `;

            questionsDIV.appendChild(div);

            answerButtons = document.querySelectorAll('.answer');
        });
    }

    selectAnswer = (e) => {
        let correctAnswer = e.target.dataset.correctanswer;
        let selectedAnswer = e.target.dataset.answerindex;

        if(selectedAnswer == correctAnswer) {
            e.target.classList.add('answer-correct');
        } else {
            e.target.classList.add('answer-wrong');
        }
    }
}

const app = new App();

app.shuffleArray();
app.init();

answerButtons.forEach((answerBTN) => {
    answerBTN.addEventListener('click', app.selectAnswer);
})