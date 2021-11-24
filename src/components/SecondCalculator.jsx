import React, {useState, useEffect} from 'react'

const SecondCalculator = () => {
  const [pagamentoPorHora, setPagamentoPorHora] = useState('');
  const [horasTrabalhadasH, setHorasTrabalhadasH] = useState('');
  const [horasTrabalhadasM, setHorasTrabalhadasM] = useState('');
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
    let parsedNum = parseFloat(num);
    if(isNaN(parsedNum)){
      return 0;
    }

    // .toFixed(2) converts to string <-- WARNING
    return parseFloat(parsedNum.toFixed(10));
  };

  const safeResultDisplay = (num) => {
    if(isNaN(num)){
      return 0;
    }

    // .toFixed(2) converts to string <-- WARNING
    return parseFloat(num.toFixed(2));
  };

  useEffect(() => {
    let _pagamentoPorHora = fix(pagamentoPorHora);
    let _horasTrabalhadasH = fix(horasTrabalhadasH);
    let _horasTrabalhadasM = fix(horasTrabalhadasM);

    if(_pagamentoPorHora == 0 && 
       _pagamentoPorHora == 0 && 
       _pagamentoPorHora == 0){
      setPagamentoTotal(0);
      return;
    }
    
    let minutesToDecimal = fix(_horasTrabalhadasM / 60);
    let hoursToDecimal = _horasTrabalhadasH + minutesToDecimal;
    let result = _pagamentoPorHora * (_horasTrabalhadasH + minutesToDecimal);

    setPagamentoTotal(safeResultDisplay(result));
  }, [pagamentoPorHora, horasTrabalhadasH, horasTrabalhadasM]);

  return(
    <>
      <p>Payment/Hr</p>
      <input data-testid="2-payment-hr" type="number" value={pagamentoPorHora} onChange={pagamentoPorHoraChangeHandler}/>

      <p>Hours worked</p>
      <input data-testid="2-hours-worked-h" type="number" value={horasTrabalhadasH} onChange={horasTrabalhadasHChangeHandler} />
      <input data-testid="2-hours-worked-m" type="number" value={horasTrabalhadasM} onChange={horasTrabalhadasMChangeHandler} />

      <p>Total payment:</p>
      <p data-testid="2-total-payment">${pagamentoTotal}</p>
    </>);
};

export default SecondCalculator;