import { useTranslation } from 'react-i18next'
import s from './OrderForm.module.scss'


export const OrderForm = () => {
    const {t} = useTranslation()

    const handleSendCheck = (form: any) => {
        console.log(form);
        
    }

    return (
        <form onSubmit={handleSendCheck}>
            <input type="text" name='addres' placeholder={t('Адрес доставки')}/>
            <select name="typePay" id="">
                <option value="1">{t('Наличные')}</option>
                <option value="2">{t('Карта')}</option>
            </select>
            <button type='submit'>
                submit
            </button>
        </form>
    )
}