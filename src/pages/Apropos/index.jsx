import './Apropos.scss'
import Banner from '../../components/Banner'
import kalen from '../../assets/images/kalen.jpeg'
function Apropos(){
    return (<main>
        <Banner cover={kalen}></Banner>

        <div className='collapse'>
            <div className='collapse__header'>
                <h2>titre</h2>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div className='collapse__bady'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem ipsam quisquam beatae quas sapiente. Odit omnis tempore inventore delectus, quam quos fugiat et perferendis fuga culpa consequuntur aspernatur facere?
            </div>

        </div>
    </main>)
}

export default Apropos