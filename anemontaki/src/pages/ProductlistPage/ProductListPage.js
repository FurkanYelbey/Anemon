import React, { useMemo } from 'react'
import { FilterIcon } from 'lucide-react'
import content from '../../data/content.json'
import Categories from '../../components/Filters/Categories';
import PriceFilter from '../../components/Filters/PriceFilter';
import SizeFilter from '../../components/Filters/SizeFilter';
import ProductCard from './ProductCard';

const categories = content?.categories;

const ProductListPage = ({categoryType}) => {

  const categoryContent = useMemo(()=> {
    return categories?.find((category)=> category.code === categoryType)
  },[categoryType]);

  const productListItems = useMemo(()=>{
    return content?.products?.filter((product)=> product?.category_id === categoryContent?.id);
  },[categoryContent]);


  return (
    <div>
      <div className='flex'>
        <div className='w-[20%] p-[10px] border rounded-lg m-[20px]'>
          {/* Filtreler */}
          <div className='flex justify-between'>
            <p className='text-[16px] text-gray-600'>Filtre</p>
            <FilterIcon />
          </div>
          <div>
            <p className='text-[16px] text-black mt-5'>Kategoriler</p>
            <Categories types={categoryContent?.types} />
            <hr></hr>
          </div>
          <div>
            {/* Price */}
            <PriceFilter/>
            <hr></hr>
            {/* Sizes */}
            <SizeFilter sizes={categoryContent?.meta_data?.sizes} />
          </div>
        </div>

        <div className='p-[40px]'>
          {/* Products */}
          <p className='text-black text-lg'>{categoryContent?.description}</p>
          <div className='pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2'>
            {productListItems?.map((item,index)=>(
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductListPage