import React, { useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {getCoin} from "../../actions/";

const ListCoin = memo ((props) => {

    const dispatch = useDispatch();
    const { getCoin, listCoin, loading } = props;

    useEffect(() => {
       getCoin()
    },[getCoin()]);

    return (
        <div>
            <p className='test-red'>This is list coin screen</p>
            {/*<Loading data={listUser} loading={loading}/>*/}
            {/*{*/}
            {/*    listUser && listUser.map((user, index) => (*/}
            {/*        <UserItem user={user} key={index}/>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    )
});

const mapStateToProps = state => {
    return {
        listCoin: state.coinReducer.listCoin,
        loading: state.loadingReducer.loading,
    };
};

const mapDispatchToProps = () => ({
    getCoin
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ListCoin);
