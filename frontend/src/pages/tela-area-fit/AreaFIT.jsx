//componentes
import Navbar from "../../components/Navbar/Navbar";
import TreinoCard from "../../components/TreinosCard/TreinosCard";
import FooterComp from "../../components/Footer/Footer";
import NotLoggedInAreaFIT from "./NotLoggedAF";
//css
import "./AreaFIT.css";
//react
import { Link } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { clearExercises } from "../../redux/exercises/slice";
import { addForms } from "../../redux/form-treino/slice";
//id gen
import { v4 as idGen } from "uuid";
//axios
import { getAnamnese } from "../../redux/anamnese/slice";
import { useEffect } from "react";

function AreaFIT() {
	const dispatch = useDispatch();
	const currentUser = useSelector((rootReducer) => rootReducer.user);
	const trainings = useSelector((rootReducer) => rootReducer.trainings);
	
	useEffect(() => {
		dispatch(clearExercises());
		dispatch(getAnamnese({
			userId: currentUser.user._id,
			token: currentUser.logged
		}));
	}, [])

	if (!currentUser.logged) {
		return <NotLoggedInAreaFIT />;
	}

	return (
		<div className="page-container"> {/* Classe adicionada */}
			<div className="content-wrap"> {/* Classe adicionada */}
				<Navbar />
				<div className="fit-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
					<h1 className="display-4">Área FIT</h1>
					<p className="lead">
						Monte seus treinos ideais ou visualize seus treinos montados pelo personal
					</p>
				</div>
				<div className="container mt-2" id="container-card">
					<div className="row justify-content-center" id="row-card">
						{currentUser.logged &&
							trainings.map((treino, index) => (
								<div key={index} className="col mb-3">
									<TreinoCard
										title={treino.title}
										description={treino.descricao}
										type={treino.type}
										id={treino._id}
									/>
								</div>
							))}
					</div>
				</div>
				<Link to={"/add-treinos"} className="link-monte-treino">
					<button
						className="monte-button"
						onClick={() => {
							dispatch(
								addForms({
									userId: currentUser.user._id,
									infos: {},
								})
							);
						}}
					>
						Monte seu treino
					</button>
				</Link>
				<div className="espacamento"></div>
			</div>
			<FooterComp />
		</div>
	);
}


export default AreaFIT;
