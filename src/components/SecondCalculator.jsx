import React, {useState, useEffect} from 'react'

const SecondCalculator = () => {

	const [pagamentoPorHora, setPagamentoPorHora] = useState(0);
	const [horasTrabalhadasH, setHorasTrabalhadasH] = useState(0);
	const [horasTrabalhadasM, setHorasTrabalhadasM] = useState(0);
	const [pagamentoTotal, setPagamentoTotal] = useState(0);

	const pagamentoPorHoraChangeHandler = (e) => {
		setPagamentoPorHora(e.target.value);
	};

	const horasTrabalhadasHChangeHandler = (e) => {
		setHorasTrabalhadasH(e.target.value);
	};

	const horasTrabalhadasMChangeHandler = (e) => {
		setHorasTrabalhadasM(e.target.value);
	};

	/**
   * num = 0.3600000000000003
   */
	const fix = (num) => {
		return parseFloat((num).toFixed(10));
	};

	const fix2 = (num) => {
		return parseFloat((num).toFixed(2));
	};

	const safeNaN = (num) => {
		return isNaN(num) ? 0 : num
	};

	useEffect(() => {
		let _pagamentoPorHora = parseFloat(pagamentoPorHora);
		let _horasTrabalhadasH = parseFloat(horasTrabalhadasH);
		let _horasTrabalhadasM = parseFloat(horasTrabalhadasM);

		let minutesToDecimal = fix(_horasTrabalhadasM / 60);
		let hoursToDecimal = _horasTrabalhadasH + minutesToDecimal;
		let result = _pagamentoPorHora * (_horasTrabalhadasH + minutesToDecimal);

		setPagamentoTotal(fix2(safeNaN(result)));
	}, [pagamentoPorHora, horasTrabalhadasH, horasTrabalhadasM]);

	return(
		<>
			<p>Payment/Hr</p>
			<input type="number" value={pagamentoPorHora} onChange={pagamentoPorHoraChangeHandler}/>

			<p>Hours worked</p>
			<input type="number" value={horasTrabalhadasH} onChange={horasTrabalhadasHChangeHandler} />
			<input type="number" value={horasTrabalhadasM} onChange={horasTrabalhadasMChangeHandler} />

			<p>Total payment: ${pagamentoTotal}</p>
		</>);
};

export default SecondCalculator;