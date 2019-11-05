import React, { useState, useEffect, useRef } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCssModuleData } from './CssModuleTest.actions';
import styles from './CssModuleTest.scss';
import lovebirdsImage from '../../assets/images/lovebirds.jpg';

const mapStateSelector = state => ({
    data: state.CssModuleTestReducer.data,
    isLoading: state.CssModuleTestReducer.isLoading,
    isError: state.CssModuleTestReducer.isError,
});

const CssModuleTest = () => {

    const [count, setCount] = useState(200);
    const ref = useRef(null);
    const { data, isLoading, isError } = useSelector(mapStateSelector, shallowEqual);
    // const dispatch = useDispatch();

    /*useEffect(() => {
        dispatch(fetchCssModuleData())
    });*/

    let countCopy = 0;

    useEffect( () => {
        console.log('effect')

        return function () {
            console.log('effect cb');
            console.log(ref)
            if (!ref.current) {
                console.log(count);
                console.log(countCopy);
            }
        }
    });

    return (
        <div ref={ref}>
            <h2 className="alt-header">CssModuleTest</h2>
            <p className={styles.BlueColor}>
                CSS modules work if I am blue!
            </p>

            <aside>
                <label>Count: {count}</label>
                <button type="button" onClick={() => { setCount(count + 1); countCopy = count + 1}}>Add</button>
            </aside>

            <aside>
                <h3>Data in reducer:</h3>
                <h4>isLoading: {isLoading.toString()}</h4>
                <h4>isError: {isError.toString()}</h4>
                <h4>{data}</h4>
            </aside>

            <img src={lovebirdsImage} />
        </div>
    );
};

export default CssModuleTest;
