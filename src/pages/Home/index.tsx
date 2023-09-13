import Logo from '../../images/logo.png'
import { AiOutlineCalendar, AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Simple, Details, Descriptions, Buy, BuyBox, BuyTitle, BuyInfos, InfoText, BuyAmount, Terms, Menu } from './styles'
import React, { useState, useCallback,useEffect } from 'react';

export function Home() {
  const ticketPrice = 130
  const [amount, setAmount] = useState(1)
  

  const mostTicket = useCallback(() => {
    setAmount(state => state + 1) 
  }, [])
  
  const minusTicket = useCallback(() => {
    setAmount(state => state - 1)
  }, [])

  useEffect(() => {
    const feijontsEmail = localStorage.getItem('feijontsEmail')
    if (feijontsEmail === undefined || feijontsEmail === null || feijontsEmail === '') {
      (document as any).getElementById('entrar').style.display = 'block';
      (document as any).getElementById('registrar').style.display = 'block';
      (document as any).getElementById('ingressos').style.display = 'none';
    } else {
      (document as any).getElementById('entrar').style.display = 'none';
      (document as any).getElementById('registrar').style.display = 'none';
      (document as any).getElementById('ingressos').style.display = 'block';
    }
  }, [])
  
  const registro = () => {
    window.open('https://festavera.store/registro');
  }

  const login = () => {
    window.open('https://festavera.store/login');
  }

  const ingressos = () => {
    window.open('https://festavera.store/ingressos', '_blank');
  }

  const handleBuy = async () => {
    const terms = document.getElementById('termos') as HTMLInputElement | null;
    if ( terms?.checked ) {
      const email = localStorage.getItem('feijontsEmail')
      if (email === undefined || email === null || email === '') {
        window.open('https://festavera.store/registro');
        return;
      }
      let value = ticketPrice * amount
      let valueText = `${value}.00`

      window.open(`https://api.feijonts.com.br/?value=${valueText}&email=${email}`, '_blank');
    } else {
      return
    }
  }

  return (
    <>
      <Menu>
        <button id = "ingressos" onClick={ingressos}>Meus Ingressos</button>
        <button id = "registrar" onClick={registro}>Registrar</button>
        <button id = "entrar" onClick={login}>Entrar</button>
      </Menu>
      <Simple>
        <img src={Logo} alt="Logo" />
        <p>22H ÁS 03H</p>
        <p>12.12</p>
      </Simple>
      <Details>
        <Descriptions>
          <h1>VC BAILA | 12.12</h1>
          <div className="basicInfos">
            <AiOutlineCalendar />
            <p>12 dez - 2022 • 22:00 13 dez - 2022 • 03:00</p>
          </div>
          <div className="basicInfos">
            <AiOutlineCalendar />
            <p>Evento presencial em <a href=''>São Paulo - SP</a></p>
          </div>
          <h2>Descrição do evento</h2>
          <p>Comissão VC Baila & Cruza apresenta: Formatura<br></br><br></br>Fim de ano está chegando, junto com a tão esperada festa de formatura! Evento para comemorar esse ano incrível 🎉<br></br><br></br>Não da pra perder, o último momento da comissão VC Baila & Cruza é agora!<br></br><br></br>Lembrando a todos que os RGs serão obrigatórios e solicitados na entrada.<br></br><br></br>Save the date - 12.12<br></br><br></br></p>
          <h2>Local</h2>
          <p>ESPAÇO FABRIQUE</p>
          <p>Rua Barra Funda, 1071<br/>Barra Funda - São Paulo</p><br/>
          <a href='https://www.instagram.com/fabriqueoficial/' target="_blank">VER MAIS SOBRE O ESPAÇO</a>
        </Descriptions>
        <Buy>
          <BuyBox>
            <BuyTitle>
              <p>COMPRAR</p> 
              <p>R$ {(ticketPrice * amount).toLocaleString()}</p>
            </BuyTitle>
            <BuyInfos>
              <InfoText>
                <p>INGRESSO VC BAILA</p>
                <small>Vendas até 12/12/2022</small>
              </InfoText>
              <BuyAmount>
                <AiOutlineMinusCircle onClick={minusTicket}color='#FF7575'/>
                <p>{amount}</p>
                <AiOutlinePlusCircle onClick={mostTicket} color='#FF7575'/>
              </BuyAmount>
            </BuyInfos>

            <Terms>
              <p>Você aceita os nossos <a href="https://drive.google.com/file/d/1jZul80_740GdYdk7dfqrNoAAD7TPz4Zv/view?usp=sharing">termos de compra e uso?</a></p>
              <input type="checkbox" id="termos" name="termos"/>
            </Terms>

            <button onClick={handleBuy}>COMPRAR INGRESSOS</button>
          </BuyBox>
        </Buy>
      </Details>
    </>
  )
}