import React, { useEffect } from 'react'
import Navigation from '../components/Navigation/Navigation'
//import { fetchCategories } from './api/fetchCategories';
import { fetchCategories } from '../api/fetchCategories'
import { Outlet } from 'react-router-dom'
import Spinner from '../components/Spinner/Spinner'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { loadCategories } from '../store/features/category'

const ShopApplicationWrapper = () => {

  const isLoading = useSelector((state)=> state?.commonState?.loading);
  const dispatch = useDispatch();
    useEffect(() => {
      fetchCategories()
        .then(res => dispatch(loadCategories(res)));
    }, [dispatch]);
  return (
    <div>
        <Navigation />
        <Outlet />
        {isLoading && <Spinner />}
    </div>
  )
}

export default ShopApplicationWrapper