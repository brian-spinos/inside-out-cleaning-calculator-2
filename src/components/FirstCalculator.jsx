import React, {useState, useEffect} from 'react'

const FirstCalculator = () => {
	const [pagamentoTotal, setPagamentoTotal] = useState(0);
	const [pagamentoPorHora, setPagamentoPorHora] = useState(0);
	const [horasTrabalhadasH, setHorasTrabalhadasH] = useState(0);
	const [horasTrabalhadasM, setHorasTrabalhadasM] = useState(0);
	const [horasTrabalhadasS, setHorasTrabalhadasS] = useState(0);

	const pagamentoTotalChangeHandler = (e) => {
		setPagamentoTotal(e.target.value);
		
	};
	const pagamentoPorHoraChangeHandler = (e) => {
		setPagamentoPorHora(e.target.value);
	};

  /**
   * num = 0.3600000000000003
   */
	const fix = (num) => {
		return parseFloat((num).toFixed(10));
	};

	const safeNaN = (num) => {
		return isNaN(num) ? 0 : num
	};

	useEffect(() => {
		doCalculation(pagamentoTotal, pagamentoPorHora);
	}, [pagamentoTotal, pagamentoPorHora]);

	const doCalculation = (pagamentoTotal, pagamentoPorHora) => {
		let result = pagamentoTotal / pagamentoPorHora;

		let hourWithDecimals = fix(result);
		let hourDecimals = fix(hourWithDecimals % 1);
		let hoursOnly = fix(hourWithDecimals - hourDecimals);

		let minuteWithDecimals = hourDecimals * 60;
		let minuteDecimals = fix(minuteWithDecimals % 1);
		let minutesOnly = fix(minuteWithDecimals - minuteDecimals);

		let secondsWithDecimal = minuteDecimals * 60;
		let secondsDecimal = fix(secondsWithDecimal % 1);
		let secondsOnly = fix(secondsWithDecimal - secondsDecimal);

		setHorasTrabalhadasH(safeNaN(hoursOnly));
		setHorasTrabalhadasM(safeNaN(minutesOnly));
		setHorasTrabalhadasS(safeNaN(secondsOnly));
	};

	return(
		<>
		<p>Pagamento total</p>
		<input type="number" value={pagamentoTotal} onChange={pagamentoTotalChangeHandler} />
		<p>Pagamento/Hora</p>
		<input type="number" value={pagamentoPorHora} onChange={pagamentoPorHoraChangeHandler} />
		<p>Horas trabalhadas: {`${horasTrabalhadasH}:${horasTrabalhadasM}:${horasTrabalhadasS}`} Hrs</p>
		</>
	);
};

export default FirstCalculator;