import './style.css'
import { Iprops } from './type'

const PageTitle = ({ title }: Iprops) => {
    return (
        <div className='title'>
            {title}
        </div>
    )
}

export default PageTitle
