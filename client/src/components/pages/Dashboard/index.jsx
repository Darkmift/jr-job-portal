import PropTypes from 'prop-types';
import scss from './style.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented } from '@/store';

function Dashboard({ name = 'Dashboard' }) {
    const count = useSelector(({ value }) => value);
    const dispatch = useDispatch();

    return (
        <div className={scss['dashboard']}>
            <div className="main">{name}</div>
            <br />
            <div className="main">
                <button
                    style={{ marginRight: '5px' }}
                    onClick={() => dispatch(incremented())}
                >
                    Add
                </button>
                <h1>{count}</h1>
                <button onClick={() => dispatch(decremented())}>
                    Subtract
                </button>
            </div>
        </div>
    );
}

Dashboard.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Dashboard;
