import React, { useEffect, useMemo, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import content from '../../data/content.json';
import Rating from '../../components/Rating/Rating';
import CartIcon from '../../components/common/CartIcon';
import SvgCreditCard from '../../components/common/SvgCreditCard'
import SectionHeading from '../../components/Sections/SectionsHeading/SectionHeading.jsx'
import ProductCard from '../ProductlistPage/ProductCard.js'

const categories = content?.categories;

const extraSections = [
    {
        icon:<SvgCreditCard/>,
        label:'Güvenli Ödeme'
    }
]

const ProductDetail = () => {
    const { product } = useLoaderData();
    const [image,setImage] = useState();
    const [BreadcrumbLinks,setBreadCrumbLink] = useState([])

    const similarProducts = useMemo(()=>{
        return content?.products?.filter((item)=>item?.type_id === product?.type_id && item?.id !== product?.id);
    },[product])

    const productCategory = useMemo(()=>{
        return categories?.find((category)=> category?.id === product?.category_id)
    },[product])
    useEffect(()=>{
        setImage(product?.images[0]?.startsWith('http') ? product?.images[0] : product?.thumbnail)
        setBreadCrumbLink([]);
        const arrayLinks = [{title:'Shop',path:'/'},{
            title:productCategory?.name,
            path:productCategory?.path
        }];
        const productType = productCategory?.types?.find((item)=> item?.type_id === product?.type_id)
        if(productType){
            arrayLinks?.push({
                title:productType?.name,
                path:productType?.name
            })
        }
        setBreadCrumbLink(arrayLinks)
    },[productCategory,product])



    return (
        <>
    <div className='flex flex-col md:flex-row px-10'>
        <div className='w-[100%] lg:w-[50%] md:w-[40%]'>
            {/* Image */}
            <div className='flex flex-col md:flex-row h-[30%]'>
                <div className='w-[100%] md:w-[30%] justify-center h-[40px] md:h-[320px]'>
                    {/* Stack Images */}
                    <div className='flex flex-row md:flex-col justify-center h-full'>
                        {
                            product?.images[0]?.startsWith('http') && product?.images?.map((item,index)=>(
                                <button onClick={()=> setImage(item)} className='rounded-lg w-fit p-2 mb-2'><img src={item} className='h-[60px] w-[60px] bg-cover bg-center p-2 hover:scale-105' alt={'sample-'+index} /></button>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full md:w-[80%] flex justify-center md:pt-0 pt-10'>
                    <img src={image} className='h-full w-full max-h-[520px]
         border rounded-lg cursor-pointer object-cover' alt={product?.title} />
                </div>

            </div>
        </div>
        <div className='w-[60%] px-10'>
            {/* Product Description */}
            <Breadcrumb links={BreadcrumbLinks}/>
            <p className='text-3xl pt-2'>{product?.title}</p>
            <Rating rating={product?.rating} />
            {/* Price Tag */}
            <p className='text-xl bold py-2'>₺{product?.price}</p>
            <div className='flex pt-4'>
            <button className='bg-black border rounded-lg hover:bg-gray-700'><div className='flex h-[42px] rounded-lg w-[150px] px-2 items-center justify-center bg-black text-white hover:bg-gray-700'><CartIcon />Sepete ekle</div></button>
        </div>
        <div className='flex flex-wrap w-[250px] pt-4'>
            {/* */}
            {
                extraSections?.map((section)=>(
                    <div className='flex justify-center items-center'>
                        {section?.icon}
                        <p className='px-2'>{section?.label}</p>
                    </div>
                ))
            }

        </div>
        </div>

        
    </div>
    {/* Product Description */}
    <SectionHeading title={'Ürün Açıklaması'} />
    <div className='md:w-[50%] w-full p-2'>

    <p className='px-8'>{product?.description}</p>
    </div>

    <SectionHeading title={'Benzer Ürünler'} />
    <div className='flex px-10'>
    <div className='pt-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8 px-2'>
        {similarProducts?.map((item,index)=>(
            <ProductCard key={index} {...item} />
        ))}
        {!similarProducts?.length && <p>Benzer ürünler bulunmamaktadır.</p>}
    </div>
    </div>
    
    </>
  )
}

export default ProductDetail