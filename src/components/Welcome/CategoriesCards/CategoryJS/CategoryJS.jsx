
import style from '../../CategoriesCards/CategoriesCardsStyle.module.css'
export function CategoryJS(){
    function handleClick() {
        console.log('hello world JS');
      }
    return(
        <div className={style.card_one} onClick={handleClick}>
            <h3>JavaScript</h3>
            <p>Check your basic knowlage of Pure JS</p>
        </div>
    )
}