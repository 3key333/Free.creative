import Header from '../Header/Header'
import style from './mainSection.module.scss'
import { imagesBg } from '../../dataForSlider'
import { useEffect, useState } from 'react'


function MainSection () {

    const [ nameLink , setNameLink] = useState(0)

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
                            <button>Оставить заявку</button>
                        </div>

                    </div>
                </main>

            </div>
        </section>
       
    )

}

export default MainSection