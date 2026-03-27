import style from './appLayout.module.scss'
import MainSection from '../Components/MainSection/MainSection'

function AppLayout (){

    return(
        <section className={style.appLayout}>
          <MainSection />
        </section>
    )

}

export default AppLayout