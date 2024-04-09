import { createSlice } from "@reduxjs/toolkit";
import arnoldImage from "./../../images/PersonalImages/arnold.png";
import chicoImage from "./../../images/PersonalImages/chicoin.png";
import luizImage from "./../../images/PersonalImages/luiz.png";
import glaucoImage from "./../../images/PersonalImages/glauco.png";
import viniImage from "./../../images/PersonalImages/vinicius.png";

const initialState = [
        {
            id: 1,
            nome: "Luiz",
            idade: 20,
            descricao: "Especialista em finalização",
            formacao: "UFRJ - Educação Física",
            cidade: "Rio de Janeiro, RJ",
            rating: 4,
            biografia: "Ea reprehenderit dolore id itaque voluptatum sed eius voluptatem et natus omnis qui deserunt illo. Qui aperiam sapiente in praesentium eius ut incidunt praesentium in tempore sint est molestiae repudiandae hic veritatis eveniet. Eum ducimus nihil ab dolor eaque et mollitia corporis est commodi voluptas sit quisquam praesentium.",
            image: luizImage
        },
        {
            id: 2,
            nome: "Arnold Schwarzenegger",
            idade: 76,
            descricao: "3x Olympia Winner",
            formacao: "UFRJ - Educação Física",
            cidade: "California, US",
            rating: 5 ,
            biografia: "Ea reprehenderit dolore id itaque voluptatum sed eius voluptatem et natus omnis qui deserunt illo. Qui aperiam sapiente in praesentium eius ut incidunt praesentium in tempore sint est molestiae repudiandae hic veritatis eveniet. Eum ducimus nihil ab dolor eaque et mollitia corporis est commodi voluptas sit quisquam praesentium.",
            image: arnoldImage
        },
        {
            id: 3,
            nome: "Glauco Amorim",
            idade: 45,
            descricao: "Treinador de alta performance",
            formacao: "UFRJ - Educação Física",
            cidade: "Niteroi, RJ",
            rating: 3,
            biografia: "Ea reprehenderit dolore id itaque voluptatum sed eius voluptatem et natus omnis qui deserunt illo. Qui aperiam sapiente in praesentium eius ut incidunt praesentium in tempore sint est molestiae repudiandae hic veritatis eveniet. Eum ducimus nihil ab dolor eaque et mollitia corporis est commodi voluptas sit quisquam praesentium.",
            image: glaucoImage
        },
        {
            id: 4,
            nome:"Vinicius",
            idade: 20,
            descricao:"Treinador",
            formacao: "UFRJ - Educação Física",
            cidade: "Rio de Janeiro, RJ",
            rating: 1,
            biografia: "Ea reprehenderit dolore id itaque voluptatum sed eius voluptatem et natus omnis qui deserunt illo. Qui aperiam sapiente in praesentium eius ut incidunt praesentium in tempore sint est molestiae repudiandae hic veritatis eveniet. Eum ducimus nihil ab dolor eaque et mollitia corporis est commodi voluptas sit quisquam praesentium.",
            image: viniImage
        },
        {
            id: 5,
            nome:"Chico",
            idade: 25,
            descricao:"Aquariano Nato",
            formacao: "UFRJ - Educação Física",
            cidade: "Rio de Janeiro, RJ",
            rating: 2,
            biografia: "Ea reprehenderit dolore id itaque voluptatum sed eius voluptatem et natus omnis qui deserunt illo. Qui aperiam sapiente in praesentium eius ut incidunt praesentium in tempore sint est molestiae repudiandae hic veritatis eveniet. Eum ducimus nihil ab dolor eaque et mollitia corporis est commodi voluptas sit quisquam praesentium.",
            image: chicoImage
        },
        {
            id: 1,
            nome: "Ana",
            idade: 30,
            descricao: "Atleta profissional",
            formacao: "USP - Educação Física",
            cidade: "São Paulo, SP",
            rating: 4,
            biografia: "Sou uma atleta apaixonada por esportes desde a infância. Dedico minha vida ao treinamento e à competição em várias modalidades esportivas.",
        },
        {
            id: 2,
            nome: "Carlos",
            idade: 35,
            descricao: "Treinador de musculação",
            formacao: "UFMG - Educação Física",
            cidade: "Belo Horizonte, MG",
            rating: 3,
            biografia: "Tenho vasta experiência como treinador de musculação, ajudando pessoas a alcançarem seus objetivos de condicionamento físico e saúde.",
        },
        {
            id: 3,
            nome: "Fernanda",
            idade: 28,
            descricao: "Professora de yoga",
            formacao: "UNESP - Educação Física",
            cidade: "Campinas, SP",
            rating: 5,
            biografia: "Minha paixão pelo yoga começou na faculdade e desde então venho ensinando e compartilhando os benefícios dessa prática milenar com meus alunos.",
        },
        {
            id: 4,
            nome: "Pedro",
            idade: 32,
            descricao: "Personal trainer",
            formacao: "UFRGS - Educação Física",
            cidade: "Porto Alegre, RS",
            rating: 4,
            biografia: "Como personal trainer, meu objetivo é ajudar meus clientes a alcançarem seus objetivos de forma segura e eficaz, adaptando os treinos às suas necessidades individuais.",
        },
];

const personalSlice = createSlice({
    name:"personal",
    initialState,
    reducers: {
        addPersonal: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addPersonal } = personalSlice.actions;

export default personalSlice.reducer;