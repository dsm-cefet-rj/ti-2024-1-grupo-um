const constants = {
    formFields: [
        {
            component: "input",
            classes: "",
            id: "weigth",
            type: "number",
            text: <b>Seu peso:</b>,
            placeholder: "",
        },
        {
            component: "input",
            classes: "",
            id: "age",
            type: "date",
            text: <b>Data de nascimento:</b>,
            placeholder: "Digite o seu peso",
        },
        {
            component: "textArea",
            classes: "",
            id: "motivation",
            type: "text",
            text: <b>Motivação/Objetivo</b>,
            placeholder: "Ganhar peso, perder peso, ganhar músculos ...",
        },
        {
            component: "radio",
            classes: "",
            id: "activity-freq",
            name: "frequency",
            text: <b>Com que frequência faz atividade física?</b>,
            options: [
                {
                    id: "frequency-option1",
                    value: "0",
                    text: "Nenhuma",
                },
                {
                    id: "frequency-option2",
                    value: "3",
                    text: "até 3 vezes por semana",
                },
                {
                    id: "frequency-option3",
                    value: "4",
                    text: "mais de 4 vezes na semana",
                },
            ],
        },
        {
            component: "input",
            classes: "",
            id: "exam",
            type: "date",
            text: <b>Data do ultimo exame médico ou físico:</b>,
            placeholder: "",
        },
        {
            component: "textArea",
            classes: "",
            id: "diet",
            type: "text",
            text: <b>Faz dieta? Se sim, para qual motivo e há quanto tempo?</b>,
            placeholder: "",
        },
        {
            component: "textArea",
            classes: "",
            id: "observacoes",
            type: "text",
            text: <b>Observações:</b>,
            placeholder: "(Opcional) Digite observações sobre o treino",
        },
    ]
}

export default constants;