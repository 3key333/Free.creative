import Header from '../Header/Header'
import style from './mainSection.module.scss'
import { imagesBg } from '../../dataForSlider'
import { useContext, useEffect, useState } from 'react'
import Portal from '../../Portal/portal'
import { AppContext } from '../../Context/context'


function MainSection () {

    const [ nameLink , setNameLink] = useState(0)

    const {
        isOpen, 
        openPortal, 
        closePortal, 
        inputValueName, 
        inputValuePhone, 
        setInputValueName, 
        setInputValuePhone
    } = useContext(AppContext)

    const [isChecked, setIsChecked] = useState(false)

    const handleChecked = (event) => {
        setIsChecked(event.target.checked)
    }

    const canSubmit = isChecked && inputValueName !== '' && inputValuePhone !== ''
    

    useEffect(()=>{

        const id = setInterval(()=>{
            
            setNameLink( (prev) => (prev + 1) % imagesBg.length) 

        }, 2000)

        return () => clearInterval(id)
        // return в useEffect возвращает функцию, которую React запомнит.
        // в этом случае она не дает сделать несколько таймеров что защищает от багов
        // если не вызывать clearInterval, интервал может продолжать “тикать”

    }, [])
    

    return(
        
        <section className={style.mainSection} style={{
            backgroundImage: `url(/${imagesBg[nameLink]}-main-bg.svg)`
        }}>
            <div className={style.mainSectionInner}>

                <Header/>

                <main>
                    <div className={style.mainInner}>

                        <div className={style.mainTitle}>

                            <h1>Вам нужен фирменный <br /> стиль или ребрендинг?</h1>

                            <p>Разработаем в срок от 10-ти дней</p>

                        </div>

                        <div className={style.mainButtons}>

                            <button>Портфолио</button>

                            <button onClick={openPortal}>Оставить заявку</button>
                            { isOpen ? (
                                <Portal>
                                    <>

                                      <div className={style.portalTitle}>
                                        <h2 className={style.portalTitleText}>Оставить заявку</h2>
                                      </div>

                                      <div className={style.portalInputs}>
                                        <input type="text"  placeholder='Ваше Имя' value={inputValueName} onChange={(e)=>setInputValueName(e.target.value)}/>
                                        <input type="text" placeholder='+7 (999) 999-99-99' value={inputValuePhone} onChange={(e)=>setInputValuePhone(e.target.value)}/>
                                      </div>

                                      <div className={style.portalCheckBox}>
                                        <input type="checkbox" checked={isChecked} onChange={handleChecked}/>
                                        <p>Я принимаю условия передачи персональных данных</p>
                                      </div>

                                      <div className={style.portalButton}>

                                        <button
                                         disabled={!canSubmit} 
                                         onClick={closePortal} 
                                         style={{backgroundColor: isChecked && inputValueName !== '' && inputValuePhone !== ''? 'rgba(43, 89, 195, 1)' : '#7c7979'}}>
                                            Оставить заявку
                                        </button>

                                      </div>
                                    </>
                                </Portal>
                            ) : null }

                        </div>

                    </div>
                </main>

            </div>
        </section>
       
    )

}

export default MainSection