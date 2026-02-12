import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../store/features/common';
import { verifyAPI } from '../../api/authentication';

const VerifyCode = ({email}) => {

    const [values,setValues]= useState({
        userName:email,
        code:''
    });

    const [error,setError] =useState('');
  const dispatch = useDispatch();
  const [message,setMessage] = useState('');

  const onSubmit= useCallback((e)=>{
    e.preventDefault();
    setError('');
    dispatch(setLoading(true));
    verifyAPI(values).then(res=>{
      setMessage('Teşekkürler! Mail adresin başarıyla onaylandı. Hesabına giriş yapabilirsin.')
    }).catch(err=>{
      setError('Girdiğin kod yanlış veya süresi geçmiş.');
    }).finally(()=>{
      dispatch(setLoading(false));
    })

  },[dispatch, values]);

  const handleOnChange = useCallback((e)=>{
    e.persist();
    setValues(values=>({
      ...values,
      [e.target.name]:e.target?.value,
    }))
  },[]);

  
  return (
    <div className='p-4'>
      {!message && 
      <>
      <p className='text-lg text-blue-900'>Üyelik başarılı. Lütfen üyeliğinizi tamamlamak için mailinize gelen onay kodunu kontrol edin.</p>
      <p className='text-lg text-gray-600 pt-4 font-bold'>Hesabınızı onaylamak için lütfen mailinize iletilen 6 haneli onay kodunu giriniz.</p>  

      <form onSubmit={onSubmit} className='flex flex-col gap-4'>
      <input type='text' name='code' value={values?.code} maxLength={6} onChange={handleOnChange} placeholder='Onay Kodu' className='h-[48px] border rounded border-gray-600 p-2 mt-4' required/>
      <button type='submit' className='border w-[120px] rounded-lg h-[48px] bg-black text-white mb-4'>Onayla</button>
      </form>
      {error && <p className='text-xl text-red-600'>{error}</p>}
      </>
      }
      {message && <p className='text-lg'>{message}</p>}
    </div>
  )
}

export default VerifyCode