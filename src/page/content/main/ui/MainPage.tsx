import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';

import s from './MainPage.module.scss';

export const MainPage = ({
    className,
}: {
    className?: string;
}) => {
    // console.log(__API__, '__API__');

    // const getCities = async (db) => {
    //     const citiesCol = collection(db, 'store');
    //     const citySnapshot = await getDocs(citiesCol);
    //     const cityList = citySnapshot.docs.map((doc) => doc.data());

    //     console.log(cityList);

    //     return cityList;
    // };

    // getCities(mainDb);

    return (
        <div className={s.mainPage}>
            Main
            {__API__}
        </div>
    );
};
