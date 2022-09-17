import toast from 'react-hot-toast'
import styles from './notifications.module.scss'
import { BsBagPlusFill, BsBagDashFill } from 'react-icons/bs'

export const addNotify = (productName) => toast(`${productName} is added to your cart!`, {
    className: styles.addNotify,

    icon: <BsBagPlusFill />,

    iconTheme: {
        primary: '#000',
        secondary: '#fff',
    },
})

export const removeNotify = (productName) => toast(`${productName} is removed from your cart!`, {
    className: styles.removeNotify,

    icon: <BsBagDashFill />,

    iconTheme: {
        primary: '#000',
        secondary: '#fff',
    },
})
