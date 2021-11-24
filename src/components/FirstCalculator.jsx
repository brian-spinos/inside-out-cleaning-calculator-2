import React, {useState, useEffect} from 'react'

const FirstCalculator = () => {
	const [pagamentoTotal, setPagamentoTotal] = useState('');
	const [pagamentoPorHora, setPagamentoPorHora] = useState('');
	const [horasTrabalhadasH, setHorasTrabalhadasH] = useState('');
	const [horasTrabalhadasM, setHorasTrabalhadasM] = useState('');
	const [horasTrabalhadasS, setHorasTrabalhadasS] = useState('');

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
		// .toFixed(2) converts to string <-- WARNING
		return parseFloat((num).toFixed(10));
	};

	const safeHourDisplay = (num) => {
		if(isNaN(num) || num == null || num == 0){
			return '00';
		}

		if(num < 10){
			return `0${num}`;
		}

		return num;
	};

	useEffect(() => {
		doCalculation(pagamentoTotal, pagamentoPorHora);
	}, [pagamentoTotal, pagamentoPorHora]);

	const doCalculation = (pagamentoTotal, pagamentoPorHora) => {
		let result = pagamentoTotal / pagamentoPorHora; // TODO: use fix() ?

		let hourWithDecimals = fix(result);
		let hourDecimals = fix(hourWithDecimals % 1);
		let hoursOnly = fix(hourWithDecimals - hourDecimals);

		let minuteWithDecimals = hourDecimals * 60;
		let minuteDecimals = fix(minuteWithDecimals % 1);
		let minutesOnly = fix(minuteWithDecimals - minuteDecimals);

		let secondsWithDecimal = minuteDecimals * 60;
		let secondsDecimal = fix(secondsWithDecimal % 1);
		let secondsOnly = fix(secondsWithDecimal - secondsDecimal);

		setHorasTrabalhadasH(safeHourDisplay(hoursOnly));
		setHorasTrabalhadasM(safeHourDisplay(minutesOnly));
		setHorasTrabalhadasS(safeHourDisplay(secondsOnly));
	};

	return(
		<>
		<p>Total payment</p>
		<input data-testid="total-payment" type="number" value={pagamentoTotal} onChange={pagamentoTotalChangeHandler} />
		<p>Payment/Hr</p>
		<input data-testid="payment-hr" type="number" value={pagamentoPorHora} onChange={pagamentoPorHoraChangeHandler} />
		<p>Hours worked:</p>
		<p data-testid="hours-worked">{`${horasTrabalhadasH}:${horasTrabalhadasM}:${horasTrabalhadasS}`} Hrs</p>
		</>
	);
};

export default FirstCalculator;